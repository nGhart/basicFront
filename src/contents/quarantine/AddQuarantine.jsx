import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import quarantineStore from '../../stores/quarantineStore';

const AddQuarantine = () => {
  const store = quarantineStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="healthButtons" onClick={handleShow}>
        Add New Quarantine
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
          <Modal.Title>Add New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddQuarantine}>
            <Form.Group className="mb-3" controlId="animal">
              <Form.Label>Animal *</Form.Label>
              <Form.Control
                required
                type="text"
                name="animal"
                onChange={store.updateCreateQuarantines}
                value={store.createQuarantine.animal}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="condition">
              <Form.Label>Condition *</Form.Label>
              <Form.Control
                required
                type="text"
                name="condition"
                onChange={store.updateCreateQuarantines}
                value={store.createQuarantine.condition}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="outcome">
              <Form.Label>Outcome *</Form.Label>
              <Form.Select
                required
                type="text"
                name="outcome"
                aria-label="outcome"
                onChange={store.updateCreateQuarantines}
                value={store.createQuarantine.outcome}
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
                onChange={store.updateCreateQuarantines}
                value={store.createQuarantine.startDate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                onChange={store.updateCreateQuarantines}
                value={store.createQuarantine.endDate}
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

export default AddQuarantine;
