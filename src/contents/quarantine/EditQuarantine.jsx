import React from 'react';
import Form from 'react-bootstrap/Form';

const EditQuarantine = ({
  updateQuarantine,
  handleUpdateQuarantine,
  updateFormQuarantine,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateQuarantine}>
      <Form.Group className="mb-3" controlId="animal">
        <Form.Label>Affected Animal *</Form.Label>
        <Form.Control
          type="text"
          name="animal"
          onChange={handleUpdateQuarantine}
          value={updateFormQuarantine.animal}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="condition">
        <Form.Label>Condition *</Form.Label>
        <Form.Control
          type="text"
          name="condition"
          onChange={handleUpdateQuarantine}
          value={updateFormQuarantine.condition}
        />
        <Form.Text className="text-muted">Optional</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="outcome">
        <Form.Label>Outcome *</Form.Label>
        <Form.Select
          type="text"
          name="outcome"
          aria-label="outcome"
          onChange={handleUpdateQuarantine}
          value={updateFormQuarantine.outcome}
        >
          <option>Pick Outcome</option>
          <option value="Quarantined">Quarantined</option>
          <option value="Cleared">Cleared</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          name="startDate"
          onChange={handleUpdateQuarantine}
          value={updateFormQuarantine.startDate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          name="endDate"
          onChange={handleUpdateQuarantine}
          value={updateFormQuarantine.endDate}
        />
      </Form.Group>
      <div className="formButtonsContainer">
        <button className="formButtons" type="submit">
          Save
        </button>
        <button
          className="formButtons"
          type="button"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </Form>
  );
};

export default EditQuarantine;
