import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeBox({ username }) {
  const url = `http://localhost:3000/${username}`;

  return (
    <div style={{
      background: "#fff",
      padding: 20,
      borderRadius: 16,
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
    }}>
      <h3>📱 Scan My Page</h3>

      <QRCodeCanvas
        value={url}
        size={180}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
      />

      <p style={{ fontSize: 12, marginTop: 10 }}>
        {url}
      </p>
    </div>
  );
}