import React, { useState } from 'react';
import contactStore from '../../stores/contactStore';
import EditContact from './EditContact';
import Modal from 'react-bootstrap/Modal';

const SingleContact = ({ item, index }) => {
  const store = contactStore((store) => {
    return {
      editContact: store.editContact,
      deleteContact: store.deleteContact,
      handleUpdateContact: store.handleUpdateContact,
      updateContact: store.updateContact,
      updateFormContact: store.updateFormContact,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editContact(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.contactName}</td>
        <td>{item.contactNumber}</td>
        <td>{item.contactEmail}</td>
        <td>{item.contactGroup}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteContact(item._id)}
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
          <EditContact
            updateContact={store.updateContact}
            handleUpdateContact={store.handleUpdateContact}
            updateFormContact={store.updateFormContact}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleContact;
