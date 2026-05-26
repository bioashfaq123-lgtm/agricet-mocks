import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from generate_video import slide1, slide6, slide10
slide1().save("prev_s1.jpg", quality=95)
slide6().save("prev_s6.jpg", quality=95)
slide10().save("prev_s10.jpg", quality=95)
print("Previews saved")
