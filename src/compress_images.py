#!/usr/bin/env python3
"""Compress every image in img/placements to WebP <= 50,000 bytes (max 1200 px wide).
Usage: python3 src/compress_images.py   (run with a Python that has Pillow)"""
import glob, io, os
from PIL import Image
LIMIT, MAXW = 50_000, 1200
def encode(im, q):
    b = io.BytesIO(); im.save(b, "WEBP", quality=q, method=6); return b.getvalue()
for src in sorted(glob.glob("img/placements/*")):
    if not src.lower().endswith((".jpg", ".jpeg", ".png", ".webp")): continue
    im = Image.open(src).convert("RGB")
    out = None
    for w in (MAXW, 1080, 960, 840, 720, 600):
        im2 = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        lo, hi, best = 30, 88, None
        while lo <= hi:
            q = (lo + hi) // 2; data = encode(im2, q)
            if len(data) <= LIMIT: best = (q, data, im2.size); lo = q + 1
            else: hi = q - 1
        if best: out = best; break
    q, data, size = out
    dst = os.path.splitext(src)[0] + ".webp"
    if src != dst: os.remove(src)
    open(dst, "wb").write(data)
    print(f"{len(data):6d} B  q{q:<3d} {size[0]}x{size[1]}  {dst}")
