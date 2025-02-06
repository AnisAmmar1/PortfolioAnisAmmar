import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import etkium from "../../Assets/Projects/etkium.png";
import guapa from "../../Assets/Projects/guapa.png";
import portailEmploi from "../../Assets/Projects/portail-emploi.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import gestionProjet from "../../Assets/Projects/gestion-projet.png";
import reseauSocial from "../../Assets/Projects/reseauSocial.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets Récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etkium}
              isBlog={false}
              title="Système de Traçabilité des Anodes"
              description="Développement et mise en place d'un système avancé de traçabilité pour la gestion des anodes dans un environnement industriel. Intégration d'un système de notifications en temps réel avec MQTTnet et automatisation des étapes CI/CD avec un pipeline déclaratif."
              ghLink="https://github.com/AnisAmmar-eu/ATS_Pipline"
              demoLink="https://etkium.com"
              imgStyle={{ width: "100%", height: "250px", objectFit: "cover" }} // Style ajouté
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reseauSocial}
              isBlog={false}
              title="Réseau Social pour Passionnés d'Animaux"
              description="Création d'un réseau social spécialisé pour les passionnés d'animaux, permettant aux utilisateurs de se connecter et de partager leurs expériences. Technologies utilisées : NodeJS, React JS, MongoDB."
              ghLink="https://github.com/AnisAmmar-eu/Pethub-SocialMedia"
              demoLink="https://reseau-social-animaux.tn"
              imgStyle={{ width: "100%", height: "250px", objectFit: "cover" }} 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portailEmploi}
              isBlog={false}
              title="Portail d'Emploi"
              description="Conception et développement d'un portail d'emploi pour mettre en relation les demandeurs d'emploi avec des employeurs potentiels. Technologies utilisées : NodeJS, React JS, MongoDB."
              ghLink="https://github.com/AnisAmmar-eu/GuapaDrawingApp"
              demoLink="https://portail-emploi.tn"
              imgStyle={{ width: "100%", height: "250px", objectFit: "cover" }} // Style ajouté
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Plateforme E-Commerce de Livres"
              description="Conception et développement d'une plateforme de e-commerce spécialisée dans la vente de livres d'occasion. Technologies utilisées : Angular, NodeJS, MongoDB."
              ghLink=""
              demoLink="https://ecommerce-livres.tn"
              imgStyle={{ width: "100%", height: "250px", objectFit: "cover" }} // Style ajouté
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guapa}
              isBlog={false}
              title="Application de Dessin Guapa"
              description="Développement d'une application de dessin permettant de créer des illustrations, de prendre des photos, de dessiner dessus, et de sauvegarder les résultats sur le PC. Technologies utilisées : NodeJS, React JS, MongoDB."
              ghLink="https://github.com/anisammar/guapa-drawing-app"
              demoLink="https://guapa.com"
              imgStyle={{ width: "100%", height: "250px", objectFit: "cover" }} // Style ajouté
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
