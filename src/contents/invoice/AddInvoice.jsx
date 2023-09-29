import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import invoiceStore from '../../stores/invoiceStore';

const AddInvoice = () => {
  const store = invoiceStore();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="addButtons" onClick={handleShow}>
        Add New Invoice
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
          <Modal.Title>Add New Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddInvoice}>
            <Form.Group className="mb-3" controlId="clientName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                required
                name="clientName"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.clientName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="clientEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="clientEmail"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.clientEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="clientNumber">
              <Form.Label>Number *</Form.Label>
              <Form.Control
                required
                type="text"
                name="clientNumber"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.clientNumber}
              />
            </Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>Doe</InputGroup.Text>
              <Form.Control
                controlId="doePrice"
                aria-label="doePrice"
                name="doePrice"
                type="number"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.doePrice}
                placeholder="Doe Price"
              />
              <Form.Control
                aria-label="doeCount"
                name="clientDoeCount"
                controlId="clientDoeCount"
                type="number"
                placeholder="Doe Count"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.clientDoeCount}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Buck</InputGroup.Text>
              <Form.Control
                controlId="buckPrice"
                aria-label="buckPrice"
                name="buckPrice"
                type="number"
                placeholder="Buck Price"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.buckPrice}
              />
              <Form.Control
                aria-label="buckCount"
                controlId="clientBuckCount"
                name="clientBuckCount"
                type="number"
                placeholder="Buck Count"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.clientBuckCount}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Kit</InputGroup.Text>
              <Form.Control
                aria-label="kitPrice"
                name="kitPrice"
                type="number"
                placeholder="Kit Price"
                controlId="kitPrice"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.kitPrice}
              />
              <Form.Control
                aria-label="Kit Count"
                name="clientKitCount"
                type="number"
                placeholder="Kit Count"
                controlId="clientKitCount"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.clientKitCount}
              />
            </InputGroup>
            {/* <InputGroup className="mb-3">
              <InputGroup.Text>Manure</InputGroup.Text>
              <Form.Control
                aria-label="manurePrice"
                controlId="manurePrice"
                type="number"
                name="manurePrice"
                placeholder="Manure Price"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.manurePrice}
              />
              <Form.Control
                aria-label="manureCount"
                controlId="clientManureCount"
                type="number"
                placeholder="Manure Count"
                name="clientManureCount"
                onChange={store.updateCreateInvoices}
                value={store.createInvoice.clientManureCount}
              />
            </InputGroup> */}
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

export default AddInvoice;
