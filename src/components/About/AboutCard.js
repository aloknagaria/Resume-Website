import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alok Nagaria </span>
            from <span className="purple"> Jhansi, India.</span>
            <br /> I am a final year student pursuing B.Tech in Computer Science and Engineering.
            <br />
            Additionally, I have worked as an intern in Sarda Consulting.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> GYM
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life's tapestry weaves purpose into every thread. Embrace the highs and lows, for they color our growth. Cherish each chapter, for life's beauty lies in profound experiences, not its length!"{" "}
          </p>
          <footer className="blockquote-footer">Alok</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
