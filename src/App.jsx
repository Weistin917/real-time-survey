import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Navbar, Container, Stack, ProgressBar, Alert } from "react-bootstrap";
import Survey from "./components/Components.js";

export default function App() {
  const numInputs = 4;
  const [filled, setFilled] = useState(Array(numInputs).fill(0)); // array of filled fields
  const progress = filled.reduce((sum, a) => sum + a, 0) / numInputs;
  const [submitted, setSubmit] = useState(false);

  // Record a field change; sets 1 to the filled field, or sets 0 if a field was emptied.
  function fieldChange(i, value) {
    const nextFilled = filled.slice();
    nextFilled[i] = value;
    setFilled(nextFilled);
  }

  function submit() {
    setSubmit(true);
    setTimeout(() => setSubmit(false), 5000);
  }

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
        <ProgressBar now={progress * 100}></ProgressBar>
        <Survey
          fieldChange={fieldChange}
          enableSubmit={progress === 1}
          setSubmit={submit}
        />
        <Alert variant="info" style={{ fontWeight: 500 }} show={submitted}>
          Data submitted successfully.
        </Alert>
      </Stack>
    </>
  );
}
