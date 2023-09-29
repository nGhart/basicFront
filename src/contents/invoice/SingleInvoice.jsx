import React, { useState } from 'react';
import invoiceStore from '../../stores/invoiceStore';
import EditInvoice from './EditInvoice';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const SingleInvoice = ({ item, index }) => {
  const store = invoiceStore((store) => {
    return {
      editInvoice: store.editInvoice,
      deleteInvoice: store.deleteInvoice,
      handleUpdateInvoice: store.handleUpdateInvoice,
      updateInvoice: store.updateInvoice,
      updateFormInvoice: store.updateFormInvoice,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editInvoice(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const navigate = useNavigate();

  const printPage = () => {
    navigate('/print', { state: { item } });
  };

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.clientName}</td>
        <td>{item.clientNumber}</td>
        <td>{item.clientEmail}</td>
        <td>{item.doePrice}</td>
        <td>{item.clientDoeCount}</td>
        <td>{item.buckPrice}</td>
        <td>{item.clientBuckCount}</td>
        <td>{item.kitPrice}</td>
        <td>{item.clientKitCount}</td>
        {/* <td>{item.manurePrice}</td>
        <td>{item.clientManureCount}</td> */}
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={printPage}>
              <i className="fa fa-print"></i>
            </button>
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteInvoice(item._id)}
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
          <EditInvoice
            updateInvoice={store.updateInvoice}
            handleUpdateInvoice={store.handleUpdateInvoice}
            updateFormInvoice={store.updateFormInvoice}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleInvoice;
