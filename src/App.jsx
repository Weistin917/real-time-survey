import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import {
  Navbar,
  Container,
  Stack,
  ProgressBar
} from "react-bootstrap";
import Survey from "./components/Components.js";

export default function App() {

  return (
    <>
      <Navbar
        bg="primary"
        expand="lg"
        fixed="top"
        data-bs-theme="dark"
        className="sticky-nav"
      >
        <Container>
          <Navbar.Brand>Interactive Survey</Navbar.Brand>
        </Container>
      </Navbar>
      <Stack
        gap={2}
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20,
        }}
      >
        <div className="h3" style={{ textAlign: "left" }}>
          Complete the survey
        </div>
        <ProgressBar now={49}></ProgressBar>
        <Survey />
      </Stack>
    </>
  );
}
