import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "Artificial Intelligence",
      duration: "4 Years",
      level: "Undergraduate",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Computer Science Engineering",
      duration: "4 Years",
      level: "Undergraduate",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Cybersecurity & Ethical Hacking",
      duration: "3 Years",
      level: "Professional",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Data Science & Analytics",
      duration: "2 Years",
      level: "Postgraduate",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Business Administration",
      duration: "3 Years",
      level: "Undergraduate",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Robotics & Automation",
      duration: "4 Years",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#050816",
        padding: "140px 7%",
      }}
    >

      {/* BACKGROUND BLUR */}

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
          PREMIUM COURSES
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
          Future-Focused
          <br />
          Learning Programs
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
          Discover enterprise-level courses designed
          to prepare students for the modern technology,
          business and innovation-driven world.
        </p>

      </div>

      {/* COURSE GRID */}

      <div
        style={{
          position: "relative",
          zIndex: 2,

          marginTop: "90px",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",

          gap: "35px",
        }}
      >

        {courses.map((course, index) => (

          <div
            key={index}
            style={{
              position: "relative",

              overflow: "hidden",

              borderRadius: "35px",

              background:
                "rgba(255,255,255,0.05)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(25px)",

              transition:
                "all 0.45s cubic-bezier(0.16,1,0.3,1)",

              cursor: "pointer",
            }}
          >

            {/* IMAGE */}

            <div
              style={{
                position: "relative",

                height: "260px",

                overflow: "hidden",
              }}
            >

              <img
                src={course.image}
                alt={course.title}
                style={{
                  width: "100%",
                  height: "100%",

                  objectFit: "cover",

                  transition: "0.6s ease",
                }}
              />

              {/* OVERLAY */}

              <div
                style={{
                  position: "absolute",
                  inset: 0,

                  background:
                    "linear-gradient(to top,rgba(5,8,22,1),rgba(5,8,22,0.1))",
                }}
              ></div>

              {/* LEVEL */}

              <div
                style={{
                  position: "absolute",

                  top: "20px",
                  left: "20px",

                  padding: "10px 18px",

                  borderRadius: "999px",

                  background:
                    "rgba(255,255,255,0.08)",

                  border:
                    "1px solid rgba(255,255,255,0.1)",

                  backdropFilter: "blur(20px)",

                  color: "white",

                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {course.level}
              </div>

            </div>

            {/* CONTENT */}

            <div
              style={{
                padding: "35px",
              }}
            >

              <h2
                style={{
                  color: "white",

                  fontSize: "2rem",

                  fontWeight: "800",

                  lineHeight: "1.2",
                }}
              >
                {course.title}
              </h2>

              <p
                style={{
                  marginTop: "18px",

                  color:
                    "rgba(255,255,255,0.65)",

                  lineHeight: "1.9",
                }}
              >
                Learn from world-class faculty,
                industry professionals and
                enterprise-focused learning systems.
              </p>

              {/* INFO */}

              <div
                style={{
                  marginTop: "30px",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  flexWrap: "wrap",

                  gap: "15px",
                }}
              >

                <div
                  style={{
                    padding: "12px 20px",

                    borderRadius: "18px",

                    background:
                      "rgba(255,255,255,0.05)",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    color:
                      "rgba(255,255,255,0.8)",
                  }}
                >
                  ⏳ {course.duration}
                </div>

                <button
                  style={{
                    padding: "14px 28px",

                    borderRadius: "999px",

                    border: "none",

                    background:
                      "linear-gradient(135deg,#ffffff,#dbeafe)",

                    color: "#000",

                    fontWeight: "700",

                    cursor: "pointer",

                    transition: "0.3s ease",
                  }}
                >
                  View Course
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
};

export default Courses;