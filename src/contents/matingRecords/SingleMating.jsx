import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import matingStore from '../../stores/matingStore';
import EditMating from './EditMating';

const SingleMating = ({ item, index }) => {
  const store = matingStore((store) => {
    return {
      editMating: store.editMating,
      deleteMating: store.deleteMating,
      handleUpdateMating: store.handleUpdateMating,
      updateMating: store.updateMating,
      updateFormMating: store.updateFormMating,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editMating(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  function addDaysToDate(originalDate, daysToAdd) {
    //console.log('og date', originalDate);
    const date = new Date(originalDate);
    //console.log('date', date);
    date.setDate(date.getDate() + daysToAdd);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
    return formattedDate.slice(0, 10);
  }

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.matingDoe}</td>
        <td>{item.matingBuck}</td>
        <td>{item.matingDate1.slice(0, 10)}</td>
        <td>{item.matingDate2.slice(0, 10)}</td>
        <td>{addDaysToDate(item.matingDate2, 28)}</td>
        <td>{item.nesting}</td>
        <td>{item.kindling}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteMating(item._id)}
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
          <EditMating
            updateMating={store.updateMating}
            handleUpdateMating={store.handleUpdateMating}
            updateFormMating={store.updateFormMating}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMating;
