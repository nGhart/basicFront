import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditFeed = ({
  updateFeed,
  handleUpdateFeed,
  updateFormFeed,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateFeed}>
      <Form.Group className="mb-3" controlId="feedName">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          name="feedName"
          onChange={handleUpdateFeed}
          value={updateFormFeed.feedName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="feedQuantity">
        <Form.Label>Feed Quantity *</Form.Label>
        <Form.Control
          type="number"
          name="feedQuantity"
          onChange={handleUpdateFeed}
          value={updateFormFeed.feedQuantity}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="feedServing">
        <Form.Label>Serving *</Form.Label>
        <Form.Control
          type="Serving"
          name="feedServing"
          onChange={handleUpdateFeed}
          value={updateFormFeed.feedServing}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="feedDatePurchased">
        <Form.Label>Contact DatePurchased</Form.Label>
        <Form.Control
          type="date"
          name="feedDatePurchased"
          onChange={handleUpdateFeed}
          value={updateFormFeed.feedDatePurchased}
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

export default EditFeed;
