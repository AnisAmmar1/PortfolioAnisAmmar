import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    PERMETTEZ-MOI DE <span className="purple"> ME PRÉSENTER </span>
  </h1>
  <p className="home-about-body">
    Passionné par le développement web, je conçois des sites performants, modernes et optimisés 
    pour offrir une expérience utilisateur fluide. Toujours en veille technologique, 
    j’allie <b className="purple">design, performance et sécurité</b> afin de répondre aux exigences de chaque projet.
    <br />
    <br />
    J’ai une expertise en&nbsp;
    <i>
      <b className="purple">Javascript, React.js , Node.js</b>
    </i>
    , et je m'intéresse aux nouvelles technologies du web ainsi qu'aux solutions innovantes.
    <br />
    <br />
    N’hésitez pas à me contacter pour collaborer ! 🚀
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        <Col md={12} className="home-about-social">
  <h1>RETROUVEZ-MOI</h1>
  <p>
    N'hésitez pas à <span className="purple">me contacter</span>
  </p>
  <ul className="home-about-social-links">
    <li className="social-icons">
      <a
        href="https://github.com/AnisAmmar-eu"
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
      >
        <AiFillGithub />
      </a>
    </li>
    <li className="social-icons">
      <a
        href="https://www.linkedin.com/in/anis-ammar-a59154220/"
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
      >
        <FaLinkedinIn />
      </a>
    </li>
  </ul>
</Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
