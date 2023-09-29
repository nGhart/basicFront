import React, { useState } from 'react';
import diseaseStore from '../../stores/diseaseStore';
import EditDisease from './EditDisease';
import Modal from 'react-bootstrap/Modal';

const SingleDisease = ({ item, index }) => {
  const store = diseaseStore((store) => {
    return {
      editDisease: store.editDisease,
      deleteDisease: store.deleteDisease,
      handleUpdateDisease: store.handleUpdateDisease,
      updateDisease: store.updateDisease,
      updateFormDisease: store.updateFormDisease,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editDisease(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.diseaseAnimal}</td>
        <td>{item.diseaseCondition}</td>
        <td>{item.diseaseManagement}</td>
        <td>{item.diseaseDuration}</td>
        <td>{item.diseaseOutcome}</td>
        <td>{item.diseaseDate}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteDisease(item._id)}
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
          <EditDisease
            updateDisease={store.updateDisease}
            handleUpdateDisease={store.handleUpdateDisease}
            updateFormDisease={store.updateFormDisease}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleDisease;
