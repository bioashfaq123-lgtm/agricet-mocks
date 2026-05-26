"""
Regenerates continuous background music and re-attaches it to the existing video.
Much faster — reuses rendered frames, only re-encodes audio.
"""
import numpy as np
from scipy.io import wavfile
from moviepy import VideoFileClip, AudioFileClip

SR = 44100   # sample rate

# ── Note frequencies ──────────────────────────────────────────────────────────
C2=65.41;  G2=98.00
C3=130.81; D3=146.83; E3=164.81; F3=174.61; G3=196.00; A3=220.00; B3=246.94
C4=261.63; D4=293.66; E4=329.63; F4=349.23; G4=392.00; A4=440.00; B4=493.88
C5=523.25; D5=587.33; E5=659.25; F5=698.46; G5=783.99; A5=880.00

def sine(freq, dur, vel=1.0):
    t = np.linspace(0, dur, int(SR*dur), endpoint=False)
    return (np.sin(2*np.pi*freq*t) +
            0.50*np.sin(2*np.pi*freq*2*t) +
            0.25*np.sin(2*np.pi*freq*3*t) +
            0.12*np.sin(2*np.pi*freq*4*t)) * vel

def adsr(samples, atk, dcy, sus_level, rel, total):
    n = len(samples)
    a = int(atk*SR); d = int(dcy*SR); r = int(rel*SR)
    s = max(0, n-a-d-r)
    env = np.concatenate([
        np.linspace(0, 1, a),
        np.linspace(1, sus_level, d),
        np.full(s, sus_level),
        np.linspace(sus_level, 0, r)
    ])[:n]
    return samples * env

def note(freq, dur, vel=0.3, atk=0.08, dcy=0.15, sus=0.65, rel=0.4):
    s = sine(freq, dur, vel)
    return adsr(s, atk, dcy, sus, rel, dur)

def pad_note(freq, dur, vel=0.12):
    """Long sustained pad — very slow attack/release, high sustain."""
    return adsr(sine(freq, dur, vel), atk=0.8, dcy=0.3, sus_level=0.85, rel=1.2, total=dur)

def place(track, samples, t_sec):
    s = int(t_sec * SR)
    e = s + len(samples)
    if e > len(track):
        samples = samples[:len(track)-s]
        e = s + len(samples)
    if s < len(track):
        track[s:e] += samples

# ── Build music ───────────────────────────────────────────────────────────────
def generate(duration=80):
    track = np.zeros(int(SR * duration))

    # ── Layer 1: Bass drone (very subtle, continuous) ──────────────────────
    # Continuous low hum — ensures absolute silence never happens
    t_bass = np.linspace(0, duration, int(SR*duration))
    drone = (np.sin(2*np.pi*C2*t_bass) * 0.04 +
             np.sin(2*np.pi*G2*t_bass) * 0.03)
    track[:len(drone)] += drone

    # ── Layer 2: Sustained pad chords (8s each, overlapping by 2s) ────────
    # Progression: C → G → Am → F  (each 8 seconds, new chord every 6s)
    pad_chords = [
        [C3, E4, G4, C5],   # C major
        [G3, B3, D4, G5],   # G major
        [A3, C4, E5, A5],   # A minor
        [F3, A3, C5, F5],   # F major
    ]
    chord_dur   = 8.0    # each pad chord lasts 8 seconds
    chord_step  = 6.0    # new chord every 6 seconds (2s overlap = smooth crossfade)
    t = 0.0
    while t < duration + chord_step:
        chord = pad_chords[int(t / chord_step) % len(pad_chords)]
        for freq in chord:
            actual_dur = min(chord_dur, duration - t + 1)
            if actual_dur > 0.5:
                place(track, pad_note(freq, actual_dur, vel=0.10), t)
        t += chord_step

    # ── Layer 3: Chord arpeggios (short notes, continuous rhythm) ─────────
    # Each chord plays 8 arpeggio notes over 2 seconds (every 0.25s)
    arp_chords = [
        [C4, E4, G4, C5, G4, E4, C4, E4],   # C major
        [G3, B3, D4, G4, D4, B3, G3, B3],   # G major
        [A3, C4, E4, A4, E4, C4, A3, C4],   # A minor
        [F3, A3, C4, F4, C4, A3, F3, A3],   # F major
    ]
    arp_step  = 0.22   # note every 0.22 seconds
    arp_dur   = 0.55   # each arp note lasts 0.55s
    t = 0.5
    chord_idx = 0
    while t < duration - 0.5:
        chord_notes = arp_chords[chord_idx % 4]
        for i, freq in enumerate(chord_notes):
            place(track, note(freq, arp_dur, vel=0.13, atk=0.02, dcy=0.08, sus=0.6, rel=0.25), t + i*arp_step)
        t += len(chord_notes) * arp_step   # move to next chord block
        chord_idx += 1

    # ── Layer 4: Melody (pentatonic, repeating motif) ─────────────────────
    # Pentatonic scale: C D E G A — always sounds good
    motif = [C5, E5, G5, A5, G5, E5, D5, C5,
             A4, C5, E5, G5, A5, G5, E5, D5]
    mel_step = 0.72   # note every 0.72 seconds
    mel_dur  = 1.0    # each melody note lasts 1.0s (slight overlap for legato)
    t = 1.2
    while t < duration - 1.5:
        for freq in motif:
            if t >= duration - 1.5:
                break
            place(track, note(freq, mel_dur, vel=0.07, atk=0.04, dcy=0.1, sus=0.5, rel=0.45), t)
            t += mel_step

    # ── Normalize + smooth fade in/out ────────────────────────────────────
    peak = np.max(np.abs(track))
    if peak > 0:
        track /= peak
    track *= 0.70

    # Fade in: 2 seconds
    fi = int(2.0 * SR)
    track[:fi] *= np.linspace(0, 1, fi)

    # Fade out: 3 seconds
    fo = int(3.0 * SR)
    track[-fo:] *= np.linspace(1, 0, fo)

    # Convert to stereo int16
    audio = (track * 32767).astype(np.int16)
    stereo = np.column_stack([audio, audio])
    return stereo

# ── Generate and save music ───────────────────────────────────────────────────
VIDEO_IN  = r"C:\Users\bioas\Agricet Mock Test Series\AGRICET_YouTube_Video.mp4"
MUSIC_WAV = r"C:\Users\bioas\Agricet Mock Test Series\bg_music_v2.wav"
VIDEO_OUT = r"C:\Users\bioas\Agricet Mock Test Series\AGRICET_YouTube_Video.mp4"
DEST      = r"C:\Users\bioas\OneDrive\Desktop\AGRICET_YouTube_Video.mp4"

print("Loading existing video...")
video = VideoFileClip(VIDEO_IN)
dur   = video.duration
print(f"  Video duration: {dur:.1f}s")

print("Generating continuous music...")
audio_data = generate(duration=int(dur) + 4)
wavfile.write(MUSIC_WAV, SR, audio_data)
print(f"  Music WAV saved ({len(audio_data)/SR:.1f}s)")

print("Attaching music to video...")
music = AudioFileClip(MUSIC_WAV).with_duration(dur)
final = video.with_audio(music)

print("Rendering final video...")
final.write_videofile(VIDEO_OUT, fps=24, codec="libx264", audio_codec="aac",
                      logger="bar", ffmpeg_params=["-crf","18","-preset","fast"])

import shutil
shutil.copy2(VIDEO_OUT, DEST)
print(f"\nDone! Saved to Desktop: {DEST}")
