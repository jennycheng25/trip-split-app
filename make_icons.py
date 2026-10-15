from PIL import Image, ImageDraw, ImageFont
import os

BG = (16, 43, 61)      # #102b3d
FG = (255, 255, 255)

def make(size, path):
    img = Image.new('RGBA', (size, size), BG)
    draw = ImageDraw.Draw(img)
    # 画圆角矩形边框感：直接纯色底
    # 找字体
    font = None
    for p in [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf',
    ]:
        if os.path.exists(p):
            font = ImageFont.truetype(p, int(size * 0.62))
            break
    if font is None:
        font = ImageFont.load_default()
    text = '✦'
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    x = (size - w) / 2 - bbox[0]
    y = (size - h) / 2 - bbox[1]
    draw.text((x, y), text, font=font, fill=FG)
    img.save(path, 'PNG')
    print('saved', path)

make(192, '/data/workspace/与鹅同行PWA/icons/icon-192.png')
make(512, '/data/workspace/与鹅同行PWA/icons/icon-512.png')
