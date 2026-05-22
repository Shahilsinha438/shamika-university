import React from "react";

const About = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "140px 7%",
        background: "#050816",
      }}
    >

      {/* BLUR BACKGROUNDS */}

      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "350px",
          height: "350px",
          borderRadius: "999px",
          background: "rgba(59,130,246,0.18)",
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
          background: "rgba(139,92,246,0.18)",
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

          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",

          gap: "80px",
          alignItems: "center",
        }}
      >

        {/* LEFT SIDE */}

        <div>

          <p
            style={{
              color: "#60a5fa",
              fontWeight: "700",
              letterSpacing: "3px",
              marginBottom: "25px",
            }}
          >
            ABOUT THE INSTITUTE
          </p>

          <h1
            style={{
              fontSize: "clamp(3rem,7vw,6rem)",
              lineHeight: "1",
              fontWeight: "900",
              letterSpacing: "-4px",

              background:
                "linear-gradient(to right,#ffffff,#dbeafe,#60a5fa)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Redefining
            <br />
            Modern Education
          </h1>

          <p
            style={{
              marginTop: "35px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: "2",
              fontSize: "1.1rem",
              maxWidth: "650px",
            }}
          >
            EduNova is a next-generation educational ecosystem
            designed for innovation, AI-driven learning,
            global exposure, and industry-focused education.

            We empower students with future-ready skills,
            enterprise-level knowledge, and real-world
            technology leadership.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              marginTop: "45px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >

            <button
              style={{
                padding: "18px 34px",
                borderRadius: "999px",
                border: "none",

                background:
                  "linear-gradient(135deg,#ffffff,#dbeafe)",

                color: "#000",
                fontWeight: "700",
                cursor: "pointer",

                transition: "0.4s ease",

                boxShadow:
                  "0 10px 35px rgba(255,255,255,0.1)",
              }}
            >
              Explore Campus
            </button>

            <button
              style={{
                padding: "18px 34px",
                borderRadius: "999px",

                background:
                  "rgba(255,255,255,0.05)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                color: "white",

                backdropFilter: "blur(20px)",

                cursor: "pointer",
              }}
            >
              Learn More
            </button>

          </div>

          {/* STATS */}

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >

            {[
              {
                number: "25K+",
                label: "Students",
              },

              {
                number: "350+",
                label: "Faculty",
              },

              {
                number: "95%",
                label: "Placement",
              },
            ].map((item, index) => (

              <div
                key={index}
                style={{
                  minWidth: "170px",

                  padding: "30px",

                  borderRadius: "28px",

                  background:
                    "rgba(255,255,255,0.05)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  backdropFilter: "blur(20px)",
                }}
              >

                <h2
                  style={{
                    fontSize: "2.4rem",
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
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            position: "relative",
          }}
        >

          {/* MAIN CARD */}

          <div
            style={{
              position: "relative",

              padding: "45px",

              borderRadius: "40px",

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

            {/* TOP */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

              <div>

                <p
                  style={{
                    color: "#60a5fa",
                    fontWeight: "700",
                  }}
                >
                  Innovation Ecosystem
                </p>

                <h2
                  style={{
                    marginTop: "12px",
                    color: "white",
                    fontSize: "2.5rem",
                    fontWeight: "800",
                  }}
                >
                  Future Ready
                </h2>

              </div>

              <div
                style={{
                  width: "80px",
                  height: "80px",

                  borderRadius: "24px",

                  background:
                    "linear-gradient(135deg,rgba(96,165,250,0.25),rgba(139,92,246,0.25))",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  color: "white",
                  fontSize: "2rem",
                }}
              >
                🚀
              </div>

            </div>

            {/* FEATURES */}

            <div
              style={{
                marginTop: "45px",

                display: "grid",
                gap: "25px",
              }}
            >

              {[
                "AI-Powered Smart Learning",
                "Global Research Collaborations",
                "Enterprise-Level Curriculum",
                "Industry Integrated Programs",
              ].map((item, index) => (

                <div
                  key={index}
                  style={{
                    padding: "24px",

                    borderRadius: "24px",

                    background:
                      "rgba(255,255,255,0.04)",

                    border:
                      "1px solid rgba(255,255,255,0.06)",

                    color: "rgba(255,255,255,0.75)",

                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >

                  <div
                    style={{
                      width: "12px",
                      height: "12px",

                      borderRadius: "999px",

                      background:
                        "linear-gradient(to right,#60a5fa,#8b5cf6)",
                    }}
                  ></div>

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;