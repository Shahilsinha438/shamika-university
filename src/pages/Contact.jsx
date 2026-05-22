import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Your inquiry has been submitted successfully."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });
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

      {/* BACKGROUND ORBS */}

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
          CONTACT US
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
          Let’s Build
          <br />
          Your Future
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
          Connect with our admissions team,
          academic counselors and enterprise
          learning advisors to begin your
          next-generation educational journey.
        </p>

      </div>

      {/* MAIN CONTENT */}

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

        {/* LEFT SIDE */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius: "35px",

            padding: "45px",

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
            Contact Information
          </h2>

          <p
            style={{
              marginTop: "20px",

              color:
                "rgba(255,255,255,0.65)",

              lineHeight: "1.9",
            }}
          >
            Reach out to our team for
            admissions, programs, campus
            visits, collaborations and
            enterprise learning solutions.
          </p>

          {/* INFO BOXES */}

          <div
            style={{
              marginTop: "40px",

              display: "grid",

              gap: "22px",
            }}
          >

            {[
              {
                title: "Campus Address",
                value:
                  "EduNova Institute, Jamshedpur, India",
                icon: "📍",
              },

              {
                title: "Email Address",
                value:
                  "contact@edunova.com",
                icon: "📧",
              },

              {
                title: "Phone Number",
                value:
                  "+91 9876543210",
                icon: "📞",
              },

              {
                title: "Office Hours",
                value:
                  "Mon - Sat | 9:00 AM - 6:00 PM",
                icon: "⏰",
              },
            ].map((item, index) => (

              <div
                key={index}

                style={{
                  display: "flex",

                  gap: "20px",

                  alignItems: "center",

                  padding: "25px",

                  borderRadius: "24px",

                  background:
                    "rgba(255,255,255,0.04)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >

                <div
                  style={{
                    width: "60px",
                    height: "60px",

                    borderRadius: "18px",

                    background:
                      "linear-gradient(135deg,rgba(96,165,250,0.2),rgba(139,92,246,0.2))",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    fontSize: "1.5rem",
                  }}
                >
                  {item.icon}
                </div>

                <div>

                  <p
                    style={{
                      color:
                        "rgba(255,255,255,0.5)",

                      fontSize: "0.95rem",
                    }}
                  >
                    {item.title}
                  </p>

                  <h3
                    style={{
                      marginTop: "8px",

                      color: "white",

                      fontSize: "1.1rem",

                      lineHeight: "1.6",
                    }}
                  >
                    {item.value}
                  </h3>

                </div>

              </div>

            ))}

          </div>

          {/* SOCIAL */}

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
              Connect With Us
            </h3>

            <div
              style={{
                marginTop: "25px",

                display: "flex",

                gap: "18px",

                flexWrap: "wrap",
              }}
            >

              {[
                "Instagram",
                "LinkedIn",
                "Twitter",
                "YouTube",
              ].map((social, index) => (

                <button
                  key={index}

                  style={{
                    padding: "16px 26px",

                    borderRadius: "999px",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    background:
                      "rgba(255,255,255,0.05)",

                    color: "white",

                    fontWeight: "600",

                    cursor: "pointer",
                  }}
                >
                  {social}
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

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

          <h2
            style={{
              color: "white",

              fontSize: "2.5rem",

              fontWeight: "900",
            }}
          >
            Send Inquiry
          </h2>

          <p
            style={{
              marginTop: "18px",

              color:
                "rgba(255,255,255,0.65)",

              lineHeight: "1.8",
            }}
          >
            Fill out the form and our
            admissions team will contact
            you shortly.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}

            style={{
              marginTop: "40px",

              display: "grid",

              gap: "24px",
            }}
          >

            <input
              type="text"

              name="name"

              placeholder="Full Name"

              value={formData.name}

              onChange={handleChange}

              required

              style={{
                padding: "20px",

                borderRadius: "20px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.04)",

                color: "white",

                outline: "none",

                fontSize: "1rem",
              }}
            />

            <input
              type="email"

              name="email"

              placeholder="Email Address"

              value={formData.email}

              onChange={handleChange}

              required

              style={{
                padding: "20px",

                borderRadius: "20px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.04)",

                color: "white",

                outline: "none",

                fontSize: "1rem",
              }}
            />

            <input
              type="text"

              name="phone"

              placeholder="Phone Number"

              value={formData.phone}

              onChange={handleChange}

              required

              style={{
                padding: "20px",

                borderRadius: "20px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.04)",

                color: "white",

                outline: "none",

                fontSize: "1rem",
              }}
            />

            <select
              name="program"

              value={formData.program}

              onChange={handleChange}

              required

              style={{
                padding: "20px",

                borderRadius: "20px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "#0b1120",

                color: "white",

                outline: "none",

                fontSize: "1rem",
              }}
            >

              <option value="">
                Select Program
              </option>

              <option>
                Artificial Intelligence
              </option>

              <option>
                Computer Science
              </option>

              <option>
                Business Administration
              </option>

              <option>
                Cybersecurity
              </option>

            </select>

            <textarea
              name="message"

              placeholder="Write your message..."

              value={formData.message}

              onChange={handleChange}

              rows="6"

              required

              style={{
                padding: "20px",

                borderRadius: "20px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.04)",

                color: "white",

                outline: "none",

                fontSize: "1rem",

                resize: "none",
              }}
            ></textarea>

            <button
              type="submit"

              style={{
                marginTop: "10px",

                padding: "20px",

                borderRadius: "999px",

                border: "none",

                background:
                  "linear-gradient(135deg,#ffffff,#dbeafe)",

                color: "#000",

                fontWeight: "800",

                fontSize: "1rem",

                cursor: "pointer",

                transition: "0.3s ease",
              }}
            >
              Submit Inquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;