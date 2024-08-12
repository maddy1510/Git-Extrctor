import React from "react";
import Footer from "../../../layout/Footer/Footer";

const About = () => {
  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    color: "#000000"  // Black font color
  };

  const headerStyle = {
    fontSize: "2.5rem",
    fontWeight: "600",
    margin: "1rem 0"
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "2rem 0"
  };

  const teamStyle = {
    fontSize: "1.5rem",
    fontWeight: "500",
    marginTop: "2rem"
  };

  return (
    <div style={containerStyle}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <header style={headerStyle}>About Us</header>
      <section style={textStyle}>
        <h5>
          We believe this website gives a broader spectrum of opportunity to be seen <br />
          and get recognized because of all the efforts you put in. Instead of <br />
          finding code all day long in a difficult-to-find environment, this place gives<br/>
          you codes, repositories, and users within seconds.<br/>
          This website is built by coders for coders because we wanted to narrow <br/>
          down the path for finding codes and make it easier and more reachable to <br/>
          all. We hope you find all the 'hello worlds' out there.
        </h5>
        <h3 style={teamStyle}>Team Git-Extractor</h3>
      </section>
      <Footer />
    </div>
  );
};

export default About;