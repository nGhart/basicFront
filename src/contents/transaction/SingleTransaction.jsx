import React, { useState } from 'react';
import EditTransaction from './EditTransaction';
import Modal from 'react-bootstrap/Modal';
import transactionStore from '../../stores/transactionStore';
import Stack from 'react-bootstrap/Stack';
import './transaction.css';

const SingleTransaction = ({ item }) => {
  const store = transactionStore((store) => {
    return {
      editTransaction: store.editTransaction,
      deleteTransaction: store.deleteTransaction,
      handleUpdateTransaction: store.handleUpdateTransaction,
      updateTransaction: store.updateTransaction,
      updateFormTransaction: store.updateFormTransaction,
    };
  });

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editTransaction(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  let colourTransaction;
  colourTransaction =
    item.transactionType === 'Income'
      ? (colourTransaction = 'green')
      : (colourTransaction = 'red');

  return (
    <>
      <Stack
        direction="horizontal"
        className="homeBack"
        gap={3}
        style={{
          boxShadow: '1px 1px 2px 2px',
          width: '95%',
          borderRadius: '5px',
          color: 'black',
          marginBottom: '4px',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        <div className="p-2">
          <p style={{ fontStyle: 'italic' }}>{item.date}</p>
        </div>
        <div className="p-2">
          <p
            style={{
              backgroundColor: `${colourTransaction}`,
              padding: '5px',
              color: 'white',
              fontWeight: 700,
              borderRadius: '5px',
            }}
          >
            {item.transactionType}
          </p>
        </div>
        <div className="p-2">
          <p style={{ fontStyle: 'italic' }}>Category:{item.category}</p>{' '}
        </div>
        <div className="p-2">
          <h6 style={{ fontWeight: 700, textTransform: 'capitalize' }}>
            {item.name}
          </h6>
        </div>
        <div className="p-2">
          <p>{item.payment}</p>
        </div>
        <div className="p-2">
          <h6>
            GHC{' '}
            <span
              style={{
                fontWeight: 'bold',
              }}
            >
              {item.price}
            </span>
          </h6>
        </div>
        <div className="p-2">
          {' '}
          <button className="transactionAction" onClick={handleOpenModal}>
            Edit
          </button>
          <button
            className="transactionAction"
            onClick={() => {
              store.deleteTransaction(item._id);
            }}
          >
            Delete
          </button>
        </div>
      </Stack>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTransaction
            updateTransaction={store.updateTransaction}
            handleUpdateTransaction={store.handleUpdateTransaction}
            updateFormTransaction={store.updateFormTransaction}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SingleTransaction;
