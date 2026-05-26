"""
Export promo-poster.pptx slide 1 to promo-poster.jpg using PowerPoint COM.
"""
import sys
import os
import win32com.client
import time

pptx_path = r"C:\Users\bioas\Agricet Mock Test Series\promo-poster.pptx"
jpg_path  = r"C:\Users\bioas\Agricet Mock Test Series\promo-poster.jpg"

ppt = win32com.client.Dispatch("PowerPoint.Application")
ppt.Visible = True  # required for export on some systems

try:
    presentation = ppt.Presentations.Open(pptx_path, ReadOnly=True, Untitled=False, WithWindow=False)
    time.sleep(2)  # let it fully load

    # Export slide 1 as JPEG (ppSaveAsJPG = 17)
    # ExportAsFixedFormat2 / Export method:
    slide = presentation.Slides(1)
    # Use slide.Export(path, filter, width, height)
    # Width/height for 1920x1080 (16:9 at 192 DPI)
    slide.Export(jpg_path, "JPG", 1920, 1080)
    print(f"Exported to: {jpg_path}")
    presentation.Close()
finally:
    ppt.Quit()
