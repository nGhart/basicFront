import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import employeeStore from '../../stores/employeeStore';

const AddEmployee = () => {
  const store = employeeStore();
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
        animation={false}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddEmployee}>
            <Form.Group controlId="employeeName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateEmployees}
                value={store.createEmployee.employeeName}
                type="text"
                name="employeeName"
              />
            </Form.Group>
            <Form.Group controlId="employeeRole">
              <Form.Label>Role *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateEmployees}
                value={store.createEmployee.employeeRole}
                type="text"
                name="employeeRole"
              />
            </Form.Group>
            <Form.Group controlId="employeeDepartment">
              <Form.Label>Department *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateEmployees}
                value={store.createEmployee.employeeDepartment}
                type="text"
                name="employeeDepartment"
              />
            </Form.Group>
            <Form.Group controlId="employeeNumber">
              <Form.Label>Number *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateEmployees}
                value={store.createEmployee.employeeNumber}
                type="text"
                name="employeeNumber"
              />
            </Form.Group>
            <Form.Group controlId="employeeSalary">
              <Form.Label>Salary *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateEmployees}
                value={store.createEmployee.employeeSalary}
                type="number"
                name="employeeSalary"
              />
            </Form.Group>
            <Form.Group controlId="employeeStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                onChange={store.updateCreateEmployees}
                value={store.createEmployee.employeeStartDate}
                type="date"
                name="employeeStartDate"
              />
            </Form.Group>
            <Form.Group controlId="employeeEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                onChange={store.updateCreateEmployees}
                value={store.createEmployee.employeeEndDate}
                type="date"
                name="employeeEndDate"
              />
            </Form.Group>
            <div className="formButtonsContainer">
              <button className="formButtons" type="submit">
                Submit
              </button>
              <button className="formButtons" onClick={handleClose}>
                Close
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEmployee;
