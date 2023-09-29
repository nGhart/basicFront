import React from 'react';
import Form from 'react-bootstrap/Form';

const EditDisease = ({
  updateDisease,
  handleUpdateDisease,
  updateFormDisease,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateDisease}>
      <Form.Group className="mb-1" controlId="diseaseAnimal">
        <Form.Label>Animal *</Form.Label>
        <Form.Control
          type="text"
          name="diseaseAnimal"
          onChange={handleUpdateDisease}
          value={updateFormDisease.diseaseAnimal}
        />
      </Form.Group>

      <Form.Group className="mb-1" controlId="diseaseCondition">
        <Form.Label>Condition *</Form.Label>
        <Form.Control
          type="text"
          name="diseaseCondition"
          onChange={handleUpdateDisease}
          value={updateFormDisease.diseaseCondition}
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="diseaseManagement">
        <Form.Label>Management</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="diseaseManagement"
          onChange={handleUpdateDisease}
          value={updateFormDisease.diseaseManagement}
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="diseaseDuration">
        <Form.Label>Duration of Disease</Form.Label>
        <Form.Control
          type="number"
          name="diseaseDuration"
          onChange={handleUpdateDisease}
          value={updateFormDisease.diseaseDuration}
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="diseaseOutcome">
        <Form.Label>Outcome</Form.Label>
        <Form.Select
          type="text"
          name="diseaseOutcome"
          aria-label="diseaseOutcome"
          onChange={handleUpdateDisease}
          value={updateFormDisease.diseaseOutcome}
        >
          <option>Pick Outcome</option>
          <option value="In treatment">In treatment</option>
          <option value="Recovered">Recovered</option>
          <option value="Dead">Dead</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-1" controlId="diseaseDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="diseaseDate"
          onChange={handleUpdateDisease}
          value={updateFormDisease.diseaseDate}
        />
      </Form.Group>
      <div className="formButtonsContainer">
        <button className="formButtons" variant="primary" type="submit">
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

export default EditDisease;
