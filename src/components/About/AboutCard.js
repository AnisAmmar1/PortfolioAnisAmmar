import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple"> Anis Ammar</span> 
                         <br />
            <br />
            Actuellement, je suis développeur logiciel passionné par la 
            création de solutions innovantes.
            <br/>
            <br />
            J'ai une solide expérience en développement web et en programmation.
            <br />
            <br />
          </p>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
