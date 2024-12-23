import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [logo, setLogo] = useState(null); // For custom logo upload

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogo(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator with Logo</h1>

      {/* Input Field */}
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text or URL"
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />

      {/* Upload Logo */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontSize: "16px", fontWeight: "bold" }}>
          Upload Logo:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoUpload}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* QR Code with Logo */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {text && (
          <>
            <QRCode
              value={text}
              size={256}
              level={"H"}
              includeMargin={true}
            />
            {logo && (
              <div style={{ backgroundColor:'white' }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60px",
                    height: "60px",
                    borderRadius: "10%",
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
