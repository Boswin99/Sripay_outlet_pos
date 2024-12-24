import React, { useState } from "react";
import QRCode from "react-qr-code";
import logo from '../../assets/logo.png'

const QRCodeGenerator = () => {
  const [text, setText] = useState("wefwf");
  // const [logo, setLogo] = useState(null); // For custom logo upload




  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* QR Code with Logo */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {text && (
          <>
            <QRCode
              value={text}
              size={320}
              level={"H"}
              includeMargin={true}
            />
            {logo && (
              <div style={{ backgroundColor: 'white' }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "70px",
                    height: "70px",
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
