import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
import { Form, Button } from "react-bootstrap";

// Component for text input forms
function TextInput({ type = "text", placeholder }) {
  return (
    <Form.Control
      size="lg"
      type={type}
      placeholder={placeholder}
    />
  );
}

// Component for select forms
function SelectInput({ items, placeholder }) {
  return (
    <Form.Select
      size="lg"
    >
      <option value="0" style={{ color: "#c9c9c9" }}>
        {placeholder}
      </option>
      {items.map((label) => (
        <option value="1">{label}</option>
      ))}
    </Form.Select>
  );
}

// Component for radio check forms
function CheckInput({ items }) {
  return items.map((label) => (
    <Form.Check type="radio" label={label} name="group" />
  ));
}

// Component for submit button
function SubmitBtn({ message }) {
  return (
    <Button variant="primary" type="submit">
      {message}
    </Button>
  );
}

// Component that holds all the input fields
export default function Survey() {
  return (
    <Form style={{ paddingTop: 20 }}>
      <Form.Group className="mb-3" controlId="nameInput">
        <TextInput placeholder="Enter name*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="emailInput">
        <TextInput
          type="email"
          placeholder="Enter email*"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="currentStatus">
        <SelectInput
          items={["Working", "Studying", "Unemployed"]}
          placeholder="Select your current status"
        />
      </Form.Group>
      <Form.Group
        style={{ textAlign: "left" }}
        className="mb-3"
        controlId="favSubject"
      >
        <CheckInput
          items={["Math", "Physics", "English"]}
        />
      </Form.Group>
      <SubmitBtn message="Submit survey" />
    </Form>
  );
}
