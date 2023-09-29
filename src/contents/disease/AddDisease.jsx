import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import diseaseStore from '../../stores/diseaseStore';

const AddDisease = () => {
  const store = diseaseStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="healthButtons" onClick={handleShow}>
        Add New Disease
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Disease</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddDisease}>
            <Form.Group className="mb-1" controlId="diseaseAnimal">
              <Form.Label>Affected Animal *</Form.Label>
              <Form.Control
                type="text"
                name="diseaseAnimal"
                required
                onChange={store.updateCreateDiseases}
                value={store.createDisease.diseaseAnimal}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="diseaseCondition">
              <Form.Label>Condition *</Form.Label>
              <Form.Control
                type="text"
                required
                name="diseaseCondition"
                onChange={store.updateCreateDiseases}
                value={store.createDisease.diseaseCondition}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="diseaseManagement">
              <Form.Label>Management</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="diseaseManagement"
                onChange={store.updateCreateDiseases}
                value={store.createDisease.diseaseManagement}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="diseaseDuration">
              <Form.Label>Disease Duration</Form.Label>
              <Form.Control
                type="text"
                name="diseaseDuration"
                onChange={store.updateCreateDiseases}
                value={store.createDisease.diseaseDuration}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="diseaseOutcome">
              <Form.Label>Disease Outcome</Form.Label>
              <Form.Select
                type="text"
                name="diseaseOutcome"
                aria-label="outcome"
                onChange={store.updateCreateDiseases}
                value={store.createDisease.diseaseOutcome}
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
                onChange={store.updateCreateDiseases}
                value={store.createDisease.diseaseDate}
              />
            </Form.Group>
            <div className="formButtonsContainer">
              <button className="formButtons" variant="primary" type="submit">
                Add
              </button>{' '}
              <button className="formButtons" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddDisease;
