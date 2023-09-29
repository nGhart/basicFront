import React from 'react';
import Form from 'react-bootstrap/Form';

const EditContact = ({
  updateContact,
  handleUpdateContact,
  updateFormContact,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateContact}>
      <Form.Group className="mb-3" controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="contactName"
          onChange={handleUpdateContact}
          value={updateFormContact.contactName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="contactEmail"
          onChange={handleUpdateContact}
          value={updateFormContact.contactEmail}
        />
        <Form.Text className="text-muted">Optional</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="text"
          name="contactNumber"
          onChange={handleUpdateContact}
          value={updateFormContact.contactNumber}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactGroup">
        <Form.Label>Contact Group</Form.Label>
        <Form.Control
          type="text"
          name="contactGroup"
          onChange={handleUpdateContact}
          value={updateFormContact.contactGroup}
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

export default EditContact;
