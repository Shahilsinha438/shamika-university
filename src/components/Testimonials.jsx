import React, { useState } from "react";

const Testimonials = () => {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const testimonials = [
    {
      name: "Aarav Sharma",

      role:
        "AI Engineer at Google",

      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop",

      review:
        "EduNova completely transformed my career journey. The enterprise-level curriculum, AI-focused ecosystem and real-world project exposure helped me secure opportunities at top global technology companies.",

      company: "Google",

      package: "₹42 LPA",
    },

    {
      name: "Sophia Williams",

      role:
        "Cybersecurity Consultant",

      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop",

      review:
        "The practical learning environment, advanced research labs and industry mentorship gave me hands-on experience far beyond traditional education systems.",

      company: "Deloitte",

      package: "₹28 LPA",
    },

    {
      name: "Rohan Verma",

      role:
        "Full Stack Developer",

      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1400&auto=format&fit=crop",

      review:
        "The university's innovation-driven environment pushed me toward building scalable enterprise applications and startup-level product thinking.",

      company: "Microsoft",

      package: "₹36 LPA",
    },

    {
      name: "Emily Johnson",

      role:
        "Data Scientist",

      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1400&auto=format&fit=crop",

      review:
        "From research opportunities to global collaborations, every part of the ecosystem was designed for future-ready professionals.",

      company: "Amazon",

      package: "₹33 LPA",
    },
  ];

  const nextSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        prev === 0
          ? testimonials.length - 1
          : prev - 1
    );
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

      {/* BACKGROUND EFFECTS */}

      <div
        style={{
          position: "absolute",

          top: "-150px",
          left: "-150px",

          width: "350px",
          height: "350px",

          borderRadius: "999px",

          background:
            "rgba(59,130,246,0.18)",

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

          background:
            "rgba(139,92,246,0.18)",

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
          SUCCESS STORIES
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

            WebkitTextFillColor:
              "transparent",
          }}
        >
          Voices Of
          <br />
          Future Leaders
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
          Hear from students and alumni
          shaping the future through
          innovation, leadership and
          enterprise-level excellence.
        </p>

      </div>

      {/* MAIN TESTIMONIAL */}

      <div
        style={{
          position: "relative",

          zIndex: 2,

          marginTop: "90px",

          maxWidth: "1400px",

          marginInline: "auto",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          borderRadius: "45px",

          backdropFilter: "blur(25px)",

          overflow: "hidden",
        }}
      >

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "1fr 1.2fr",

            alignItems: "center",
          }}
        >

          {/* IMAGE SIDE */}

          <div
            style={{
              position: "relative",

              height: "100%",
            }}
          >

            <img
              src={
                testimonials[activeIndex]
                  .image
              }

              alt={
                testimonials[activeIndex]
                  .name
              }

              style={{
                width: "100%",

                height: "100%",

                minHeight: "650px",

                objectFit: "cover",
              }}
            />

            {/* OVERLAY */}

            <div
              style={{
                position: "absolute",

                inset: 0,

                background:
                  "linear-gradient(to top,rgba(5,8,22,0.8),rgba(5,8,22,0.1))",
              }}
            ></div>

            {/* PACKAGE */}

            <div
              style={{
                position: "absolute",

                bottom: "35px",
                left: "35px",

                padding: "18px 24px",

                borderRadius: "22px",

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
                    "rgba(255,255,255,0.6)",

                  fontSize: "0.9rem",
                }}
              >
                Placement Package
              </p>

              <h2
                style={{
                  marginTop: "8px",

                  color: "white",

                  fontSize: "2rem",

                  fontWeight: "800",
                }}
              >
                {
                  testimonials[activeIndex]
                    .package
                }
              </h2>

            </div>

          </div>

          {/* CONTENT SIDE */}

          <div
            style={{
              padding: "70px",
            }}
          >

            {/* QUOTE */}

            <div
              style={{
                fontSize: "6rem",

                color:
                  "rgba(96,165,250,0.25)",

                lineHeight: "1",
              }}
            >
              “
            </div>

            <p
              style={{
                marginTop: "20px",

                color: "white",

                fontSize: "1.35rem",

                lineHeight: "2",

                fontWeight: "500",
              }}
            >
              {
                testimonials[activeIndex]
                  .review
              }
            </p>

            {/* PROFILE */}

            <div
              style={{
                marginTop: "50px",

                display: "flex",

                justifyContent:
                  "space-between",

                alignItems: "center",

                gap: "20px",

                flexWrap: "wrap",
              }}
            >

              <div>

                <h2
                  style={{
                    color: "white",

                    fontSize: "2rem",

                    fontWeight: "800",
                  }}
                >
                  {
                    testimonials[activeIndex]
                      .name
                  }
                </h2>

                <p
                  style={{
                    marginTop: "12px",

                    color:
                      "rgba(255,255,255,0.65)",

                    lineHeight: "1.8",
                  }}
                >
                  {
                    testimonials[activeIndex]
                      .role
                  }
                  <br />
                  {
                    testimonials[activeIndex]
                      .company
                  }
                </p>

              </div>

              {/* NAVIGATION */}

              <div
                style={{
                  display: "flex",

                  gap: "18px",
                }}
              >

                <button
                  onClick={prevSlide}

                  style={{
                    width: "60px",
                    height: "60px",

                    borderRadius: "999px",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    background:
                      "rgba(255,255,255,0.05)",

                    color: "white",

                    fontSize: "1.2rem",

                    cursor: "pointer",
                  }}
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}

                  style={{
                    width: "60px",
                    height: "60px",

                    borderRadius: "999px",

                    border: "none",

                    background:
                      "linear-gradient(135deg,#ffffff,#dbeafe)",

                    color: "#000",

                    fontSize: "1.2rem",

                    fontWeight: "700",

                    cursor: "pointer",
                  }}
                >
                  →
                </button>

              </div>

            </div>

            {/* INDICATORS */}

            <div
              style={{
                marginTop: "50px",

                display: "flex",

                gap: "12px",
              }}
            >

              {testimonials.map(
                (_, index) => (

                  <div
                    key={index}

                    onClick={() =>
                      setActiveIndex(index)
                    }

                    style={{
                      width:
                        activeIndex === index
                          ? "55px"
                          : "14px",

                      height: "14px",

                      borderRadius: "999px",

                      background:
                        activeIndex === index
                          ? "linear-gradient(135deg,#60a5fa,#8b5cf6)"
                          : "rgba(255,255,255,0.15)",

                      transition:
                        "0.35s ease",

                      cursor: "pointer",
                    }}
                  ></div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div
        style={{
          position: "relative",

          zIndex: 2,

          marginTop: "80px",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "25px",
        }}
      >

        {[
          {
            number: "95%",
            label:
              "Placement Success Rate",
          },

          {
            number: "500+",
            label:
              "Global Hiring Partners",
          },

          {
            number: "₹42L",
            label:
              "Highest International Package",
          },

          {
            number: "25K+",
            label:
              "Successful Alumni Network",
          },
        ].map((item, index) => (

          <div
            key={index}

            style={{
              padding: "40px",

              borderRadius: "30px",

              background:
                "rgba(255,255,255,0.05)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(25px)",

              textAlign: "center",
            }}
          >

            <h1
              style={{
                fontSize: "3rem",

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
            </h1>

            <p
              style={{
                marginTop: "15px",

                color:
                  "rgba(255,255,255,0.65)",

                lineHeight: "1.8",
              }}
            >
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonials;