import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Artificial Intelligence",
      description:
        "Advanced AI, Machine Learning, Deep Learning and intelligent systems.",
      icon: "🤖",
    },

    {
      title: "Computer Science",
      description:
        "Enterprise software engineering, cloud systems, full stack and cybersecurity.",
      icon: "💻",
    },

    {
      title: "Business & Management",
      description:
        "Global business leadership, finance, startups and innovation management.",
      icon: "📈",
    },

    {
      title: "Medical Sciences",
      description:
        "Modern healthcare, biotechnology, clinical research and advanced medicine.",
      icon: "🩺",
    },

    {
      title: "Law & Governance",
      description:
        "Corporate law, cyber law, constitutional studies and legal innovation.",
      icon: "⚖️",
    },

    {
      title: "Engineering & Robotics",
      description:
        "Mechanical systems, robotics, automation and smart manufacturing.",
      icon: "⚙️",
    },

    {
      title: "Design & Architecture",
      description:
        "UI/UX, digital design, architecture and creative innovation.",
      icon: "🎨",
    },

    {
      title: "Data Science",
      description:
        "Big data analytics, predictive intelligence and enterprise data systems.",
      icon: "📊",
    },

    {
      title: "Media & Communication",
      description:
        "Digital media, filmmaking, journalism and global communication.",
      icon: "🎥",
    },

    {
      title: "Aviation & Aerospace",
      description:
        "Aerospace systems, pilot training and aviation technologies.",
      icon: "✈️",
    },

    {
      title: "Agriculture & Sustainability",
      description:
        "Smart agriculture, environmental systems and sustainable technologies.",
      icon: "🌱",
    },

    {
      title: "Blockchain & Web3",
      description:
        "Cryptography, decentralized systems and next-generation internet technologies.",
      icon: "⛓️",
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

      {/* BACKGROUND ORBS */}

      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
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
          bottom: "-120px",
          right: "-120px",
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
          ACADEMIC PROGRAMS
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
          Explore Infinite
          <br />
          Career Possibilities
        </h1>

        <p
          style={{
            marginTop: "35px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: "2",
            fontSize: "1.1rem",
          }}
        >
          EduNova offers an enterprise-level ecosystem of
          future-focused programs spanning technology,
          medicine, business, law, engineering, design,
          aerospace, sustainability and beyond.
        </p>

      </div>

      {/* PROGRAM GRID */}

      <div
        style={{
          position: "relative",
          zIndex: 2,

          marginTop: "90px",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",

          gap: "30px",
        }}
      >

        {programs.map((program, index) => (

          <div
            key={index}
            style={{
              position: "relative",

              padding: "40px",

              borderRadius: "35px",

              background:
                "rgba(255,255,255,0.05)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(25px)",

              overflow: "hidden",

              transition:
                "all 0.45s cubic-bezier(0.16,1,0.3,1)",

              cursor: "pointer",
            }}
          >

            {/* HOVER GRADIENT */}

            <div
              style={{
                position: "absolute",
                inset: 0,

                background:
                  "linear-gradient(135deg,rgba(96,165,250,0.08),rgba(139,92,246,0.08))",

                opacity: 0,

                transition: "0.4s ease",
              }}
              className="cardGlow"
            ></div>

            {/* ICON */}

            <div
              style={{
                width: "85px",
                height: "85px",

                borderRadius: "28px",

                background:
                  "linear-gradient(135deg,rgba(96,165,250,0.18),rgba(139,92,246,0.18))",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: "2.4rem",

                marginBottom: "30px",

                position: "relative",
                zIndex: 2,
              }}
            >
              {program.icon}
            </div>

            {/* CONTENT */}

            <h2
              style={{
                position: "relative",
                zIndex: 2,

                color: "white",

                fontSize: "2rem",
                fontWeight: "800",
              }}
            >
              {program.title}
            </h2>

            <p
              style={{
                position: "relative",
                zIndex: 2,

                marginTop: "20px",

                color: "rgba(255,255,255,0.65)",

                lineHeight: "2",
              }}
            >
              {program.description}
            </p>

            {/* BUTTON */}

            <button
              style={{
                position: "relative",
                zIndex: 2,

                marginTop: "35px",

                padding: "14px 28px",

                borderRadius: "999px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                cursor: "pointer",

                transition: "0.3s ease",
              }}
            >
              Explore Program
            </button>

          </div>

        ))}

      </div>
    </section>
  );
};

export default Programs;