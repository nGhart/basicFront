import React, { useState } from 'react';
import quarantineStore from '../../stores/quarantineStore';
import EditQuarantine from './EditQuarantine';
import Modal from 'react-bootstrap/Modal';

const SingleQuarantine = ({ item, index }) => {
  const store = quarantineStore((store) => {
    return {
      editQuarantine: store.editQuarantine,
      deleteQuarantine: store.deleteQuarantine,
      handleUpdateQuarantine: store.handleUpdateQuarantine,
      updateQuarantine: store.updateQuarantine,
      updateFormQuarantine: store.updateFormQuarantine,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editQuarantine(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.animal}</td>
        <td>{item.condition}</td>
        <td>{item.startDate}</td>
        <td>{item.endDate}</td>
        <td>{item.outcome}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteQuarantine(item._id)}
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
          <EditQuarantine
            updateQuarantine={store.updateQuarantine}
            handleUpdateQuarantine={store.handleUpdateQuarantine}
            updateFormQuarantine={store.updateFormQuarantine}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleQuarantine;
