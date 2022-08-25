import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I come from <span className="purple"> China.</span>
            <br />I am a Data Engineer and a DevOps Engineer.
            <br />
            <br />
            Apart from working, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing with my kids
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn new things that make my life difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jing Li</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
