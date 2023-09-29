import React, { useState } from 'react';
import employeeStore from '../../stores/employeeStore';
import Modal from 'react-bootstrap/Modal';
import EditEmployee from './EditEmployee';

const SingleEmployee = ({ index, item }) => {
  const store = employeeStore((store) => ({
    editEmployee: store.editEmployee,
    deleteEmployee: store.deleteEmployee,
    updateEmployee: store.updateEmployee,
    handleUpdate: store.handleUpdate,
    updateForm: store.updateForm,
  }));
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    store.editEmployee(item);
    setShowModal(true);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.employeeName}</td>
        <td>{item.employeeRole}</td>
        <td>{item.employeeDepartment}</td>
        <td>{item.employeeNumber}</td>
        <td>{item.employeeSalary}</td>
        <td>{item.employeeStartDate}</td>
        <td>{item.employeeEndDate}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteEmployee(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditEmployee
            updateEmployee={store.updateEmployee}
            handleUpdate={store.handleUpdate}
            updateForm={store.updateForm}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleEmployee;
