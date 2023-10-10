import React from 'react';
import Form from 'react-bootstrap/Form';

const EditVaccination = ({
  updateVaccination,
  handleUpdateVaccination,
  updateFormVaccination,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateVaccination}>
      <Form.Group className="mb-3" controlId="medication">
        <Form.Label>Medication *</Form.Label>
        <Form.Control
          type="text"
          name="medication"
          onChange={handleUpdateVaccination}
          value={updateFormVaccination.medication}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date *</Form.Label>
        <Form.Control
          type="date"
          name="date"
          onChange={handleUpdateVaccination}
          value={updateFormVaccination.date}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="nextDate">
        <Form.Label>Next Date *</Form.Label>
        <Form.Control
          type="number"
          name="nextDate"
          onChange={handleUpdateVaccination}
          value={updateFormVaccination.nextDate}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>STATUS</Form.Label>
        <Form.Select
          aria-label="STATUS"
          name="status"
          className="fif"
          onChange={handleUpdateVaccination}
          value={updateFormVaccination.status}
          type="text"
        >
          <option>Pick Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </Form.Select>
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

export default EditVaccination;
