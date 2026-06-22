"""
Apply a finished icon image to all PWA / app / favicon sizes.
Save the source as public/icon-source.png (or .jpg) and run this script.
"""
from PIL import Image
import os

ROOT   = r"C:\Users\bioas\Agricet Mock Test Series"
ICONS  = os.path.join(ROOT, "public", "icons")
PUBLIC = os.path.join(ROOT, "public")

# Find the source (png preferred, then jpg/jpeg/webp)
SRC = None
for name in ["icon-source.png", "icon-source.jpg", "icon-source.jpeg", "icon-source.webp"]:
    p = os.path.join(PUBLIC, name)
    if os.path.exists(p):
        SRC = p
        break
if not SRC:
    raise SystemExit("No source found. Save the image as public/icon-source.png and re-run.")

def square(im):
    im = im.convert("RGBA")
    w, h = im.size
    if w == h:
        return im
    s = min(w, h)
    return im.crop(((w-s)//2, (h-s)//2, (w-s)//2+s, (h-s)//2+s))

base = square(Image.open(SRC))
print("Source:", os.path.basename(SRC), base.size)

for sz in [72, 96, 128, 144, 152, 192, 384, 512]:
    base.resize((sz, sz), Image.LANCZOS).save(os.path.join(ICONS, f"icon-{sz}x{sz}.png"), "PNG")
    print(f"  icon-{sz}x{sz}.png")

# apple-touch-icon (flatten onto white so iOS shows no transparency artifacts)
ati = base.resize((180, 180), Image.LANCZOS)
bg = Image.new("RGB", (180, 180), (255, 255, 255)); bg.paste(ati, (0, 0), ati)
bg.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG"); print("  apple-touch-icon.png")

fav = base.resize((64, 64), Image.LANCZOS)
fb = Image.new("RGB", (64, 64), (255, 255, 255)); fb.paste(fav, (0, 0), fav)
fb.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(64, 64)]); print("  favicon.ico")

print("\nDone.")
