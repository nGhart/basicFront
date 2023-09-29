import React, { useState } from 'react';
import medStore from '../../stores/medStore';
import EditMed from './EditMed';
import Modal from 'react-bootstrap/Modal';

const SingleMed = ({ item, index }) => {
  const store = medStore((store) => {
    return {
      editMed: store.editMed,
      deleteMed: store.deleteMed,
      handleUpdateMed: store.handleUpdateMed,
      updateMed: store.updateMed,
      updateFormMed: store.updateFormMed,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editMed(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.number}</td>
        <td>{item.supplier}</td>
        <td>{item.expiryDate}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteMed(item._id)}
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
          <EditMed
            updateMed={store.updateMed}
            handleUpdateMed={store.handleUpdateMed}
            updateFormMed={store.updateFormMed}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMed;
