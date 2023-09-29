import React, { useState } from 'react';
import profileStore from '../../stores/profileStore';
import EditProfile from './EditProfile';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './profile.scss';
const SingleProfile = ({ item }) => {
  const store = profileStore((store) => {
    return {
      editProfile: store.editProfile,
      deleteProfile: store.deleteProfile,
      handleUpdateProfile: store.handleUpdateProfile,
      updateProfile: store.updateProfile,
      updateFormProfile: store.updateFormProfile,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editProfile(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Col xs={5} key={item._id} className="profileContainer">
        <Row className="div1">
          <Col xs={4} className="imageContainer">
            <img src={item.logo} alt="Logo" />
          </Col>
          <Col xs={8} className="detailsContainer font2">
            <h6>Business Name: {item.name}</h6>
            <h6>Email: {item.email}</h6>
            <h6>Number: {item.number1}</h6>
            <h6>Number 2: {item.number2}</h6>
            <Row>
              <Col xs={4}>
                <h6>Address: </h6>
              </Col>
              <Col>
                <h6>{item.building}</h6>
                <h6>{item.street}</h6>
                <h6>{item.city}</h6>
                <h6>{item.country}</h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="profileButtons">
          <button className="" onClick={handleOpenModal}>
            Update Profile
          </button>
          <button className="" onClick={() => store.deleteProfile(item._id)}>
            Delete
          </button>
        </Row>
      </Col>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfile
            updateProfile={store.updateProfile}
            handleUpdateProfile={store.handleUpdateProfile}
            updateFormProfile={store.updateFormProfile}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleProfile;
