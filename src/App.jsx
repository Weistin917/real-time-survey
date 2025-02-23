import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import {
  Navbar,
  Container,
  Stack,
  ProgressBar,
  Form,
  Button,
} from "react-bootstrap";

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
        <Form style={{ paddingTop: 20 }}>
          <Form.Group className="mb-3" controlId="nameInput">
            <Form.Control size="lg" placeholder="Enter name*" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Control size="lg" type="email" placeholder="Enter email*" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="currentStatus">
            <Form.Select size="lg" aria-label="Default select example">
              <option value="0" style={{ color: "#c9c9c9" }}>
                Select your current status
              </option>
              <option value="1">Working</option>
              <option value="1">Studying</option>
              <option value="1">Unemployed</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            style={{ textAlign: "left" }}
            className="mb-3"
            controlId="favSubject"
          >
            <Form.Label>Favorite subject</Form.Label>
            <Form.Check type="radio" label="Math" name="group" />
            <Form.Check type="radio" label="Physic" name="group" />
            <Form.Check type="radio" label="English" name="group" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit survey
          </Button>
        </Form>
      </Stack>
    </>
  );
}
