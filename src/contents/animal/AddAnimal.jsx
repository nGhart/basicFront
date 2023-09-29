import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import animalStore from '../../stores/animalStore';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './animal.css';

const AddAnimal = () => {
  const store = animalStore();
  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);
  return (
    <div>
      <button className="addButtons" onClick={modalShow}>
        Add Animal
      </button>
      <Modal
        show={show}
        fullscreen
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h4>Add Animal</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddAnimal}>
            <Container>
              <Row style={{ display: 'flex' }}>
                <h6>DETAILS</h6>
                <Col xs={6}>
                  <Row>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label htmlFor="">ID *</Form.Label>
                        <Form.Control
                          required
                          name="name"
                          onChange={store.updateCreateAnimals}
                          value={store.createAnimal.name}
                          type="text"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label>SEX *</Form.Label>
                        <Form.Select
                          aria-label="SEX"
                          name="sex"
                          required
                          onChange={store.updateCreateAnimals}
                          value={store.createAnimal.sex}
                          type="text"
                        >
                          <option>Pick gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label htmlFor="">BREED</Form.Label>
                        <Form.Control
                          name="breed"
                          onChange={store.updateCreateAnimals}
                          value={store.createAnimal.breed}
                          type="text"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label htmlFor="">DOB *</Form.Label>
                        <Form.Control
                          name="dob"
                          required
                          onChange={store.updateCreateAnimals}
                          value={store.createAnimal.dob}
                          type="date"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={6}>
                      <Form.Group>
                        <h6>SOURCE</h6>
                        <Form.Check
                          inline
                          label="Bred on Farm"
                          name="bred"
                          type="radio"
                          id="bred"
                          onChange={store.updateCreateAnimals}
                          value="Bred on Farm"
                          checked={store.createAnimal.bred === 'Bred on Farm'}
                        />
                        <Form.Check
                          inline
                          label="Purchased"
                          name="bred"
                          type="radio"
                          id="purchased"
                          value="Purchased"
                          checked={store.createAnimal.bred === 'Purchased'}
                          onChange={store.updateCreateAnimals}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label htmlFor="">WEANED AT</Form.Label>
                        <Form.Control
                          name="weaning"
                          onChange={store.updateCreateAnimals}
                          value={store.createAnimal.weaning}
                          type="number"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3}>
                  <h6>PARENTS</h6>
                  <Form.Group>
                    <Form.Label htmlFor="">Dame *</Form.Label>
                    <Form.Control
                      name="dame"
                      required
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.dame}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="">Sire *</Form.Label>
                    <Form.Control
                      name="sire"
                      required
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.sire}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="">Granddame</Form.Label>
                    <Form.Control
                      name="grandDame"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.grandDame}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="">Grandsire</Form.Label>
                    <Form.Control
                      name="grandSire"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.grandSire}
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col xs={3}>
                  <h6>FERTILITY</h6>
                  <Form.Group>
                    <Form.Label htmlFor="">Age at First Service</Form.Label>
                    <Form.Control
                      name="firstService"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.firstService}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="">Number of Services</Form.Label>
                    <Form.Control
                      name="totalService"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.totalService}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="">Number of Litters</Form.Label>
                    <Form.Control
                      name="totalLitters"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.totalLitters}
                      type="number"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <h6>WEIGHT</h6>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">At Birth</Form.Label>
                    <Form.Control
                      className="fif"
                      name="weightBirth"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.weightBirth}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">At Weaning</Form.Label>
                    <Form.Control
                      className="fif"
                      name="weightWean"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.weightWean}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">At 8 Weeks</Form.Label>
                    <Form.Control
                      className="fif"
                      name="weight8"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.weight8}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">Current</Form.Label>
                    <Form.Control
                      name="weightCurrent"
                      className="fif"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.weightCurrent}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">Sale</Form.Label>
                    <Form.Control
                      name="weightSale"
                      className="fif"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.weightSale}
                      type="number"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <h6>LITTER</h6>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">Number of Kits</Form.Label>
                    <Form.Control
                      name="totalKits"
                      className="fif"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.totalKits}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">Number of Kits Alive</Form.Label>
                    <Form.Control
                      name="aliveKits"
                      className="fif"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.aliveKits}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">Number of Kits Dead</Form.Label>
                    <Form.Control
                      name="deadKits"
                      className="fif"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.deadKits}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">Number Sold</Form.Label>
                    <Form.Control
                      name="soldKits"
                      className="fif"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.soldKits}
                      type="number"
                    />
                  </Form.Group>
                  <Form.Group className="jBetween">
                    <Form.Label htmlFor="">Number Butchered</Form.Label>
                    <Form.Control
                      name="butcheredKits"
                      className="fif"
                      onChange={store.updateCreateAnimals}
                      value={store.createAnimal.butcheredKits}
                      type="number"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="formButtonsContainer">
                <button className="formButtons" type="submit">
                  Add
                </button>
                <button
                  type="buttons"
                  className="formButtons"
                  onClick={modalClose}
                >
                  Close
                </button>
              </div>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddAnimal;
