import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EditInvoice = ({
  updateInvoice,
  handleUpdateInvoice,
  updateFormInvoice,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateInvoice}>
      <Form.Group className="mb-3" controlId="clientName">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          name="clientName"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.clientName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="clientEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="clientEmail"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.clientEmail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="clientNumber">
        <Form.Label>Number *</Form.Label>
        <Form.Control
          type="text"
          name="clientNumber"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.clientNumber}
        />
      </Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Text>Doe</InputGroup.Text>
        <Form.Control
          controlId="doePrice"
          aria-label="doePrice"
          name="doePrice"
          type="number"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.doePrice}
          placeholder="Doe Price"
        />
        <Form.Control
          aria-label="doeCount"
          name="clientDoeCount"
          controlId="clientDoeCount"
          type="number"
          placeholder="Doe Count"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.clientDoeCount}
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
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.buckPrice}
        />
        <Form.Control
          aria-label="buckCount"
          controlId="clientBuckCount"
          name="clientBuckCount"
          type="number"
          placeholder="Buck Count"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.clientBuckCount}
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
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.kitPrice}
        />
        <Form.Control
          aria-label="Kit Count"
          name="clientKitCount"
          type="number"
          placeholder="Kit Count"
          controlId="clientKitCount"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.clientKitCount}
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
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.manurePrice}
        />
        <Form.Control
          aria-label="manureCount"
          controlId="clientManureCount"
          type="number"
          placeholder="Manure Count"
          name="clientManureCount"
          onChange={handleUpdateInvoice}
          value={updateFormInvoice.clientManureCount}
        />
      </InputGroup> */}
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

export default EditInvoice;
