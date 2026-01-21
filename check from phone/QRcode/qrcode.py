import qrcode

url = input("enter the url:").strip()

file_path = "qrcode.png"

qr = qrcode.QRCode()
qr.add_data(url)

img = qr.make_image()
img.save(file_path)

print("QR Code was generated")