"""
AGRICET YouTube Video — v3
• Slides change reliably (ImageSequenceClip frame-by-frame)
• Smooth crossfade transitions between slides
• Upbeat happy background music
• Clean UI/UX design
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from moviepy import ImageSequenceClip, AudioFileClip
from scipy.io import wavfile
import os

W, H = 1280, 720
FPS  = 24
URL  = "agricet-mocks-8mry.vercel.app"

# ── Fonts ─────────────────────────────────────────────────────────────────────
FD = "C:/Windows/Fonts/"
def load(name, size):
    for fn in [name, name.lower()]:
        for d in [FD, ""]:
            try: return ImageFont.truetype(d + fn, size)
            except OSError: pass
    return ImageFont.load_default()

F72=load("arialbd.ttf",72); F60=load("arialbd.ttf",60); F52=load("arialbd.ttf",52)
F44=load("arialbd.ttf",44); F38=load("arialbd.ttf",38); F34=load("arialbd.ttf",34)
F30=load("arialbd.ttf",30); F28=load("arialbd.ttf",28); F26=load("arialbd.ttf",26)
F24=load("arial.ttf",  24); F22=load("arial.ttf",  22); F20=load("arial.ttf",  20)
F19=load("arial.ttf",  19); F18=load("arial.ttf",  18); F16=load("arial.ttf",  16)

# ── Colour palette (modern, clean) ────────────────────────────────────────────
BG       = "#0d1b2a"   # deep dark blue — main background
BG2      = "#1b2e45"   # card background
ACCENT1  = "#3b82f6"   # bright blue — primary accent
ACCENT2  = "#10b981"   # emerald green — secondary accent
GOLD     = "#f59e0b"   # amber — highlights
WHITE    = "#f0f9ff"   # off-white text
GRAY     = "#94a3b8"   # muted text
LGRAY    = "#e2e8f0"   # light text
RED      = "#ef4444"   # danger/problem
PURPLE   = "#8b5cf6"   # purple accent

def rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2],16) for i in (0,2,4))

def ct(draw,text,cx,cy,font,color):
    bb=draw.textbbox((0,0),text,font=font)
    draw.text((cx-(bb[2]-bb[0])//2, cy-(bb[3]-bb[1])//2),text,font=font,fill=rgb(color))

def lt(draw,text,x,cy,font,color):
    bb=draw.textbbox((0,0),text,font=font)
    draw.text((x, cy-(bb[3]-bb[1])//2),text,font=font,fill=rgb(color))

def rt(draw,text,rx,cy,font,color):
    bb=draw.textbbox((0,0),text,font=font)
    draw.text((rx-(bb[2]-bb[0]), cy-(bb[3]-bb[1])//2),text,font=font,fill=rgb(color))

def rr(draw,xy,radius,fill,outline=None,lw=2):
    draw.rounded_rectangle(xy,radius=radius,fill=rgb(fill),
                            outline=rgb(outline) if outline else None,width=lw)

def gradient_bg(img, top_col, bot_col):
    """Vertical gradient background."""
    draw = ImageDraw.Draw(img)
    tc, bc = rgb(top_col), rgb(bot_col)
    for y in range(H):
        t = y/H
        c = tuple(int(tc[i]*(1-t)+bc[i]*t) for i in range(3))
        draw.line([(0,y),(W,y)], fill=c)

def url_bar(draw):
    """URL bar at very bottom."""
    draw.rectangle([(0,H-36),(W,H)], fill=rgb("#0a1628"))
    ct(draw, URL, W//2, H-18, F18, GOLD)

def progress_dots(draw, current, total):
    """Slide progress dots."""
    dot_r=5; gap=18; total_w=(total-1)*gap+dot_r*2
    sx=(W-total_w)//2; y=H-54
    for i in range(total):
        col = WHITE if i==current else GRAY
        cx_=sx+i*gap+dot_r
        draw.ellipse([(cx_-dot_r,y-dot_r),(cx_+dot_r,y+dot_r)], fill=rgb(col))

def accent_line(draw, y, col=ACCENT1, w_pct=0.5):
    x0=int(W*(1-w_pct)/2); x1=W-x0
    draw.rectangle([(x0,y),(x1,y+3)], fill=rgb(col))

TOTAL_SLIDES = 11

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 1 — Intro
# ════════════════════════════════════════════════════════════════════════════
def slide1():
    img = Image.new("RGB",(W,H))
    gradient_bg(img,"#0d1b2a","#1a3a5c")
    draw = ImageDraw.Draw(img)

    # Top accent bar
    draw.rectangle([(0,0),(W,5)], fill=rgb(ACCENT2))

    # Glowing orb decorations
    for (ox,oy,orb_r,oc) in [(180,160,200,"#1e3a5f"),(1100,500,240,"#1a3458")]:
        draw.ellipse([(ox-orb_r,oy-orb_r),(ox+orb_r,oy+orb_r)], fill=rgb(oc))

    # AGRICET 2026 badge
    rr(draw,(W//2-130,130,W//2+130,178),14,ACCENT2)
    ct(draw,"AGRICET 2026",W//2,154,F28,WHITE)

    # Main title
    ct(draw,"Mock Test Series",W//2,260,F60,WHITE)

    # Subtitle chips
    chips=[("17 Subjects",ACCENT1),("PYQ 2023-25",ACCENT2),("Rs.199 Lifetime",GOLD)]
    total_w=sum(140 for _ in chips)+20*(len(chips)-1)
    sx=(W-total_w)//2; y_chip=330
    for label,col in chips:
        rr(draw,(sx,y_chip,sx+140,y_chip+36),18,col)
        ct(draw,label,sx+70,y_chip+18,F20,WHITE)
        sx+=160

    accent_line(draw,390,GOLD,0.4)
    ct(draw,URL,W//2,450,F30,GOLD)

    # Bottom branding
    draw.rectangle([(0,H-80),(W,H-36)], fill=rgb("#0a1628"))
    ct(draw,"Nalanda Study Circle, Jagtial  |  Telangana & Andhra Pradesh",W//2,H-58,F20,GRAY)

    progress_dots(draw,0,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 2 — Problem
# ════════════════════════════════════════════════════════════════════════════
def slide2():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#1a0a0a","#0d1b2a")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(RED))

    ct(draw,"The Problem Every AGRICET",W//2,115,F44,WHITE)
    ct(draw,"Student Faces",W//2,168,F44,RED)
    accent_line(draw,200,RED,0.45)

    problems=[
        ("No dedicated AGRICET mock test platform exists","#1f0a0a"),
        ("PYQ papers scattered everywhere — hard to find","#1f0a0a"),
        ("No subject-wise question analysis available","#1f0a0a"),
        ("Coaching is too expensive for most students","#1f0a0a"),
    ]
    y=228
    for prob,_ in problems:
        rr(draw,(60,y,W-60,y+72),12,BG2,outline=RED,lw=1)
        # X circle
        draw.ellipse([(82,y+16),(116,y+56)],fill=rgb(RED))
        ct(draw,"X",99,y+36,F26,WHITE)
        lt(draw,prob,136,y+36,F24,LGRAY)
        y+=84

    progress_dots(draw,1,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 3 — Solution
# ════════════════════════════════════════════════════════════════════════════
def slide3():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0a1f15","#0d1b2a")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(ACCENT2))

    ct(draw,"Introducing the Solution",W//2,100,F30,ACCENT2)
    ct(draw,"AGRICET Mock Test Platform",W//2,185,F52,WHITE)
    accent_line(draw,218,ACCENT2,0.55)

    feats=[
        ("17","DA Course Subjects",ACCENT1),
        ("3","PYQ Papers 2023 - 2025",ACCENT2),
        ("2000+","Lecture-wise MCQ Questions",GOLD),
        ("100%","AGRICET Exam Syllabus Covered",PURPLE),
    ]
    y=248
    for num,label,col in feats:
        rr(draw,(60,y,W-60,y+76),14,BG2)
        # Colour left bar
        draw.rectangle([(60,y),(66,y+76)],fill=rgb(col))
        bb=draw.textbbox((0,0),num,font=F44)
        draw.text((110,y+76//2-(bb[3]-bb[1])//2),num,font=F44,fill=rgb(col))
        lt(draw,label,110+(bb[2]-bb[0])+18,y+38,F26,LGRAY)
        y+=88

    progress_dots(draw,2,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 4 — AI Study Assistant (NEW)
# ════════════════════════════════════════════════════════════════════════════
def slide4():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0d0a2a","#1a0d3a")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(PURPLE))

    # Glowing orb decorations (AI feel)
    for (ox,oy,orb_r,oc) in [(960,120,180,"#1e0d40"),(200,580,160,"#150a35")]:
        draw.ellipse([(ox-orb_r,oy-orb_r),(ox+orb_r,oy+orb_r)], fill=rgb(oc))

    # NEW badge
    rr(draw,(W//2-70,52,W//2+70,88),16,PURPLE)
    ct(draw,"NEW FEATURE",W//2,70,F20,WHITE)

    # Title
    ct(draw,"AI Study Assistant",W//2,138,F52,WHITE)
    ct(draw,"Ask doubts. Get instant answers.",W//2,186,F26,GRAY)
    accent_line(draw,210,PURPLE,0.45)

    # Mock chat preview (left side)
    chat_x, chat_y = 52, 228
    chat_w, chat_h = 530, 310
    rr(draw,(chat_x,chat_y,chat_x+chat_w,chat_y+chat_h),16,BG2,outline=PURPLE,lw=1)

    # Chat header
    rr(draw,(chat_x,chat_y,chat_x+chat_w,chat_y+46),12,PURPLE)
    draw.rectangle([(chat_x,chat_y+26),(chat_x+chat_w,chat_y+46)],fill=rgb(PURPLE))
    # Bot icon circle
    draw.ellipse([(chat_x+10,chat_y+8),(chat_x+36,chat_y+38)],fill=rgb(WHITE))
    ct(draw,"AI",chat_x+23,chat_y+23,F18,PURPLE)
    lt(draw,"AGRICET Study Assistant",chat_x+46,chat_y+23,F20,WHITE)

    # User bubble
    msg_y = chat_y+58
    msg="What is photosynthesis?"
    bb=draw.textbbox((0,0),msg,font=F20)
    bw=bb[2]-bb[0]+24; bh=34
    bx=chat_x+chat_w-bw-14
    rr(draw,(bx,msg_y,bx+bw,msg_y+bh),12,ACCENT1)
    ct(draw,msg,bx+bw//2,msg_y+bh//2,F20,WHITE)

    # AI reply bubble (multi-line)
    reply_y=msg_y+50
    rr(draw,(chat_x+10,reply_y,chat_x+chat_w-10,reply_y+150),12,"#22143a",outline="#3d1f6b",lw=1)
    lt(draw,"Photosynthesis is the process by which",chat_x+20,reply_y+25,F19,LGRAY)
    lt(draw,"green plants convert sunlight, CO2 and",chat_x+20,reply_y+50,F19,LGRAY)
    lt(draw,"water into glucose and oxygen using",chat_x+20,reply_y+75,F19,LGRAY)
    lt(draw,"chlorophyll in chloroplasts.",chat_x+20,reply_y+100,F19,LGRAY)
    # Source tag
    rr(draw,(chat_x+20,reply_y+118,chat_x+240,reply_y+140),8,"#1a0d35")
    lt(draw,"Source: DA-111 Plant Pathology",chat_x+28,reply_y+129,F16,PURPLE)

    # Input bar at bottom of chat
    input_y=chat_y+chat_h-46
    rr(draw,(chat_x+10,input_y,chat_x+chat_w-10,input_y+34),10,"#16092e")
    lt(draw,"Ask any doubt from DA-101 to DA-291...",chat_x+20,input_y+17,F18,GRAY)
    # Send button
    rr(draw,(chat_x+chat_w-46,input_y+4,chat_x+chat_w-12,input_y+30),8,PURPLE)
    ct(draw,">",chat_x+chat_w-29,input_y+17,F20,WHITE)

    # Feature list (right side)
    feat_x=620
    features=[
        (PURPLE,"🧠","Powered by Claude AI"),
        (ACCENT2,"📚","Answers from PJTSAU notes"),
        (ACCENT1,"17","All 17 DA subjects covered"),
        (GOLD,  "24","Available 24/7, anytime"),
        (ACCENT2,"🆓","Included in your Rs.199 plan"),
    ]
    fy=238
    for col,icon,text in features:
        rr(draw,(feat_x,fy,W-40,fy+68),14,BG2)
        draw.rectangle([(feat_x,fy),(feat_x+5,fy+68)],fill=rgb(col))
        # Icon circle
        draw.ellipse([(feat_x+14,fy+12),(feat_x+60,fy+56)],fill=rgb(col))
        ct(draw,icon,feat_x+37,fy+34,F24,WHITE)
        lt(draw,text,feat_x+72,fy+34,F24,LGRAY)
        fy+=76

    progress_dots(draw,3,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 5 — Price (was Slide 4)
# ════════════════════════════════════════════════════════════════════════════
def slide5_price():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#1a1200","#0d1b2a")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(GOLD))

    ct(draw,"Lifetime Access at Just",W//2,110,F34,LGRAY)

    # Big price card
    rr(draw,(240,155,1040,470),28,BG2,outline=GOLD,lw=3)
    # Gold top strip on card
    rr(draw,(240,155,1040,210),20,GOLD)
    draw.rectangle([(240,185),(1040,210)],fill=rgb(GOLD))
    ct(draw,"SPECIAL LAUNCH PRICE",W//2,182,F24,"#1a1200")

    ct(draw,"Rs. 199",W//2,320,F72,GOLD)
    ct(draw,"ONE-TIME  PAYMENT  |  LIFETIME ACCESS",W//2,398,F26,ACCENT2)
    ct(draw,"No monthly fees   No expiry   No hidden charges",W//2,446,F22,GRAY)

    # Comparison
    rr(draw,(60,492,W-60,548),12,"#1f1500",outline=GOLD,lw=1)
    ct(draw,"Coaching Centres charge Rs.10,000+  |  We charge only Rs.199  |  Save 99%",
       W//2,520,F22,LGRAY)

    progress_dots(draw,4,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 6 — Weightage Chart
# ════════════════════════════════════════════════════════════════════════════
def slide6():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0d1b2a","#0d1b35")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(ACCENT1))

    ct(draw,"Subject-wise Question Distribution",W//2,42,F38,WHITE)
    ct(draw,"Average questions per subject based on AGRICET 2023, 2024 & 2025",W//2,86,F20,GRAY)

    subjects=[
        ("Agronomy (DA-101/102/201)",16.7,ACCENT1),
        ("Soil Science (DA-121/122)",13.0,ACCENT1),
        ("Entomology (DA-131/132)",12.3,ACCENT1),
        ("Horticulture (DA-281/282)",12.0,ACCENT1),
        ("Extension (DA-291)",10.3,ACCENT2),
        ("Farm Machinery (DA-151)",7.0,ACCENT2),
        ("Economics (DA-241)",6.7,ACCENT2),
        ("Plant Pathology (DA-171)",6.0,GRAY),
        ("Plant Breeding (DA-111)",5.7,GRAY),
        ("Survey (DA-252)",5.3,GRAY),
    ]
    BAR_X=370; MAX_BAR=700; y=120; RH=51
    for label,avg,col in subjects:
        bar_w=int((avg/16.7)*MAX_BAR)
        cy_=y+RH//2
        lt(draw,label,14,cy_,F19,LGRAY)
        # Bar background
        draw.rectangle([(BAR_X,y+8),(BAR_X+MAX_BAR,y+RH-8)],fill=rgb("#1e2d42"))
        # Bar fill
        draw.rectangle([(BAR_X,y+8),(BAR_X+bar_w,y+RH-8)],fill=rgb(col))
        rt(draw,f"  {avg} Qs",W-10,cy_,F22,GOLD)
        y+=RH

    progress_dots(draw,5,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 7 — Must-Study Subjects
# ════════════════════════════════════════════════════════════════════════════
def slide7():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0a1628","#0d2040")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(ACCENT1))

    # Header
    rr(draw,(0,0,W,118),0,BG2)
    ct(draw,"MUST-STUDY Subjects",W//2,46,F44,WHITE)
    ct(draw,"These 5 subjects cover approximately 55 - 60 questions out of 100",W//2,90,F22,GRAY)

    must=[
        ("DA-101, 102, 201","Agronomy, Crop Production & Meteorology","16.7 Qs"),
        ("DA-121, 122",     "Soil Science, Fertility & Water Conservation","13.0 Qs"),
        ("DA-131, 132",     "Entomology & Crop Pest Management","12.3 Qs"),
        ("DA-281, 282",     "Horticultural Crops & Forestry","12.0 Qs"),
        ("DA-291",          "Agricultural Extension & Rural Development","10.3 Qs"),
    ]
    CARD_H=90; y=128; PAD=28
    COLS=[ACCENT1,"#2563eb","#1d4ed8","#1e40af","#1e3a8a"]  # blue shades

    for i,(codes,label,avg) in enumerate(must):
        # Card
        rr(draw,(PAD,y,W-PAD,y+CARD_H),14,BG2)
        # Left colour accent bar
        draw.rectangle([(PAD,y),(PAD+5,y+CARD_H)],fill=rgb(COLS[i]))

        # Rank circle
        draw.ellipse([(PAD+14,y+CARD_H//2-28),(PAD+70,y+CARD_H//2+28)],fill=rgb(COLS[i]))
        ct(draw,str(i+1),PAD+42,y+CARD_H//2,F30,WHITE)

        # Code badge
        bx=PAD+82
        bb=draw.textbbox((0,0),codes,font=F20)
        bw=bb[2]-bb[0]+20; bh=28
        rr(draw,(bx,y+12,bx+bw,y+12+bh),8,ACCENT1)
        ct(draw,codes,bx+bw//2,y+12+bh//2,F20,WHITE)

        # Subject label (large, clear)
        lt(draw,label,bx,y+52,F24,LGRAY)

        # Avg (right, gold, large)
        rt(draw,avg,W-PAD-20,y+CARD_H//2,F34,GOLD)

        y+=CARD_H+10

    progress_dots(draw,6,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 8 — High Priority Subjects
# ════════════════════════════════════════════════════════════════════════════
def slide8():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0a1628","#0a2040")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(ACCENT2))

    rr(draw,(0,0,W,118),0,BG2)
    ct(draw,"HIGH PRIORITY Subjects",W//2,46,F44,WHITE)
    ct(draw,"These 5 subjects cover approximately 25 - 30 more questions",W//2,90,F22,GRAY)

    high=[
        ("DA-151","Farm Power & Machinery","7.0 Qs"),
        ("DA-241","Agricultural Economics","6.7 Qs"),
        ("DA-171","Plant Pathology & Microbiology","6.0 Qs"),
        ("DA-111","Plant Breeding, Genetics & Seed Technology","5.7 Qs"),
        ("DA-252","Survey, Levelling & Field Measurements","5.3 Qs"),
    ]
    CARD_H=90; y=128; PAD=28
    COLS=[ACCENT2,"#059669","#047857","#065f46","#064e3b"]

    for i,(codes,label,avg) in enumerate(high):
        rr(draw,(PAD,y,W-PAD,y+CARD_H),14,BG2)
        draw.rectangle([(PAD,y),(PAD+5,y+CARD_H)],fill=rgb(COLS[i]))
        draw.ellipse([(PAD+14,y+CARD_H//2-28),(PAD+70,y+CARD_H//2+28)],fill=rgb(COLS[i]))
        ct(draw,str(i+6),PAD+42,y+CARD_H//2,F30,WHITE)
        bx=PAD+82
        bb=draw.textbbox((0,0),codes,font=F20)
        bw=bb[2]-bb[0]+20; bh=28
        rr(draw,(bx,y+12,bx+bw,y+12+bh),8,ACCENT2)
        ct(draw,codes,bx+bw//2,y+12+bh//2,F20,WHITE)
        lt(draw,label,bx,y+52,F24,LGRAY)
        rt(draw,avg,W-PAD-20,y+CARD_H//2,F34,ACCENT2)
        y+=CARD_H+10

    progress_dots(draw,7,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 9 — Smart Study Strategy
# ════════════════════════════════════════════════════════════════════════════
def slide9():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0a1a0f","#0d1b2a")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(GOLD))

    ct(draw,"Smart Study Strategy",W//2,50,F44,WHITE)
    ct(draw,"Data-driven plan based on 3 years of PYQ analysis",W//2,96,F22,GRAY)
    accent_line(draw,120,GOLD,0.5)

    tips=[
        ("60%","Focus on Must-Study subjects — covers majority of the paper",GOLD),
        ("PYQ","Solve all 3 PYQ papers to understand real exam pattern",ACCENT1),
        ("MCQ","Practice lecture-wise MCQs to cover every topic",ACCENT2),
        ("Track","Use instant results to find weak areas and improve them",PURPLE),
        ("70+","Target 70+ marks — achievable with consistent practice",ACCENT2),
    ]
    y=142
    for tag,tip,col in tips:
        rr(draw,(40,y,W-40,y+82),14,BG2)
        draw.rectangle([(40,y),(46,y+82)],fill=rgb(col))
        # Tag badge
        bb=draw.textbbox((0,0),tag,font=F26)
        bw=bb[2]-bb[0]+24
        rr(draw,(58,y+22,58+bw,y+60),10,col)
        ct(draw,tag,58+bw//2,y+41,F26,"#0d1b2a")
        lt(draw,tip,58+bw+18,y+41,F24,LGRAY)
        y+=94

    progress_dots(draw,8,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 10 — How to Get Started
# ════════════════════════════════════════════════════════════════════════════
def slide10():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0d1b2a","#0a1f30")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,5)],fill=rgb(ACCENT2))

    ct(draw,"Get Started in 5 Easy Steps",W//2,52,F44,WHITE)
    accent_line(draw,88,ACCENT2,0.4)

    steps=[
        (ACCENT1,  "Visit",   URL,              "Open in any browser"),
        (ACCENT2,  "Sign Up", "Create Account", "Free registration with email"),
        (GOLD,     "Pay",     "Rs. 199 Only",   "One-time lifetime payment"),
        (PURPLE,   "Choose",  "Pick a Subject", "17 DA subjects available"),
        (ACCENT2,  "Practice","Start MCQs",     "Instant results & analysis"),
    ]
    y=110
    for col,step,action,desc in steps:
        rr(draw,(40,y,W-40,y+92),16,BG2)
        draw.rectangle([(40,y),(46,y+92)],fill=rgb(col))
        # Step circle
        draw.ellipse([(58,y+18),(108,y+74)],fill=rgb(col))
        ct(draw,str(steps.index((col,step,action,desc))+1),83,y+46,F30,WHITE)
        # Step label
        rr(draw,(120,y+22,224,y+66),10,col)
        ct(draw,step,172,y+44,F24,WHITE)
        # Action
        lt(draw,action,238,y+27,F26,WHITE)
        lt(draw,desc,238,y+58,F20,GRAY)
        y+=104

    progress_dots(draw,9,TOTAL_SLIDES)
    url_bar(draw)
    return img

# ════════════════════════════════════════════════════════════════════════════
#  SLIDE 11 — CTA / Outro
# ════════════════════════════════════════════════════════════════════════════
def slide11():
    img=Image.new("RGB",(W,H)); gradient_bg(img,"#0d1b2a","#0a1020")
    draw=ImageDraw.Draw(img)
    draw.rectangle([(0,0),(W,6)],fill=rgb(GOLD))

    ct(draw,"Start Your AGRICET 2026",W//2,140,F52,WHITE)
    ct(draw,"Preparation Today!",W//2,204,F52,GOLD)
    accent_line(draw,248,GOLD,0.5)

    # URL box
    rr(draw,(160,272,W-160,342),18,BG2,outline=GOLD,lw=2)
    ct(draw,URL,W//2,307,F34,GOLD)

    # Info chips
    chips=[("Rs.199",GOLD),("Lifetime",ACCENT2),("17 Subjects",ACCENT1),("PYQ Papers",PURPLE)]
    total=sum(148 for _ in chips)+12*(len(chips)-1); sx=(W-total)//2
    y_c=368
    for txt,col in chips:
        rr(draw,(sx,y_c,sx+148,y_c+42),21,col)
        ct(draw,txt,sx+74,y_c+21,F22,WHITE)
        sx+=160

    ct(draw,"Like  *  Share  *  Subscribe for AGRICET tips!",W//2,448,F26,LGRAY)

    # Social platforms
    platforms=[("YouTube","#dc2626"),("Instagram","#9333ea"),
               ("WhatsApp","#16a34a"),("Telegram","#0284c7")]
    sx=(W-4*180+20)//2
    for plat,col in platforms:
        rr(draw,(sx,504,sx+160,548),14,col)
        ct(draw,plat,sx+80,526,F22,WHITE)
        sx+=180

    ct(draw,"Nalanda Study Circle, Jagtial, Telangana",W//2,600,F22,GRAY)

    progress_dots(draw,10,TOTAL_SLIDES)
    draw.rectangle([(0,H-36),(W,H)],fill=rgb(GOLD))
    ct(draw,URL,W//2,H-18,F18,"#0a1020")
    return img

# ════════════════════════════════════════════════════════════════════════════
#  PLEASANT BACKGROUND MUSIC GENERATOR
#  — Piano timbre · Warm pads with vibrato · Bell tones · Reverb · True stereo
# ════════════════════════════════════════════════════════════════════════════
def generate_happy_music(duration=80, path="bg_music_v3.wav"):
    SR = 44100

    # ── Instrument: Piano (natural exponential decay) ───────────────────────
    def piano(freq, dur, vel=0.22):
        n = int(SR * dur)
        t = np.linspace(0, dur, n, endpoint=False)
        # Rich harmonic series — piano-like
        w = (1.00 * np.sin(2*np.pi*freq*1*t)
           + 0.45 * np.sin(2*np.pi*freq*2*t)
           + 0.20 * np.sin(2*np.pi*freq*3*t)
           + 0.08 * np.sin(2*np.pi*freq*4*t)
           + 0.03 * np.sin(2*np.pi*freq*5*t)
           + 0.015* np.sin(2*np.pi*freq*1.0015*t))  # slight chorus/width
        w /= (np.max(np.abs(w)) + 1e-9)
        atk = max(1, int(0.007 * SR))
        dcy = max(1, int(min(0.18 * SR, n // 3)))
        rel = max(1, int(min(0.35 * SR, n // 4)))
        sus_len = max(0, n - atk - dcy - rel)
        sus_lvl = 0.38
        env = np.concatenate([
            np.linspace(0, 1, atk),
            np.exp(np.linspace(0, np.log(sus_lvl + 1e-9), dcy)),
            np.full(sus_len, sus_lvl),
            np.linspace(sus_lvl, 0, rel)
        ])[:n]
        return w * env * vel

    # ── Instrument: Warm Synth Pad (slow attack, vibrato, chorus) ───────────
    def pad(freq, dur, vel=0.07):
        n = int(SR * dur)
        t = np.linspace(0, dur, n, endpoint=False)
        vib = 1 + 0.003 * np.sin(2*np.pi*4.5*t)           # gentle vibrato
        cho = 1.008                                          # chorus detuning
        w = (np.sin(2*np.pi*freq*vib*t)
           + 0.55 * np.sin(2*np.pi*freq*cho*vib*t)
           + 0.25 * np.sin(2*np.pi*freq*2*vib*t)
           + 0.10 * np.sin(2*np.pi*freq*3*t))
        w /= (np.max(np.abs(w)) + 1e-9)
        atk = max(1, int(min(0.9 * SR, n // 3)))
        rel = max(1, int(min(0.9 * SR, n // 3)))
        sus_len = max(0, n - atk - rel)
        env = np.concatenate([
            np.linspace(0, 1, atk),
            np.full(sus_len, 1.0),
            np.linspace(1, 0, rel)
        ])[:n]
        return w * env * vel

    # ── Instrument: Bell / Glockenspiel (inharmonic, sparkling) ────────────
    def bell(freq, dur, vel=0.09):
        n = int(SR * dur)
        t = np.linspace(0, dur, n, endpoint=False)
        w = (1.00 * np.sin(2*np.pi*freq*t)
           + 0.60 * np.sin(2*np.pi*freq*2.76*t)   # inharmonic partials
           + 0.25 * np.sin(2*np.pi*freq*5.40*t)
           + 0.10 * np.sin(2*np.pi*freq*8.93*t))
        w /= (np.max(np.abs(w)) + 1e-9)
        env = np.exp(-t * 5.5)                      # fast exponential decay
        return w * env * vel

    # ── Instrument: Soft Bass (warm, rounded) ───────────────────────────────
    def bass(freq, dur, vel=0.18):
        n = int(SR * dur)
        t = np.linspace(0, dur, n, endpoint=False)
        w = (np.sin(2*np.pi*freq*t)
           + 0.30 * np.sin(2*np.pi*freq*2*t)
           + 0.08 * np.sin(2*np.pi*freq*3*t))
        w /= (np.max(np.abs(w)) + 1e-9)
        atk = max(1, int(0.015 * SR))
        rel = max(1, int(min(0.4 * SR, n // 2)))
        sus_len = max(0, n - atk - rel)
        env = np.concatenate([
            np.linspace(0, 1, atk),
            np.full(sus_len, 0.75),
            np.linspace(0.75, 0, rel)
        ])[:n]
        return w * env * vel

    def place(trk, s, t_pos):
        i = int(t_pos * SR); e = i + len(s)
        if e > len(trk): s = s[:len(trk) - i]; e = i + len(s)
        if i < len(trk) and len(s) > 0: trk[i:e] += s

    track = np.zeros(int(SR * duration))

    # ── Note frequencies — D major (warm, bright, universally pleasant) ─────
    D3=146.83; A3=220.00; B3=246.94; G3=196.00
    D4=293.66; E4=329.63; F4s=369.99; G4=392.00; A4=440.00; B4=493.88
    D5=587.33; E5=659.25; F5s=739.99; G5=783.99; A5=880.00; B5=987.77
    D6=1174.66; E6=1318.51

    BPM  = 78          # relaxed, warm, professional pace
    beat = 60 / BPM
    half = beat / 2
    qtr  = beat / 4

    # ── Layer 1: Soft Bass (root on beat 1, fifth on beat 3) ────────────────
    bass_prog = [D3, A3, B3, G3]   # I – V – vi – IV in D major
    t_pos = 0.0; bi = 0
    while t_pos < duration - beat:
        place(track, bass(bass_prog[bi%4],        beat*1.6, vel=0.18), t_pos)
        place(track, bass(bass_prog[bi%4] * 1.5,  beat*0.9, vel=0.10), t_pos + beat*2)
        t_pos += beat * 4; bi += 1

    # ── Layer 2: Warm Pad Chords (whole notes, slow, lush) ──────────────────
    Cs5=554.37; E5b=659.25
    chord_sets = [
        [D4, F4s, A4, D5],
        [A3, Cs5, E5b, A5],
        [B3, D4,  F4s, B4],
        [G3, B3,  D4,  G4],
    ]
    t_pos = 0.0; ci = 0
    while t_pos < duration - beat:
        for freq in chord_sets[ci%4]:
            place(track, pad(freq, beat*4, vel=0.065), t_pos)
        t_pos += beat * 4; ci += 1

    # ── Layer 3: Piano Melody (singable, warm, memorable) ───────────────────
    melody = [
        (D5,  beat),   (F4s, beat),   (A4,  beat),   (D5,  beat*1.5),
        (E5,  half),   (D5,  beat),   (B4,  beat),   (A4,  beat*2),
        (G4,  beat),   (A4,  beat),   (B4,  beat),   (D5,  beat*1.5),
        (E5,  half),   (D5,  beat),   (A4,  beat),   (G4,  beat*2),
        (F4s, beat),   (G4,  beat),   (A4,  beat),   (B4,  beat*1.5),
        (D5,  half),   (E5,  beat),   (D5,  beat),   (B4,  beat*2),
        (A4,  beat),   (B4,  beat),   (D5,  beat),   (E5,  beat*1.5),
        (D5,  half),   (B4,  beat),   (A4,  beat),   (D4,  beat*3),
    ]
    t_pos = 0.6
    while t_pos < duration - 2:
        for freq, dur_ in melody:
            if t_pos >= duration - 2: break
            place(track, piano(freq, dur_ * 0.82, vel=0.21), t_pos)
            t_pos += dur_

    # ── Layer 4: Piano inner voice / harmony (3rds below melody) ────────────
    harmony = [
        (B4,  beat),   (D4,  beat),   (F4s, beat),   (B4,  beat*1.5),
        (Cs5, half),   (B4,  beat),   (G4,  beat),   (F4s, beat*2),
        (E4,  beat),   (F4s, beat),   (G4,  beat),   (B4,  beat*1.5),
        (Cs5, half),   (B4,  beat),   (F4s, beat),   (E4,  beat*2),
    ]
    t_pos = 0.6
    while t_pos < duration - 2:
        for freq, dur_ in harmony:
            if t_pos >= duration - 2: break
            place(track, piano(freq, dur_ * 0.75, vel=0.10), t_pos)
            t_pos += dur_

    # ── Layer 5: Bell counter-melody (high, sparkling, gentle) ──────────────
    bell_notes = [
        (D6, beat*2),(B5, beat),(A5, beat),(G5, beat*2),(E5, beat),(D5, beat*2),(A5, beat*2),(D6, beat*2)
    ]
    t_pos = beat * 3
    while t_pos < duration - 2:
        for freq, dur_ in bell_notes:
            if t_pos >= duration - 2: break
            place(track, bell(freq, dur_ * 1.3, vel=0.07), t_pos)
            t_pos += dur_

    # ── Layer 6: Piano arpeggio (gentle, fills the background) ──────────────
    arp_sets = [
        [D4, F4s, A4, D5, A4, F4s],
        [A3, Cs5, E5b, A5, E5b, Cs5],
        [B3, D4,  F4s, B4, F4s, D4],
        [G3, B3,  D4,  G4, D4,  B3],
    ]
    t_pos = beat * 0.5; ai = 0
    while t_pos < duration - qtr:
        pattern = arp_sets[ai % 4]
        for j, freq in enumerate(pattern):
            place(track, piano(freq, half * 0.7, vel=0.08), t_pos + j * qtr)
        t_pos += len(pattern) * qtr; ai += 1

    # ── Reverb: simple comb + allpass for warmth and depth ──────────────────
    def apply_reverb(sig, decay=0.28, delay_ms=85):
        delay_smp = int(delay_ms * SR / 1000)
        out = sig.copy()
        for i in range(delay_smp, len(out)):
            out[i] += decay * out[i - delay_smp]
        return out
    track = 0.65 * track + 0.35 * apply_reverb(track, decay=0.22, delay_ms=72)

    # ── True Stereo (Haas effect — 14ms L/R offset for width) ───────────────
    delay_smp = int(0.014 * SR)
    left  = track.copy()
    right = np.zeros_like(track)
    right[delay_smp:] = track[:-delay_smp]
    # slight high-freq rolloff on right for warmth
    from numpy import convolve
    hpf = np.array([0.15, 0.30, 0.30, 0.15, 0.10])
    right = np.convolve(right, hpf, mode='same')

    # ── Master: normalize, gentle limiter, fade in/out ──────────────────────
    peak = max(np.max(np.abs(left)), np.max(np.abs(right))) + 1e-9
    left  = np.clip(left  / peak * 0.70, -1, 1)
    right = np.clip(right / peak * 0.70, -1, 1)

    fi = int(2.5 * SR)
    left[:fi]  *= np.linspace(0, 1, fi)
    right[:fi] *= np.linspace(0, 1, fi)
    fo = int(4.5 * SR)
    left[-fo:]  *= np.linspace(1, 0, fo)
    right[-fo:] *= np.linspace(1, 0, fo)

    stereo = np.column_stack([(left*32767).astype(np.int16),
                               (right*32767).astype(np.int16)])
    wavfile.write(path, SR, stereo)
    print(f"  Music: {path}  ({duration}s, BPM={BPM})")
    return path

# ════════════════════════════════════════════════════════════════════════════
#  BUILD VIDEO — Frame-by-frame (reliable slide changes)
# ════════════════════════════════════════════════════════════════════════════
SLIDES_DUR=[
    (slide1,7),(slide2,7),(slide3,7),(slide4,8),(slide5_price,6),
    (slide6,9),(slide7,8),(slide8,8),(slide9,8),(slide10,7),(slide11,8),
]
TRANSITION_FRAMES = int(FPS * 0.5)   # 0.5s crossfade = 12 frames

print("Rendering slides...")
slide_imgs=[]
for i,(fn,dur) in enumerate(SLIDES_DUR):
    print(f"  Slide {i+1}/{len(SLIDES_DUR)}: {fn.__name__}")
    slide_imgs.append((np.array(fn().convert("RGB")), dur))

print("Building frame sequence with crossfade transitions...")
frames=[]
for i,(arr,dur) in enumerate(slide_imgs):
    # Add main slide frames (subtract half-transition at start and end)
    main_frames=int(dur*FPS)-TRANSITION_FRAMES
    frames.extend([arr]*max(1,main_frames))

    # Add crossfade transition to next slide
    if i < len(slide_imgs)-1:
        next_arr=slide_imgs[i+1][0]
        for f in range(TRANSITION_FRAMES):
            alpha=f/TRANSITION_FRAMES
            blended=((arr*(1-alpha)+next_arr*alpha)).astype(np.uint8)
            frames.append(blended)

print(f"  Total frames: {len(frames)} ({len(frames)/FPS:.1f}s)")

print("Generating happy background music...")
base=os.path.dirname(os.path.abspath(__file__))
music_path=os.path.join(base,"bg_music_v3.wav")
generate_happy_music(duration=len(frames)//FPS+4, path=music_path)

print("Creating video clip...")
video=ImageSequenceClip(frames, fps=FPS)

print("Attaching music...")
music=AudioFileClip(music_path).with_duration(video.duration)
final=video.with_audio(music)

out=os.path.join(base,"AGRICET_YouTube_Video.mp4")
desk=r"C:\Users\bioas\OneDrive\Desktop\AGRICET_YouTube_Video.mp4"
print("Rendering MP4 (please wait)...")
final.write_videofile(out, fps=FPS, codec="libx264", audio_codec="aac",
                      logger="bar", ffmpeg_params=["-crf","18","-preset","fast"])
import shutil; shutil.copy2(out,desk)
print(f"\nDone!  {out}\nCopied to Desktop.")
print(f"Duration: {final.duration:.1f}s  |  Frames: {len(frames)}")
