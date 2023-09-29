import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import medStore from '../../stores/medStore';

const AddMed = () => {
  const store = medStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="addButtons" onClick={handleShow}>
        Add New Med
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
          <Form onSubmit={store.handleAddMed}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                onChange={store.updateCreateMeds}
                value={store.createMed.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="number">
              <Form.Label>Batch Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                onChange={store.updateCreateMeds}
                value={store.createMed.number}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="supplier">
              <Form.Label>Supplier</Form.Label>
              <Form.Control
                type="text"
                name="supplier"
                onChange={store.updateCreateMeds}
                value={store.createMed.supplier}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="expiryDate">
              <Form.Label>Expiry Date *</Form.Label>
              <Form.Control
                required
                type="date"
                name="expiryDate"
                onChange={store.updateCreateMeds}
                value={store.createMed.expiryDate}
              />
            </Form.Group>
            <div className="formButtonsContainer">
              <button className="formButtons" type="submit">
                Add
              </button>
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

export default AddMed;
