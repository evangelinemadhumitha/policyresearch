
import ChatPresentation from "./ChatPresentation";
import VerifyPresentation from "./VerifyPresentation";
import OriginalPresentation from "./OriginalPresentation";
import AudioPresentation from "./AudioPresentation";
import TextPresentation from "./TextPresentation";
import VisualPresentation from "./VisualPresentation";

import { useState } from "react";
import "./App.css";

// ==========================================
// SIX PRIVACY PRESENTATIONS
// ==========================================

const presentations = [
  {
    id: "visual",
    number: "01",
    title: "Visual",
    subtitle: "See how your data moves",
    description:
      "Understand privacy practices through clear diagrams and visual explanations.",
    icon: "▦",
  },
  {
    id: "text",
    number: "02",
    title: "Text",
    subtitle: "Read a simpler explanation",
    description:
      "Explore privacy information written in clear, everyday language.",
    icon: "≡",
  },
  {
    id: "audio",
    number: "03",
    title: "Audio",
    subtitle: "Listen to the explanation",
    description:
      "Understand privacy practices through spoken explanations.",
    icon: "♫",
  },
  {
    id: "original",
    number: "04",
    title: "Original",
    subtitle: "Read the official policy",
    description:
      "Explore the company's original privacy policy without modifications.",
    icon: "▤",
  },
  {
    id: "verify",
    number: "05",
    title: "Verify",
    subtitle: "Check the original sources",
    description:
      "Read simplified explanations and inspect their supporting policy passages.",
    icon: "✓",
  },
  {
    id: "chat",
    number: "06",
    title: "Chat",
    subtitle: "Ask questions about your privacy",
    description:
      "Explore Spotify's privacy practices through interactive questions and answers.",
    icon: "◉",
  },
];

// ==========================================
// RESEARCH TEAM INFORMATION
// ==========================================

const faculty = {
  name: "Yusuf Albayram",
  role: "Faculty",
  email: "yusuf.albayram@ccsu.edu",
  initials: "YA",
};

const studentResearchers = [
  {
    name: "Evangeline Madhumitha Amala Andrew",
    role: "Student Researcher",
    email: "e.amalaandrew@my.ccsu.edu",
    initials: "EA",
  },
  {
    name: "Rana Naimat Khan Naro",
    role: "Student Researcher",
    email: "naimat.rana@my.ccsu.edu",
    initials: "RN",
  },
  {
    name: "Mendjola Koprencka",
    role: "Student Researcher",
    email: "m.koprencka@my.ccsu.edu",
    initials: "MK",
  },
];

// ==========================================
// MAIN APPLICATION
// ==========================================

function App() {
  const requestedMode = new URLSearchParams(
    window.location.search
  ).get("mode");

  const studyMode = presentations.some(
    (item) => item.id === requestedMode
  ) ? requestedMode : null;

  const [page, setPage] = useState(studyMode || "home");
  const [studyWelcomeDone, setStudyWelcomeDone] = useState(false);

  const navigate = (destination) => {
    if (studyMode && destination !== studyMode) return;

    window.speechSynthesis?.cancel();
    setPage(destination);
    window.scrollTo(0, 0);
  };

  const activePresentation = presentations.find(
    (item) => item.id === page
  );

  return (
    <div className="website">

      {/* ACCESSIBILITY */}
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* ======================================
          WEBSITE HEADER
      ====================================== */}

      {!studyMode && <header className="site-header">
        <div className="header-inner">

          <button
            className="logo-button"
            onClick={() => navigate("home")}
            aria-label="Privacy Policy Explorer, home"
          >
            <span
              className="logo-symbol"
              aria-hidden="true"
            >
              ◆
            </span>

            <span>Privacy Policy Explorer</span>
          </button>

          <nav
            className="site-nav"
            aria-label="Main navigation"
          >
            <button
              onClick={() => navigate("home")}
              aria-current={
                page === "home" ? "page" : undefined
              }
            >
              Home
            </button>

            <button
              onClick={() => navigate("about")}
              aria-current={
                page === "about" ? "page" : undefined
              }
            >
              About
            </button>
          </nav>
        </div>
      </header>}

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <main id="main" tabIndex="-1">

        {studyMode && !studyWelcomeDone && page !== "about" ? (
          <section className="container" style={{
            maxWidth: "760px",
            margin: "60px auto",
            padding: "36px 24px",
            textAlign: "center"
          }}>
            <p className="section-label">PRIVACY POLICY STUDY</p>

            <h1>Welcome to the Privacy Policy Study</h1>

            <p>
              Thank you for participating in this research study!
            </p>

            <p>
              Please review the privacy policy information provided
              and then return to your survey.
            </p>

            <div style={{
              textAlign: "left",
              margin: "32px 0",
              padding: "24px",
              borderRadius: "12px",
              background: "#f3f5f8",
              color: "#202938"
            }}>
              <h2>What you'll do</h2>
              <ol style={{paddingLeft: "24px", lineHeight: "2"}}>
                <li>Explore the privacy-policy presentation on the next screen.</li>
                <li>Take your time reviewing the information.</li>
                <li>Return to your Qualtrics survey when you're finished.</li>
                <li>Answer the survey questions based on your experience.</li>
              </ol>
            </div>

            <p>
              Please keep your Qualtrics survey tab open
              so you can return to it afterward.
            </p>

            <button
              className="button-primary"
              onClick={() => {
                setStudyWelcomeDone(true);
                window.scrollTo(0, 0);
              }}
            >
              Begin Exploring →
            </button>
          </section>
        ) : (
          <>

        {/* ====================================
            HOME PAGE
        ==================================== */}

        {page === "home" && (
          <>
            <section className="hero">
              <div className="container">

                <p className="section-label">
                  PRIVACY, EXPLAINED
                </p>

                <h1>
                  Understand your privacy.
                  <br />
                  Your way.
                </h1>

                <p className="hero-description">
                  Privacy policies can be difficult to
                  understand. Explore six different ways
                  of presenting privacy information,
                  designed to make complex policies clearer.
                </p>

                <button
                  className="button-primary"
                  onClick={() => {
                    document
                      .getElementById("presentations")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Explore presentations{" "}
                  <span aria-hidden="true">
                    →
                  </span>
                </button>

              </div>
            </section>

            {/* SIX PRESENTATION CARDS */}

            <section
              id="presentations"
              className="presentations-section container"
              aria-labelledby="presentations-title"
            >
              <div className="section-intro">

                <p className="section-label">
                  SIX WAYS TO EXPLORE
                </p>

                <h2 id="presentations-title">
                  Choose how you explore privacy.
                </h2>

                <p>
                  Each presentation offers a different
                  way to understand information from
                  the same privacy policy.
                </p>

              </div>

              <div className="presentation-grid">

                {presentations.map((item) => (
                  <article
                    className="presentation-card"
                    key={item.id}
                  >
                    <div className="card-top">

                      <span
                        className="card-icon"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>

                      <span className="card-number">
                        {item.number} / 06
                      </span>

                    </div>

                    <h3>{item.title}</h3>

                    <p className="card-subtitle">
                      {item.subtitle}
                    </p>

                    <p className="card-description">
                      {item.description}
                    </p>

                    <button
                      className="card-link"
                      onClick={() =>
                        navigate(item.id)
                      }
                      aria-label={`Explore ${item.title} presentation`}
                    >
                      Explore {item.title}

                      <span aria-hidden="true">
                        {" "}→
                      </span>
                    </button>

                  </article>
                ))}

              </div>
            </section>
          </>
        )}

        {/* ====================================
            PRESENTATION PAGES
        ==================================== */}

        {activePresentation && (
          <section className="presentation-page container">

            {!studyMode && <button
              className="back-link"
              onClick={() => navigate("home")}
            >
              <span aria-hidden="true">
                ←
              </span>{" "}
              Back to presentations
            </button>}



            {!studyMode && <h1>
              {activePresentation.title} Presentation
            </h1>}

            {!studyMode && <p className="page-description">
              {activePresentation.description}
            </p>}

            {page === "visual" ? (
              <VisualPresentation />
            ) : page === "text" ? (
              <TextPresentation />
            ) : page === "audio" ? (
              <AudioPresentation />
            ) : page === "original" ? (
              <OriginalPresentation />
            ) : page === "verify" ? (
              <VerifyPresentation />
            ) : page === "chat" ? (
              <ChatPresentation />
            ) : (
              <div className="policy-panel">

                <div className="policy-panel-header">
                  <span className="policy-label">
                    PRIVACY POLICY EXPLORER
                  </span>

                  <span className="preview-label">
                    Layout preview
                  </span>
                </div>

                <div className="placeholder-content">

                  <span
                    className="placeholder-icon"
                    aria-hidden="true"
                  >
                    {activePresentation.icon}
                  </span>

                  <h2>
                    {activePresentation.title} content
                  </h2>

                  <p>
                    This is where we will build the{" "}
                    {activePresentation.title.toLowerCase()}{" "}
                    presentation using the selected
                    company's real privacy policy.
                  </p>

                </div>
              </div>
            )}


          </section>
        )}

        {/* ====================================
            ABOUT PAGE
        ==================================== */}

        {page === "about" && (
          <section className="about-page container">

            {/* ABOUT INTRODUCTION */}

            <p className="section-label">
              ABOUT THE PROJECT
            </p>

            <h1>
              Making privacy information easier
              to explore.
            </h1>

            <p>
              Privacy Policy Explorer is an academic
              research prototype investigating how
              different presentation formats may
              affect people's understanding of
              privacy policies and their experience
              using the interface.
            </p>

            <p>
              The project explores visual, text,
              audio, original-policy,
              source-verification, and
              conversational-chat presentations.
            </p>

            {/* ==================================
                RESEARCH TEAM SECTION
            ================================== */}

            <div
              style={{
                marginTop: 60,
                paddingTop: 45,
                borderTop:
                  "1px solid #e1e7e2",
              }}
            >

              {/* TEAM HEADING */}

              <div
                style={{
                  textAlign: "center",
                  marginBottom: 40,
                }}
              >

                <p className="section-label">
                  THE PEOPLE BEHIND THE PROJECT
                </p>

                <h2
                  style={{
                    fontSize:
                      "clamp(30px, 4vw, 40px)",
                    color: "#17231b",
                    margin: "12px 0",
                    fontWeight: 800,
                  }}
                >
                  Meet Our Research Team
                </h2>

                <p
                  style={{
                    color: "#5c665f",
                    fontSize: 16,
                    marginTop: 10,
                  }}
                >
                  Central Connecticut State
                  University (CCSU)
                </p>

              </div>

              {/* ================================
                  FACULTY — TOP CENTER
              ================================ */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 0,
                }}
              >

                <article
                  style={{
                    width: "100%",
                    maxWidth: 410,
                    background: "#f2fbf5",
                    border:
                      "2px solid #1DB954",
                    borderRadius: 24,
                    padding: "36px 28px",
                    textAlign: "center",
                    boxShadow:
                      "0 12px 35px rgba(29,185,84,0.09)",
                    boxSizing: "border-box",
                  }}
                >

                  {/* FACULTY AVATAR */}

                  <div
                    aria-hidden="true"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "#d8f4e1",
                      color: "#137a37",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 25,
                      fontWeight: 800,
                      margin:
                        "0 auto 20px",
                    }}
                  >
                    {faculty.initials}
                  </div>

                  {/* FACULTY LABEL */}

                  <p
                    style={{
                      color: "#16843c",
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: 2,
                      margin: "0 0 12px",
                    }}
                  >
                    FACULTY
                  </p>

                  {/* FACULTY NAME */}

                  <h3
                    style={{
                      fontSize: 25,
                      lineHeight: 1.4,
                      color: "#17231b",
                      margin: "0 0 14px",
                    }}
                  >
                    {faculty.name}
                  </h3>

                  {/* FACULTY EMAIL */}

                  <a
                    href={`mailto:${faculty.email}`}
                    style={{
                      color: "#285c3a",
                      fontSize: 15,
                      textDecoration: "underline",
                      textUnderlineOffset: 4,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {faculty.email}
                  </a>

                </article>
              </div>

              {/* ==================================
                  CONNECTOR LINE
              ================================== */}

              <div
                aria-hidden="true"
                style={{
                  width: 2,
                  height: 38,
                  background: "#b9dcc5",
                  margin: "0 auto",
                }}
              />

              {/* STUDENT SECTION TITLE */}

              <h3
                style={{
                  textAlign: "center",
                  color: "#16843c",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 2,
                  margin: "16px 0 28px",
                }}
              >
                STUDENT RESEARCHERS
              </h3>

              {/* ==================================
                  THREE STUDENT CARDS
              ================================== */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 22,
                  maxWidth: 1080,
                  margin: "0 auto 44px",
                }}
              >

                {studentResearchers.map(
                  (person) => (
                    <article
                      key={person.email}
                      style={{
                        background: "#ffffff",
                        border:
                          "1px solid #e1e9e3",
                        borderRadius: 20,
                        padding: "32px 22px",
                        textAlign: "center",
                        boxShadow:
                          "0 8px 28px rgba(0,0,0,0.045)",
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxSizing: "border-box",
                      }}
                    >

                      {/* STUDENT AVATAR */}

                      <div
                        aria-hidden="true"
                        style={{
                          width: 62,
                          height: 62,
                          borderRadius: "50%",
                          background: "#e7f8ed",
                          color: "#137a37",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 19,
                          fontWeight: 800,
                          marginBottom: 22,
                        }}
                      >
                        {person.initials}
                      </div>

                      {/* STUDENT NAME */}

                      <h3
                        style={{
                          fontSize: 19,
                          lineHeight: 1.5,
                          color: "#17231b",
                          margin: "0 0 12px",
                          minHeight: 58,
                        }}
                      >
                        {person.name}
                      </h3>

                      {/* STUDENT ROLE */}

                      <p
                        style={{
                          color: "#16843c",
                          fontSize: 12,
                          fontWeight: 800,
                          margin: "0 0 18px",
                        }}
                      >
                        {person.role}
                      </p>

                      {/* STUDENT EMAIL */}

                      <a
                        href={`mailto:${person.email}`}
                        style={{
                          color: "#34483b",
                          fontSize: 13,
                          lineHeight: 1.7,
                          textDecoration:
                            "underline",
                          textUnderlineOffset: 4,
                          overflowWrap: "anywhere",
                          marginTop: "auto",
                        }}
                      >
                        {person.email}
                      </a>

                    </article>
                  )
                )}

              </div>

            </div>

            {/* RETURN HOME */}

            
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "30px",
    marginBottom: "30px",
  }}
>
  <button
    className="button-primary"
    onClick={() => navigate("home")}
  >
    Return home
  </button>
</div>


          </section>
        )}

          </>
        )}
      </main>

      {/* ======================================
          WEBSITE FOOTER
      ====================================== */}

      {!studyMode && <footer className="site-footer">
        <div className="footer-inner">
          <span>
            Privacy Policy Explorer
          </span>

          <span>
            Academic Research Prototype
          </span>
        </div>
      </footer>}

    </div>
  );
}

export default App;
