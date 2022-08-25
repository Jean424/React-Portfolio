import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import code_quiz from "../../Assets/Projects/code-quiz.png";
import day_planner from "../../Assets/Projects/day-planner.png";
import movie from "../../Assets/Projects/movie.png";
import DnD from "../../Assets/Projects/DnD-Charactor-Generator.png";
import weather_dashboard from "../../Assets/Projects/weather-dashboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently from my BootCamp.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DnD}
              isBlog={false}
              title="DnD-Charactor-Generator"
              description="This is a full-stack web application called DnD character generator. We designed and builded this app by using the skillls that we learned over the past units. We used MVC paradigm, D&D character server-side API, user authentication, and databases on this application. Finally, we deployed the application on the heroku.s"
              ghLink="https://github.com/Jean424/DnD-Character-Creater"
              demoLink="https://guarded-bayou-66527.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_dashboard}
              isBlog={false}
              title="Weather_Dashboard_APP"
              description="WHEN you search for a city, the weather dashboard shows you the current and future wether of this city."
              ghLink="https://github.com/Jean424/Weather_Dashboard_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Finder"
              description="Movie Finder is a simple webiste application with form inputs, you can get a list of movies rendered on the screen based on your input criteria. This app has been developed using html, css and javascript based on RapidAPI and public MovesDatabasepublic API."
              ghLink="https://github.com/hallerhc/Project-1"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code_quiz}
              isBlog={false}
              title="Code Quiz"
              description="when you click the start button, a timer starts and a question is presented."
              ghLink="https://github.com/Jean424/Code_Quiz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={day_planner}
              isBlog={false}
              title="Day-Planner"
              description="WHEN you open the planner, you can use the daily planner to create a schedule for the current day."
              ghLink="https://github.com/Jean424/Day-Planner"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
