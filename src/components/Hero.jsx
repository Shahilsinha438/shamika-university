import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "linear-gradient(to bottom,#030712,#050816,#0b1120)",
        display: "flex",
        alignItems: "center",
        padding: "120px 7%",
      }}
    >

      {/* BACKGROUND GRADIENTS */}

      <div
        style={{
          position: "absolute",
          top: "-250px",
          left: "-250px",

          width: "500px",
          height: "500px",

          borderRadius: "999px",

          background:
            "rgba(59,130,246,0.22)",

          filter: "blur(140px)",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-250px",
          right: "-250px",

          width: "500px",
          height: "500px",

          borderRadius: "999px",

          background:
            "rgba(139,92,246,0.22)",

          filter: "blur(140px)",
        }}
      ></div>

      {/* GRID LINES */}

      <div
        style={{
          position: "absolute",
          inset: 0,

          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",

          backgroundSize: "80px 80px",

          maskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0.2))",
        }}
      ></div>

      {/* MAIN CONTENT */}

      <div
        style={{
          position: "relative",

          zIndex: 2,

          width: "100%",

          maxWidth: "1500px",

          margin: "auto",

          display: "grid",

          gridTemplateColumns:
            "1.1fr 0.9fr",

          gap: "70px",

          alignItems: "center",
        }}
      >

        {/* LEFT SIDE */}

        <div>

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "12px",

              padding: "14px 24px",

              borderRadius: "999px",

              background:
                "rgba(255,255,255,0.05)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(20px)",

              color: "#dbeafe",

              fontWeight: "600",

              fontSize: "0.95rem",
            }}
          >
            🚀 Admissions Open 2026
          </div>

          {/* HEADING */}

          <h1
            style={{
              marginTop: "40px",

              fontSize:
                "clamp(4rem,8vw,8rem)",

              lineHeight: "0.95",

              fontWeight: "900",

              letterSpacing: "-6px",

              background:
                "linear-gradient(to right,#ffffff,#dbeafe,#60a5fa,#8b5cf6)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent",
            }}
          >
            Build The
            <br />
            Future With
            <br />
            Shamika University
          </h1>

          {/* DESCRIPTION */}

          <p
            style={{
              marginTop: "35px",

              maxWidth: "720px",

              color:
                "rgba(255,255,255,0.7)",

              lineHeight: "2",

              fontSize: "1.15rem",
            }}
          >
            Experience enterprise-level education
            designed for innovators, engineers,
            entrepreneurs and future global leaders.

            Explore AI-powered learning, world-class
            research ecosystems, advanced technology
            infrastructure and industry-driven programs.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              marginTop: "50px",

              display: "flex",

              gap: "22px",

              flexWrap: "wrap",
            }}
          >

            <button
              style={{
                padding: "20px 38px",

                borderRadius: "999px",

                border: "none",

                background:
                  "linear-gradient(135deg,#ffffff,#dbeafe)",

                color: "#000",

                fontWeight: "800",

                fontSize: "1rem",

                cursor: "pointer",

                boxShadow:
                  "0 15px 40px rgba(255,255,255,0.12)",

                transition: "0.3s ease",
              }}
            >
              Apply Now
            </button>

            <button
              style={{
                padding: "20px 38px",

                borderRadius: "999px",

                background:
                  "rgba(255,255,255,0.05)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                color: "white",

                fontWeight: "700",

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

              maxWidth: "850px",
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
                label: "Placement Rate",
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
                    "1px solid rgba(255,255,255,0.08)",

                  backdropFilter: "blur(25px)",
                }}
              >

                <h2
                  style={{
                    fontSize: "2.8rem",

                    fontWeight: "900",

                    background:
                      "linear-gradient(to right,#ffffff,#60a5fa)",

                    WebkitBackgroundClip:
                      "text",

                    WebkitTextFillColor:
                      "transparent",
                  }}
                >
                  {item.number}
                </h2>

                <p
                  style={{
                    marginTop: "10px",

                    color:
                      "rgba(255,255,255,0.65)",
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

            display: "flex",

            justifyContent: "center",
          }}
        >

          {/* MAIN CARD */}

          <div
            style={{
              position: "relative",

              width: "100%",

              maxWidth: "520px",

              borderRadius: "40px",

              overflow: "hidden",

              background:
                "rgba(255,255,255,0.05)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(25px)",

              boxShadow:
                "0 25px 80px rgba(0,0,0,0.45)",
            }}
          >

            <img
              src="https://tse1.mm.bing.net/th/id/OIP.dggvYC9BYOJIL7O5O7_xKQHaE8?rs=1&pid=ImgDetMain&o=7&rm=320"

              alt="University"

              style={{
                width: "100%",

                height: "700px",

                objectFit: "cover",
              }}
            />

            {/* OVERLAY */}

            <div
              style={{
                position: "absolute",

                inset: 0,

                background:
                  "linear-gradient(to top,rgba(5,8,22,1),rgba(5,8,22,0.2))",
              }}
            ></div>

            {/* FLOATING CARD */}

            <div
              style={{
                position: "absolute",

                bottom: "35px",
                left: "35px",
                right: "35px",

                padding: "30px",

                borderRadius: "28px",

                background:
                  "rgba(255,255,255,0.08)",

                border:
                  "1px solid rgba(255,255,255,0.1)",

                backdropFilter: "blur(20px)",
              }}
            >

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.65)",

                  fontSize: "0.95rem",
                }}
              >
                #1 Innovation-Driven Institute
              </p>

              <h2
                style={{
                  marginTop: "12px",

                  color: "white",

                  fontSize: "2rem",

                  fontWeight: "800",

                  lineHeight: "1.3",
                }}
              >
                Next-Generation
                <br />
                Learning Ecosystem
              </h2>

              <div
                style={{
                  marginTop: "22px",

                  display: "flex",

                  gap: "14px",

                  flexWrap: "wrap",
                }}
              >

                {[
                  "AI Labs",
                  "Global Research",
                  "Enterprise Learning",
                ].map((item, index) => (

                  <div
                    key={index}

                    style={{
                      padding: "12px 18px",

                      borderRadius: "999px",

                      background:
                        "rgba(255,255,255,0.06)",

                      border:
                        "1px solid rgba(255,255,255,0.08)",

                      color: "white",

                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* FLOATING MINI CARD */}

          <div
            style={{
              position: "absolute",

              top: "40px",
              left: "-40px",

              padding: "24px",

              borderRadius: "28px",

              background:
                "rgba(255,255,255,0.08)",

              border:
                "1px solid rgba(255,255,255,0.1)",

              backdropFilter: "blur(25px)",

              boxShadow:
                "0 15px 45px rgba(0,0,0,0.35)",
            }}
          >

            <p
              style={{
                color:
                  "rgba(255,255,255,0.65)",

                fontSize: "0.9rem",
              }}
            >
              Global Placements
            </p>

            <h2
              style={{
                marginTop: "10px",

                fontSize: "2.4rem",

                fontWeight: "900",

                color: "white",
              }}
            >
              ₹42L+
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;