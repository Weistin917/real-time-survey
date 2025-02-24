import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
import { Form, Button } from "react-bootstrap";

// Component for text input forms
function TextInput({ type = "text", placeholder, i, onChange }) {
  return (
    <Form.Control
      size="lg"
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        if (e.target.value == "") {
          onChange(i, 0);
        } else {
          onChange(i, 1);
        }
      }}
    />
  );
}

// Component for select forms
function SelectInput({ items, placeholder, i, onChange }) {
  return (
    <Form.Select
      size="lg"
      onChange={(e) => {
        if (e.target.value === 0) {
          onChange(i, 0);
        } else {
          onChange(i, 1);
        }
      }}
    >
      <option value={0} style={{ color: "#c9c9c9" }}>
        {placeholder}
      </option>
      {items.map((label) => (
        <option value={1}>{label}</option>
      ))}
    </Form.Select>
  );
}

// Component for radio check forms
function CheckInput({ items, i, onChange }) {
  onMark = () => onChange(i, 1);

  return items.map((label) => (
    <Form.Check type="radio" label={label} name="group" onChange={onMark} />
  ));
}

// Component for submit button
function SubmitBtn({ message, enable, setSubmit }) {
  return (
    <div className="d-grid gap-2">
      <Button
        variant="primary"
        type="button"
        disabled={!enable}
        onClick={() => {
          setSubmit();
          setTimeout(
            () => document.getElementById("surveyForm").submit(),
            5000
          );
        }}
      >
        {message}
      </Button>
    </div>
  );
}

// Component that holds all the input fields
export default function Survey({ fieldChange, enableSubmit, setSubmit }) {
  return (
    <Form style={{ paddingTop: 20 }} id="surveyForm">
      <Form.Group className="mb-3" controlId="nameInput">
        <TextInput placeholder="Enter name*" i={0} onChange={fieldChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="emailInput">
        <TextInput
          type="email"
          placeholder="Enter email*"
          i={1}
          onChange={fieldChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="currentStatus">
        <SelectInput
          items={["Working", "Studying", "Unemployed"]}
          placeholder="Select your current status"
          i={2}
          onChange={fieldChange}
        />
      </Form.Group>
      <Form.Group
        style={{ textAlign: "left" }}
        className="mb-3"
        controlId="favSubject"
      >
        <Form.Label>Select your favorite subject:</Form.Label>
        <CheckInput
          items={["Math", "Physics", "English"]}
          i={3}
          onChange={fieldChange}
        />
      </Form.Group>
      <SubmitBtn
        message="Submit survey"
        enable={enableSubmit}
        setSubmit={setSubmit}
      />
    </Form>
  );
}
