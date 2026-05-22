import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "92%",
          maxWidth: "1400px",
          zIndex: "999",
          padding: scroll ? "16px 35px" : "22px 40px",
          borderRadius: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          background: scroll
            ? "rgba(10,10,10,0.75)"
            : "rgba(255,255,255,0.04)",

          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",

          border: "1px solid rgba(255,255,255,0.08)",

          boxShadow: scroll
            ? "0 10px 40px rgba(0,0,0,0.35)"
            : "0 8px 30px rgba(0,0,0,0.15)",

          transition:
            "all 0.45s cubic-bezier(0.16,1,0.3,1)",
        }}
      >

        {/* LOGO */}

        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <h1
            style={{
              fontSize: "1.9rem",
              fontWeight: "900",
              letterSpacing: "-1.5px",

              background:
                "linear-gradient(to right,#ffffff,#dbeafe,#60a5fa)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              cursor: "pointer",
            }}
          >
            Shamika University
          </h1>
        </Link>

        {/* DESKTOP MENU */}

        <div className="desktopMenu">

          {[
            "Home",
            "Courses",
            "Admissions",
            "Contact",
          ].map((item, index) => (

            <Link
              key={index}

              to={`/${
                item.toLowerCase() === "home"
                  ? ""
                  : item.toLowerCase()
              }`}

              className="navLink"
            >
              {item}
            </Link>

          ))}

          {/* REGISTER BUTTON */}

          <Link to="/register">
            <button className="premiumButton">
              Register Now
            </button>
          </Link>

        </div>

        {/* MOBILE ICON */}

        <button
          className="mobileButton"

          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
        >
          {mobileMenu ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </nav>

      {/* MOBILE MENU */}

      {mobileMenu && (

        <div className="mobileMenuContainer">

          {[
            "Home",
            "Courses",
            "Admissions",
            "Faculty",
            "Contact",
          ].map((item, index) => (

            <Link
              key={index}

              to={`/${
                item.toLowerCase() === "home"
                  ? ""
                  : item.toLowerCase()
              }`}

              className="mobileLink"

              onClick={() =>
                setMobileMenu(false)
              }
            >
              {item}
            </Link>

          ))}

          {/* MOBILE REGISTER BUTTON */}

          <Link
            to="/register"

            onClick={() =>
              setMobileMenu(false)
            }
          >
            <button className="premiumButton mobileApply">
              Apply Now
            </button>
          </Link>

        </div>

      )}

      {/* CSS */}

      <style>
        {`
          *{
            box-sizing:border-box;
          }

          body{
            margin:0;
            background:#050816;
            font-family:Inter,sans-serif;
          }

          .desktopMenu{
            display:flex;
            align-items:center;
            gap:35px;
          }

          .navLink{
            position:relative;
            text-decoration:none;
            color:rgba(255,255,255,0.8);
            font-size:0.96rem;
            font-weight:500;
            transition:0.35s ease;
          }

          .navLink:hover{
            color:#ffffff;
          }

          .navLink::after{
            content:"";
            position:absolute;
            left:0;
            bottom:-8px;
            width:0%;
            height:2px;

            background:linear-gradient(
              to right,
              #60a5fa,
              #8b5cf6
            );

            border-radius:20px;
            transition:0.35s ease;
          }

          .navLink:hover::after{
            width:100%;
          }

          .premiumButton{
            padding:14px 28px;
            border:none;
            outline:none;
            border-radius:999px;

            background:linear-gradient(
              135deg,
              #ffffff,
              #dbeafe
            );

            color:#000;
            font-weight:700;
            font-size:0.95rem;

            cursor:pointer;

            transition:all 0.4s cubic-bezier(0.16,1,0.3,1);

            box-shadow:
              0 8px 30px rgba(255,255,255,0.12);
          }

          .premiumButton:hover{
            transform:
              translateY(-4px)
              scale(1.03);

            box-shadow:
              0 15px 40px rgba(96,165,250,0.25);
          }

          .mobileButton{
            display:none;
            background:transparent;
            border:none;
            color:white;
            cursor:pointer;
          }

          .mobileMenuContainer{
            position:fixed;
            top:110px;
            left:50%;
            transform:translateX(-50%);

            width:92%;
            padding:35px;

            border-radius:28px;

            background:rgba(10,10,10,0.92);

            backdrop-filter:blur(30px);

            border:1px solid rgba(255,255,255,0.08);

            display:flex;
            flex-direction:column;
            gap:30px;

            z-index:998;

            animation:fadeIn 0.4s ease;
          }

          .mobileLink{
            text-decoration:none;
            color:white;
            font-size:1.1rem;
            font-weight:500;
          }

          .mobileApply{
            margin-top:10px;
            width:100%;
          }

          @keyframes fadeIn{
            from{
              opacity:0;
              transform:
                translateX(-50%)
                translateY(-20px);
            }

            to{
              opacity:1;
              transform:
                translateX(-50%)
                translateY(0);
            }
          }

          @media(max-width:1000px){

            .desktopMenu{
              display:none;
            }

            .mobileButton{
              display:block;
            }

          }

          @media(max-width:768px){

            nav{
              padding:16px 22px !important;
            }

          }
        `}
      </style>
    </>
  );
};

export default Navbar;
