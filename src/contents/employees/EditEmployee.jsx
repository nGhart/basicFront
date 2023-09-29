
import React from 'react';
import Form from 'react-bootstrap/Form';

const EditEmployee = ({
  handleCloseModal,
  updateForm,
  handleUpdate,
  updateEmployee,
}) => {
  return (
    <Form onSubmit={updateEmployee}>
      <Form.Group controlId="employeeName">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          value={updateForm.employeeName}
          onChange={handleUpdate}
          type="text"
          name="employeeName"
        />
      </Form.Group>
      <Form.Group controlId="employeeRole">
        <Form.Label>Role *</Form.Label>
        <Form.Control
          value={updateForm.employeeRole}
          onChange={handleUpdate}
          type="text"
          name="employeeRole"
        />
      </Form.Group>
      <Form.Group controlId="employeeDepartment">
        <Form.Label>Department *</Form.Label>
        <Form.Control
          value={updateForm.employeeDepartment}
          onChange={handleUpdate}
          type="text"
          name="employeeDepartment"
        />
      </Form.Group>
      <Form.Group controlId="employeeNumber">
        <Form.Label>Number *</Form.Label>
        <Form.Control
          value={updateForm.employeeNumber}
          onChange={handleUpdate}
          type="text"
          name="employeeNumber"
        />
      </Form.Group>
      <Form.Group controlId="employeeSalary">
        <Form.Label>Salary *</Form.Label>
        <Form.Control
          value={updateForm.employeeSalary}
          onChange={handleUpdate}
          type="number"
          name="employeeSalary"
        />
      </Form.Group>
      <Form.Group controlId="employeeStartDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          value={updateForm.employeeStartDate}
          onChange={handleUpdate}
          type="date"
          name="employeeStartDate"
        />
      </Form.Group>
      <Form.Group controlId="employeeEndDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          value={updateForm.employeeEndDate}
          onChange={handleUpdate}
          type="date"
          name="employeeEndDate"
        />
      </Form.Group>
      <div className="formButtonsContainer">
        <button className="formButtons" type="submit">
          Save Changes
        </button>
        <button className="formButtons" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    </Form>
  );
};

export default EditEmployee;
