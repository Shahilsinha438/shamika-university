import React from "react";

const CTA = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#050816",
        padding: "140px 7%",
      }}
    >

      {/* BLUR BACKGROUND */}

      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "350px",
          height: "350px",
          borderRadius: "999px",
          background: "rgba(59,130,246,0.2)",
          filter: "blur(120px)",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "350px",
          height: "350px",
          borderRadius: "999px",
          background: "rgba(139,92,246,0.2)",
          filter: "blur(120px)",
        }}
      ></div>

      {/* MAIN CONTAINER */}

      <div
        style={{
          position: "relative",
          zIndex: 2,

          maxWidth: "1400px",
          margin: "auto",

          padding: "90px 70px",

          borderRadius: "45px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter: "blur(30px)",

          overflow: "hidden",

          boxShadow:
            "0 25px 80px rgba(0,0,0,0.35)",
        }}
      >

        {/* TOP GRADIENT */}

        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(135deg,rgba(96,165,250,0.08),rgba(139,92,246,0.08))",

            pointerEvents: "none",
          }}
        ></div>

        {/* CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: 2,

            textAlign: "center",

            maxWidth: "950px",

            margin: "auto",
          }}
        >

          {/* TAG */}

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",

              padding: "14px 26px",

              borderRadius: "999px",

              background:
                "rgba(255,255,255,0.05)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              color: "#dbeafe",

              fontWeight: "600",

              backdropFilter: "blur(20px)",
            }}
          >
            🚀 Future-Ready Learning Ecosystem
          </div>

          {/* TITLE */}

          <h1
            style={{
              marginTop: "35px",

              fontSize: "clamp(3rem,7vw,6.5rem)",

              lineHeight: "1",

              fontWeight: "900",

              letterSpacing: "-4px",

              background:
                "linear-gradient(to right,#ffffff,#dbeafe,#60a5fa,#8b5cf6)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shape The Future
            <br />
            With EduNova
          </h1>

          {/* DESCRIPTION */}

          <p
            style={{
              marginTop: "35px",

              color:
                "rgba(255,255,255,0.65)",

              lineHeight: "2",

              fontSize: "1.1rem",

              maxWidth: "760px",

              marginInline: "auto",
            }}
          >
            Join a world-class institution built for the next
            generation of innovators, entrepreneurs,
            engineers, researchers, creators and global leaders.

            Experience AI-driven education, enterprise-level
            learning, international exposure and industry-focused
            excellence.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              marginTop: "55px",

              display: "flex",
              justifyContent: "center",

              gap: "25px",

              flexWrap: "wrap",
            }}
          >

            {/* PRIMARY */}

            <button
              style={{
                padding: "18px 38px",

                borderRadius: "999px",

                border: "none",

                background:
                  "linear-gradient(135deg,#ffffff,#dbeafe)",

                color: "#000",

                fontWeight: "700",

                fontSize: "1rem",

                cursor: "pointer",

                transition: "0.4s ease",

                boxShadow:
                  "0 10px 35px rgba(255,255,255,0.12)",
              }}
            >
              Apply Now
            </button>

            {/* SECONDARY */}

            <button
              style={{
                padding: "18px 38px",

                borderRadius: "999px",

                background:
                  "rgba(255,255,255,0.05)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                color: "white",

                fontWeight: "600",

                fontSize: "1rem",

                backdropFilter: "blur(20px)",

                cursor: "pointer",
              }}
            >
              Explore Programs
            </button>

          </div>

          {/* STATS */}

          <div
            style={{
              marginTop: "70px",

              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",

              gap: "25px",
            }}
          >

            {[
              {
                number: "25K+",
                label: "Students",
              },

              {
                number: "350+",
                label: "Expert Faculty",
              },

              {
                number: "95%",
                label: "Placements",
              },

              {
                number: "120+",
                label: "Global Partners",
              },
            ].map((item, index) => (

              <div
                key={index}
                style={{
                  padding: "30px",

                  borderRadius: "28px",

                  background:
                    "rgba(255,255,255,0.04)",

                  border:
                    "1px solid rgba(255,255,255,0.06)",

                  backdropFilter: "blur(20px)",
                }}
              >

                <h2
                  style={{
                    fontSize: "2.6rem",

                    fontWeight: "900",

                    background:
                      "linear-gradient(to right,#ffffff,#60a5fa)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.number}
                </h2>

                <p
                  style={{
                    marginTop: "12px",

                    color:
                      "rgba(255,255,255,0.6)",
                  }}
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;