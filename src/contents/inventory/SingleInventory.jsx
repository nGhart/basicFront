import React, { useState } from 'react';
import inventoryStore from '../../stores/inventoryStore';
import EditInventory from './EditInventory';
import Modal from 'react-bootstrap/Modal';

const SingleInventory = ({ item, index }) => {
  const store = inventoryStore((store) => {
    return {
      editInventory: store.editInventory,
      deleteInventory: store.deleteInventory,
      handleUpdateInventory: store.handleUpdateInventory,
      updateInventory: store.updateInventory,
      updateFormInventory: store.updateFormInventory,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editInventory(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.inventoryName}</td>
        <td>{item.inventoryNumber}</td>
        <td>{item.inventoryDate}</td>
        <td>{item.inventoryPrice}</td>
        <td>{item.inventorySalePrice}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteInventory(item._id)}
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
          <EditInventory
            updateInventory={store.updateInventory}
            handleUpdateInventory={store.handleUpdateInventory}
            updateFormInventory={store.updateFormInventory}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleInventory;
