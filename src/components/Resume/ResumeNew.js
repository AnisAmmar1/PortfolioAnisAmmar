import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Button to download CV */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/Soumyajit_Behera-BIT_MESRA.pdf" // Direct path to the file in the public folder
            target="_blank" // This ensures the file opens in a new tab or browser
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Display the CV directly */}
        <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
          <iframe
            src="/CurriculumVitae_AnisAmmar.pdf" // Path to your PDF in the public folder
            width="100%"
            height="800px"
            style={{ border: "none" }}
            title="CV"
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
