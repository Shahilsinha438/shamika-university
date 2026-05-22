import React, { useState } from "react";

const Admissions = () => {

  const [selectedProgram, setSelectedProgram] =
    useState("Undergraduate");

  const programs = {
    Undergraduate: {
      title: "Undergraduate Admissions",
      description:
        "Industry-focused bachelor's programs designed for future innovators, engineers, entrepreneurs and technology leaders.",

      eligibility:
        "10+2 or equivalent with minimum qualifying marks.",

      duration: "3 - 4 Years",

      intake: "Fall 2026",

      features: [
        "AI-Powered Learning",
        "Global Curriculum",
        "Industry Collaboration",
        "Research Opportunities",
      ],
    },

    Postgraduate: {
      title: "Postgraduate Admissions",
      description:
        "Advanced master's programs focused on enterprise innovation, research and high-level professional specialization.",

      eligibility:
        "Bachelor's degree from recognized institution.",

      duration: "2 Years",

      intake: "Fall 2026",

      features: [
        "Advanced Research Labs",
        "Enterprise Projects",
        "International Exposure",
        "Industry Mentorship",
      ],
    },

    Doctorate: {
      title: "Doctoral Programs",
      description:
        "World-class research ecosystem for innovation, deep technology research and academic leadership.",

      eligibility:
        "Master's degree with research background.",

      duration: "3 - 5 Years",

      intake: "Rolling Admissions",

      features: [
        "Global Research Network",
        "Innovation Funding",
        "Research Publications",
        "International Conferences",
      ],
    },
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",

        background: "#050816",

        padding: "140px 7%",
      }}
    >

      {/* BACKGROUND */}

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

      {/* HEADER */}

      <div
        style={{
          position: "relative",
          zIndex: 2,

          maxWidth: "900px",

          margin: "auto",

          textAlign: "center",
        }}
      >

        <p
          style={{
            color: "#60a5fa",

            fontWeight: "700",

            letterSpacing: "3px",

            marginBottom: "25px",
          }}
        >
          ADMISSIONS 2026
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem,7vw,6rem)",

            lineHeight: "1",

            fontWeight: "900",

            letterSpacing: "-4px",

            background:
              "linear-gradient(to right,#ffffff,#dbeafe,#60a5fa,#8b5cf6)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",
          }}
        >
          Begin Your
          <br />
          Future Here
        </h1>

        <p
          style={{
            marginTop: "35px",

            color:
              "rgba(255,255,255,0.65)",

            lineHeight: "2",

            fontSize: "1.1rem",
          }}
        >
          Join a next-generation educational ecosystem
          built for innovators, leaders and future-ready
          professionals across technology, business,
          research and global industries.
        </p>

      </div>

      {/* MAIN SECTION */}

      <div
        style={{
          position: "relative",
          zIndex: 2,

          marginTop: "90px",

          display: "grid",

          gridTemplateColumns:
            "1fr 1.2fr",

          gap: "40px",

          alignItems: "start",
        }}
      >

        {/* LEFT PANEL */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius: "35px",

            padding: "40px",

            backdropFilter: "blur(25px)",
          }}
        >

          <h2
            style={{
              color: "white",

              fontSize: "2rem",

              fontWeight: "800",
            }}
          >
            Select Program
          </h2>

          <div
            style={{
              marginTop: "35px",

              display: "grid",

              gap: "20px",
            }}
          >

            {Object.keys(programs).map(
              (program, index) => (

                <button
                  key={index}

                  onClick={() =>
                    setSelectedProgram(program)
                  }

                  style={{
                    padding: "22px",

                    borderRadius: "22px",

                    border:
                      selectedProgram === program
                        ? "1px solid #60a5fa"
                        : "1px solid rgba(255,255,255,0.08)",

                    background:
                      selectedProgram === program
                        ? "rgba(96,165,250,0.15)"
                        : "rgba(255,255,255,0.04)",

                    color: "white",

                    fontSize: "1rem",

                    fontWeight: "700",

                    cursor: "pointer",

                    transition: "0.3s ease",
                  }}
                >
                  {program}
                </button>

              )
            )}

          </div>

          {/* PROCESS */}

          <div
            style={{
              marginTop: "50px",
            }}
          >

            <h3
              style={{
                color: "white",

                fontSize: "1.5rem",

                fontWeight: "700",
              }}
            >
              Admission Process
            </h3>

            <div
              style={{
                marginTop: "30px",

                display: "grid",

                gap: "25px",
              }}
            >

              {[
                "Submit Application",
                "Entrance Evaluation",
                "Interview & Assessment",
                "Final Admission Offer",
              ].map((step, index) => (

                <div
                  key={index}

                  style={{
                    display: "flex",

                    gap: "18px",

                    alignItems: "center",
                  }}
                >

                  <div
                    style={{
                      width: "42px",
                      height: "42px",

                      borderRadius: "999px",

                      background:
                        "linear-gradient(135deg,#60a5fa,#8b5cf6)",

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",

                      color: "white",

                      fontWeight: "700",
                    }}
                  >
                    {index + 1}
                  </div>

                  <p
                    style={{
                      color:
                        "rgba(255,255,255,0.75)",
                    }}
                  >
                    {step}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius: "35px",

            padding: "50px",

            backdropFilter: "blur(25px)",
          }}
        >

          <p
            style={{
              color: "#60a5fa",

              fontWeight: "700",

              letterSpacing: "2px",
            }}
          >
            PROGRAM DETAILS
          </p>

          <h1
            style={{
              marginTop: "20px",

              color: "white",

              fontSize: "3rem",

              fontWeight: "900",
            }}
          >
            {
              programs[selectedProgram].title
            }
          </h1>

          <p
            style={{
              marginTop: "30px",

              color:
                "rgba(255,255,255,0.7)",

              lineHeight: "2",

              fontSize: "1.05rem",
            }}
          >
            {
              programs[selectedProgram]
                .description
            }
          </p>

          {/* INFO GRID */}

          <div
            style={{
              marginTop: "45px",

              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",

              gap: "20px",
            }}
          >

            <div
              style={{
                padding: "28px",

                borderRadius: "24px",

                background:
                  "rgba(255,255,255,0.04)",

                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.5)",
                }}
              >
                Eligibility
              </p>

              <h3
                style={{
                  marginTop: "15px",

                  color: "white",

                  lineHeight: "1.7",
                }}
              >
                {
                  programs[selectedProgram]
                    .eligibility
                }
              </h3>

            </div>

            <div
              style={{
                padding: "28px",

                borderRadius: "24px",

                background:
                  "rgba(255,255,255,0.04)",

                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.5)",
                }}
              >
                Duration
              </p>

              <h3
                style={{
                  marginTop: "15px",

                  color: "white",
                }}
              >
                {
                  programs[selectedProgram]
                    .duration
                }
              </h3>

            </div>

            <div
              style={{
                padding: "28px",

                borderRadius: "24px",

                background:
                  "rgba(255,255,255,0.04)",

                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.5)",
                }}
              >
                Intake
              </p>

              <h3
                style={{
                  marginTop: "15px",

                  color: "white",
                }}
              >
                {
                  programs[selectedProgram]
                    .intake
                }
              </h3>

            </div>

          </div>

          {/* FEATURES */}

          <div
            style={{
              marginTop: "50px",
            }}
          >

            <h2
              style={{
                color: "white",

                fontSize: "2rem",

                fontWeight: "800",
              }}
            >
              Program Highlights
            </h2>

            <div
              style={{
                marginTop: "30px",

                display: "grid",

                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",

                gap: "20px",
              }}
            >

              {programs[
                selectedProgram
              ].features.map(
                (feature, index) => (

                  <div
                    key={index}

                    style={{
                      padding: "26px",

                      borderRadius: "22px",

                      background:
                        "rgba(255,255,255,0.04)",

                      border:
                        "1px solid rgba(255,255,255,0.08)",

                      color: "white",

                      fontWeight: "600",
                    }}
                  >
                    ✨ {feature}
                  </div>

                )
              )}

            </div>

          </div>

          {/* BUTTONS */}

          <div
            style={{
              marginTop: "55px",

              display: "flex",

              gap: "20px",

              flexWrap: "wrap",
            }}
          >

            <button
              style={{
                padding: "18px 36px",

                borderRadius: "999px",

                border: "none",

                background:
                  "linear-gradient(135deg,#ffffff,#dbeafe)",

                color: "#000",

                fontWeight: "800",

                cursor: "pointer",

                fontSize: "1rem",
              }}
            >
              Apply Now
            </button>

            <button
              style={{
                padding: "18px 36px",

                borderRadius: "999px",

                background:
                  "rgba(255,255,255,0.05)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                color: "white",

                fontWeight: "700",

                cursor: "pointer",

                fontSize: "1rem",
              }}
            >
              Download Brochure
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Admissions;