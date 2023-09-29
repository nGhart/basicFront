import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const EditProfile = ({
  updateProfile,
  handleUpdateProfile,
  updateFormProfile,
  handleCloseModal,
}) => {
  return (
    <Form onSubmit={updateProfile}>
      <Form.Group>
        <Form.Label>Name </Form.Label>
        <Form.Control
          onChange={handleUpdateProfile}
          type="text"
          name="name"
          value={updateFormProfile.name}
        />
      </Form.Group>
      <Col xs={12} className="box1">
        <Form.Group className="mb-1 " controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            onChange={handleUpdateProfile}
            type="email"
            name="email"
            value={updateFormProfile.email}
          />
        </Form.Group>
      </Col>
      <Col className="box1">
        <Form.Group className="mb-1 " controlId="formBasicNumber">
          <Form.Label>Number 1</Form.Label>
          <Form.Control
            onChange={handleUpdateProfile}
            type="text"
            name="number1"
            value={updateFormProfile.number1}
          />
        </Form.Group>
        <Form.Group className="mb-1 " controlId="formBasicNumber">
          <Form.Label>Number 2</Form.Label>
          <Form.Control
            onChange={handleUpdateProfile}
            type="text"
            name="number2"
            value={updateFormProfile.number2}
          />
          <Form.Text>Optional</Form.Text>
        </Form.Group>
      </Col>

      <Form.Group className="mb-1  box1" controlId="formBasicEmail">
        <Form.Label>Building Address</Form.Label>
        <Form.Control
          onChange={handleUpdateProfile}
          type="text"
          name="building"
          value={updateFormProfile.building}
        />
      </Form.Group>

      <Col xs={12} className="box1">
        <Form.Group className="mb-1 " controlId="formBasicEmail">
          <Form.Label>Street Name</Form.Label>
          <Form.Control
            onChange={handleUpdateProfile}
            type="text"
            name="street"
            value={updateFormProfile.street}
          />
        </Form.Group>
      </Col>
      <Col className="box1">
        <Form.Group className="mb-1 " controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={handleUpdateProfile}
            type="text"
            name="city"
            value={updateFormProfile.city}
          />
        </Form.Group>
        <Form.Group className="mb-1 " controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control
            onChange={handleUpdateProfile}
            type="text"
            name="country"
            value={updateFormProfile.country}
          />
        </Form.Group>
      </Col>
      <Form.Group className="mb-1 box1" controlId="formBasicEmail">
        <Form.Label>Logo Url</Form.Label>
        <Form.Control
          onChange={handleUpdateProfile}
          type="text"
          name="logo"
          value={updateFormProfile.logo}
        />
      </Form.Group>

      <div className="formButtonsContainer">
        <button className="formButtons" type="submit">
          Save
        </button>
        <button
          className="formButtons"
          type="button"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </Form>
  );
};

export default EditProfile;
