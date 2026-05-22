import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty" },
  ];

  const resources = [
    "Research Labs",
    "Innovation Hub",
    "Student Portal",
    "Placement Cell",
  ];

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#050816",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "90px 7% 35px",
      }}
    >
      {/* BLUR EFFECTS */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "999px",
          background: "rgba(59,130,246,0.18)",
          filter: "blur(120px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "999px",
          background: "rgba(139,92,246,0.18)",
          filter: "blur(120px)",
        }}
      />

      {/* MAIN GRID */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "60px",
        }}
      >
        {/* BRAND */}
        <div>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              letterSpacing: "-2px",
              background: "linear-gradient(to right,#ffffff,#dbeafe,#60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EduNova
          </h1>

          <p
            style={{
              marginTop: "25px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: "2",
            }}
          >
            Building future innovators through AI-driven education, enterprise-level
            learning systems, and world-class academic excellence.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 style={{ color: "white", marginBottom: "25px", fontSize: "1.2rem" }}>
            Navigation
          </h3>

          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                marginBottom: "18px",
                color: "rgba(255,255,255,0.6)",
                display: "block",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.color = "rgba(255,255,255,1)")
              }
              onMouseOut={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.6)")
              }
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RESOURCES */}
        <div>
          <h3 style={{ color: "white", marginBottom: "25px", fontSize: "1.2rem" }}>
            Resources
          </h3>

          {resources.map((item, index) => (
            <p
              key={index}
              style={{
                marginBottom: "18px",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
              }}
            >
              {item}
            </p>
          ))}
        </div>

        {/* CONTACT */}
        <div>
          <h3 style={{ color: "white", marginBottom: "25px", fontSize: "1.2rem" }}>
            Contact
          </h3>

          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "18px" }}>
            Jamshedpur, India
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "18px" }}>
            contact@edunova.com
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            +91 9876543210
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          margin: "70px auto 0",
          paddingTop: "30px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.5)" }}>
          © 2026 Shamika Institute. All Rights Reserved.
        </p>

        <div style={{ display: "flex", gap: "25px", color: "rgba(255,255,255,0.5)" }}>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span style={{ cursor: "pointer" }}>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;