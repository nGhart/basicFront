import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import matingStore from '../../stores/matingStore';

const AddMating = () => {
  const store = matingStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="addButtons" onClick={handleShow}>
        Add New Entry
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
          <Form onSubmit={store.handleAddMating}>
            <Form.Group className="mb-3" controlId="matingDoe">
              <Form.Label>Doe *</Form.Label>
              <Form.Control
                type="text"
                required
                name="matingDoe"
                onChange={store.updateCreateMatings}
                value={store.createMating.matingDoe}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="matingBuck">
              <Form.Label>Buck *</Form.Label>
              <Form.Control
                required
                type="text"
                name="matingBuck"
                onChange={store.updateCreateMatings}
                value={store.createMating.matingBuck}
              />
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="matingDate1">
              <Form.Label>First Servicing *</Form.Label>
              <Form.Control
                type="date"
                required
                name="matingDate1"
                onChange={store.updateCreateMatings}
                value={store.createMating.matingDate1}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="matingDate2">
              <Form.Label>Last Servicing *</Form.Label>
              <Form.Control
                type="date"
                required
                name="matingDate2"
                onChange={store.updateCreateMatings}
                value={store.createMating.matingDate2}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nesting">
              <Form.Label>Nesting Date</Form.Label>
              <Form.Control
                type="date"
                name="nesting"
                onChange={store.updateCreateMatings}
                value={store.createMating.nesting}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="kindling">
              <Form.Label>Kindling Date</Form.Label>
              <Form.Control
                type="date"
                name="kindling"
                onChange={store.updateCreateMatings}
                value={store.createMating.kindling}
              />
            </Form.Group>
            <div className="formButtonsContainer">
              <button className="formButtons" variant="primary" type="submit">
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

export default AddMating;
