import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import vaccinationStore from '../../stores/vaccinationStore';

const AddVaccination = () => {
  const store = vaccinationStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="healthButtons" onClick={handleShow}>
        Add New Vaccination
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
          <Form onSubmit={store.handleAddVaccination}>
            <Form.Group className="mb-3" controlId="medication">
              <Form.Label>Medication *</Form.Label>
              <Form.Control
                required
                type="text"
                name="medication"
                onChange={store.updateCreateVaccinations}
                value={store.createVaccination.medication}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date *</Form.Label>
              <Form.Control
                required
                type="date"
                name="date"
                onChange={store.updateCreateVaccinations}
                value={store.createVaccination.date}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nextDate">
              <Form.Label>Next Date *</Form.Label>
              <Form.Control
                required
                type="number"
                name="nextDate"
                onChange={store.updateCreateVaccinations}
                value={store.createVaccination.nextDate}
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

export default AddVaccination;
