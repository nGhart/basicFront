import React from 'react';
import Form from 'react-bootstrap/Form';

const EditInventory = ({
  updateInventory,
  handleUpdateInventory,
  updateFormInventory,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateInventory}>
      <Form.Group className="mb-3" controlId="inventoryName">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          name="inventoryName"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inventoryNumber">
        <Form.Label>Serial Number *</Form.Label>
        <Form.Control
          type="text"
          name="inventoryNumber"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryNumber}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inventoryDate">
        <Form.Label>Date Purchased</Form.Label>
        <Form.Control
          type="date"
          name="inventoryDate"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryDate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inventoryPrice">
        <Form.Label>Purchase Price *</Form.Label>
        <Form.Control
          type="number"
          name="inventoryPrice"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventoryPrice}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inventorySalePrice">
        <Form.Label>Sale Price</Form.Label>
        <Form.Control
          type="number"
          name="inventorySalePrice"
          onChange={handleUpdateInventory}
          value={updateFormInventory.inventorySalePrice}
        />
      </Form.Group>
      <div className="formButtonsContainer">
        <button className="formButtons" type="submit">
          Submit
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

export default EditInventory;
