import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import profileStore from '../../stores/profileStore';
import Col from 'react-bootstrap/Col';

const AddProfile = () => {
  const store = profileStore();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="addButtons" onClick={handleShow}>
        Add Profile
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddProfile}>
            <Form.Group>
              <Form.Label>Name *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateProfiles}
                type="text"
                name="name"
                value={store.createProfile.name}
              />
            </Form.Group>
            <Col xs={12} className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="email"
                  name="email"
                  value={store.createProfile.email}
                />
              </Form.Group>
            </Col>
            <Col className="box1">
              <Form.Group className="mb-1 " controlId="formBasicNumber">
                <Form.Label>Number 1</Form.Label>
                <Form.Control
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="number1"
                  value={store.createProfile.number1}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicNumber">
                <Form.Label>Number 2</Form.Label>
                <Form.Control
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="number2"
                  value={store.createProfile.number2}
                />
                <Form.Text>Optional</Form.Text>
              </Form.Group>
            </Col>
            <Form.Group className="mb-1  box1" controlId="formBasicEmail">
              <Form.Label>Building Address</Form.Label>
              <Form.Control
                onChange={store.updateCreateProfiles}
                type="text"
                name="building"
                value={store.createProfile.building}
              />
            </Form.Group>
            <Col xs={12} className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Street Name *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="street"
                  value={store.createProfile.street}
                />
              </Form.Group>
            </Col>
            <Col className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>City *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="city"
                  value={store.createProfile.city}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Country *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="country"
                  value={store.createProfile.country}
                />
              </Form.Group>
            </Col>
            <Form.Group className="mb-1 box1" controlId="formBasicEmail">
              <Form.Label>Logo Url *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateProfiles}
                type="text"
                name="logo"
                value={store.createProfile.logo}
              />
            </Form.Group>
            <div className="formButtonsContainer">
              <button className="formButtons" type="submit">
                Add Profile
              </button>
              <button
                type="button"
                className="formButtons"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProfile;
