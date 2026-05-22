
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Globe,
  GraduationCap,
  MapPin,
  LogIn,
  UserPlus,
  ShieldCheck,
  KeyRound,
  LogOut,
} from "lucide-react";

const Register = () => {

  const [mode, setMode] = useState("register");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loggedIn, setLoggedIn] =
    useState(false);

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Singapore",
    "UAE",
  ];

  const courses = [
    "Computer Science Engineering",
    "Artificial Intelligence",
    "Cybersecurity",
    "Data Science",
    "Machine Learning",
    "Cloud Computing",
    "Business Administration",
    "MBA",
    "Law",
    "Medical Sciences",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics Engineering",
    "Animation & Design",
  ];

  const [registerData, setRegisterData] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      course: "",
      password: "",
      confirmPassword: "",
    });

  const [loginData, setLoginData] =
    useState({
      email: "",
      password: "",
    });

  const [passwordData, setPasswordData] =
    useState({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    if (
      registerData.password !==
      registerData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful");

    console.log(registerData);

    setMode("login");
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    alert("Login Successful");

    console.log(loginData);

    setLoggedIn(true);
  };

  const logoutUser = () => {
    alert("Logged Out Successfully");
    setLoggedIn(false);
  };

  const passwordSubmit = (e) => {
    e.preventDefault();

    if (
      passwordData.newPassword !==
      passwordData.confirmNewPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    alert("Password Updated Successfully");

    console.log(passwordData);
  };

  return (
    <section
      style={{
        minHeight: "100vh",

        background:
          "radial-gradient(circle at top left,#0f172a,#020617 55%,#000000 100%)",

        padding: "140px 6%",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        position: "relative",

        overflow: "hidden",
      }}
    >

      {/* BLUR EFFECTS */}

      <div
        style={{
          position: "absolute",

          top: "-250px",
          left: "-250px",

          width: "500px",
          height: "500px",

          borderRadius: "50%",

          background:
            "rgba(59,130,246,0.25)",

          filter: "blur(140px)",
        }}
      />

      <div
        style={{
          position: "absolute",

          bottom: "-250px",
          right: "-250px",

          width: "500px",
          height: "500px",

          borderRadius: "50%",

          background:
            "rgba(168,85,247,0.25)",

          filter: "blur(140px)",
        }}
      />

      {/* CARD */}

      <div
        style={{
          width: "100%",

          maxWidth: "1450px",

          display: "grid",

          gridTemplateColumns:
            "1fr 1.1fr",

          overflow: "hidden",

          borderRadius: "40px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter: "blur(30px)",

          boxShadow:
            "0 25px 90px rgba(0,0,0,0.45)",

          position: "relative",

          zIndex: 2,
        }}
      >

        {/* LEFT PANEL */}

        <div
          style={{
            padding: "70px",

            background:
              "linear-gradient(to bottom right,rgba(59,130,246,0.15),rgba(139,92,246,0.12))",

            borderRight:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >

          <p
            style={{
              color: "#60a5fa",

              fontWeight: "700",

              letterSpacing: "3px",
            }}
          >
            SHAMIKA UNIVERSITY
          </p>

          <h1
            style={{
              marginTop: "25px",

              color: "white",

              fontSize: "5rem",

              lineHeight: "0.95",

              fontWeight: "900",

              letterSpacing: "-4px",
            }}
          >
            Smart
            <br />
            Student
            <br />
            Portal.
          </h1>

          <p
            style={{
              marginTop: "35px",

              color:
                "rgba(255,255,255,0.68)",

              lineHeight: "2",

              fontSize: "1.05rem",
            }}
          >
            Enterprise-grade student onboarding,
            admissions, authentication and
            account management system designed
            with premium Apple-inspired UI.
          </p>

          <div
            style={{
              marginTop: "60px",

              display: "grid",

              gap: "24px",
            }}
          >

            {[
              "AI-Powered Admissions",
              "Global Placement Assistance",
              "Cloud Based Student Dashboard",
              "Enterprise Security Authentication",
              "Scholarship Management System",
            ].map((item, index) => (

              <div
                key={index}

                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "16px",
                }}
              >

                <div
                  style={{
                    width: "14px",
                    height: "14px",

                    borderRadius: "50%",

                    background:
                      "linear-gradient(to right,#60a5fa,#8b5cf6)",
                  }}
                />

                <p
                  style={{
                    color: "white",
                  }}
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div
          style={{
            padding: "70px",
          }}
        >

          {/* TOP BUTTONS */}

          <div
            style={{
              display: "flex",

              gap: "18px",

              flexWrap: "wrap",
            }}
          >

            <button
              onClick={() => setMode("register")}
              style={{
                ...topButton,

                background:
                  mode === "register"
                    ? "linear-gradient(to right,#60a5fa,#8b5cf6)"
                    : "rgba(255,255,255,0.05)",
              }}
            >
              <UserPlus size={18} />
              Register
            </button>

            <button
              onClick={() => setMode("login")}
              style={{
                ...topButton,

                background:
                  mode === "login"
                    ? "linear-gradient(to right,#60a5fa,#8b5cf6)"
                    : "rgba(255,255,255,0.05)",
              }}
            >
              <LogIn size={18} />
              Login
            </button>

            <button
              onClick={() => setMode("password")}
              style={{
                ...topButton,

                background:
                  mode === "password"
                    ? "linear-gradient(to right,#60a5fa,#8b5cf6)"
                    : "rgba(255,255,255,0.05)",
              }}
            >
              <KeyRound size={18} />
              Change Password
            </button>

            <button
              onClick={logoutUser}
              style={topButton}
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>

          {/* REGISTER */}

          {mode === "register" && (

            <>

              <h2
                style={titleStyle}
              >
                Student Registration
              </h2>

              <p style={descStyle}>
                Create your university account
                to access admissions, programs,
                placements and digital campus
                services.
              </p>

              <form
                onSubmit={registerSubmit}
                style={formGrid}
              >

                <InputBox>
                  <User size={18} color="#94a3b8" />

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={registerData.fullName}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <InputBox>
                  <Mail size={18} color="#94a3b8" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <InputBox>
                  <Phone size={18} color="#94a3b8" />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={registerData.phone}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <InputBox>
                  <Globe size={18} color="#94a3b8" />

                  <input
                    list="countries"
                    name="country"
                    placeholder="Country"
                    value={registerData.country}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />

                  <datalist id="countries">
                    {countries.map((country, index) => (
                      <option
                        key={index}
                        value={country}
                      />
                    ))}
                  </datalist>
                </InputBox>

                <InputBox>
                  <MapPin size={18} color="#94a3b8" />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={registerData.city}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <InputBox>
                  <GraduationCap
                    size={18}
                    color="#94a3b8"
                  />

                  <input
                    list="courses"
                    name="course"
                    placeholder="Select Course"
                    value={registerData.course}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />

                  <datalist id="courses">
                    {courses.map((course, index) => (
                      <option
                        key={index}
                        value={course}
                      />
                    ))}
                  </datalist>
                </InputBox>

                <InputBox>
                  <Lock size={18} color="#94a3b8" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />

                  <div
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? (
                      <EyeOff
                        size={18}
                        color="#94a3b8"
                      />
                    ) : (
                      <Eye
                        size={18}
                        color="#94a3b8"
                      />
                    )}
                  </div>
                </InputBox>

                <InputBox>
                  <ShieldCheck
                    size={18}
                    color="#94a3b8"
                  />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <button
                  type="submit"
                  style={submitButton}
                >
                  Create Student Account
                </button>

              </form>

            </>

          )}

          {/* LOGIN */}

          {mode === "login" && (

            <>

              <h2 style={titleStyle}>
                Student Login
              </h2>

              <p style={descStyle}>
                Securely access your student
                dashboard, courses, placements
                and university services.
              </p>

              <form
                onSubmit={loginSubmit}
                style={{
                  marginTop: "40px",
                  display: "grid",
                  gap: "22px",
                }}
              >

                <InputBox>
                  <Mail size={18} color="#94a3b8" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <InputBox>
                  <Lock size={18} color="#94a3b8" />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <button
                  type="submit"
                  style={submitButton}
                >
                  Login Securely
                </button>

                {loggedIn && (
                  <div
                    style={{
                      color: "#4ade80",
                      marginTop: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Logged In Successfully
                  </div>
                )}

              </form>

            </>

          )}

          {/* PASSWORD */}

          {mode === "password" && (

            <>

              <h2 style={titleStyle}>
                Change Password
              </h2>

              <p style={descStyle}>
                Update your password to keep
                your account secure.
              </p>

              <form
                onSubmit={passwordSubmit}
                style={{
                  marginTop: "40px",
                  display: "grid",
                  gap: "22px",
                }}
              >

                <InputBox>
                  <Lock size={18} color="#94a3b8" />

                  <input
                    type="password"
                    name="oldPassword"
                    placeholder="Current Password"
                    value={passwordData.oldPassword}
                    onChange={handlePasswordChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <InputBox>
                  <Lock size={18} color="#94a3b8" />

                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <InputBox>
                  <ShieldCheck
                    size={18}
                    color="#94a3b8"
                  />

                  <input
                    type="password"
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                    value={passwordData.confirmNewPassword}
                    onChange={handlePasswordChange}
                    required
                    style={inputStyle}
                  />
                </InputBox>

                <button
                  type="submit"
                  style={submitButton}
                >
                  Update Password
                </button>

              </form>

            </>

          )}

        </div>

      </div>

    </section>
  );
};

const InputBox = ({ children }) => (
  <div
    style={{
      display: "flex",

      alignItems: "center",

      gap: "14px",

      padding: "18px 20px",

      borderRadius: "18px",

      background:
        "rgba(255,255,255,0.04)",

      border:
        "1px solid rgba(255,255,255,0.08)",

      backdropFilter: "blur(20px)",
    }}
  >
    {children}
  </div>
);

const inputStyle = {
  width: "100%",

  background: "transparent",

  border: "none",

  outline: "none",

  color: "white",

  fontSize: "0.96rem",
};

const titleStyle = {
  marginTop: "45px",

  color: "white",

  fontSize: "3rem",

  fontWeight: "900",

  letterSpacing: "-2px",
};

const descStyle = {
  marginTop: "15px",

  color: "rgba(255,255,255,0.65)",

  lineHeight: "1.8",
};

const formGrid = {
  marginTop: "40px",

  display: "grid",

  gridTemplateColumns:
    "repeat(2,1fr)",

  gap: "22px",
};

const submitButton = {
  gridColumn: "span 2",

  marginTop: "10px",

  padding: "20px",

  border: "none",

  borderRadius: "999px",

  background:
    "linear-gradient(to right,#60a5fa,#8b5cf6)",

  color: "white",

  fontWeight: "800",

  fontSize: "1rem",

  cursor: "pointer",

  transition: "0.35s ease",
};

const topButton = {
  display: "flex",

  alignItems: "center",

  gap: "10px",

  padding: "14px 24px",

  borderRadius: "999px",

  border: "1px solid rgba(255,255,255,0.08)",

  background:
    "rgba(255,255,255,0.05)",

  color: "white",

  cursor: "pointer",

  fontWeight: "600",
};

export default Register;