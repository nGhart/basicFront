import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const EditAnimal = ({
  updateAnimal,
  handleUpdate,
  updateForm,
  handleCloseModal,
}) => {
  return (
    <div>
      <section className="updateForm">
        <Form onSubmit={updateAnimal}>
          <Container>
            <Row style={{ display: 'flex' }}>
              <h6>DETAILS</h6>
              <Col xs={12}>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label htmlFor="">ID *</Form.Label>
                      <Form.Control
                        name="name"
                        onChange={handleUpdate}
                        value={updateForm.name}
                        type="text"
                        autoFocus
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label htmlFor="">Sex *</Form.Label>
                      <Form.Select
                        aria-label="SEX"
                        name="sex"
                        onChange={handleUpdate}
                        value={updateForm.sex}
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
                        onChange={handleUpdate}
                        value={updateForm.breed}
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label htmlFor="">DOB *</Form.Label>
                      <Form.Control
                        name="dob"
                        onChange={handleUpdate}
                        value={updateForm.dob}
                        type="date"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <h6>Animal bred on Farm</h6>
                      <Form.Check
                        inline
                        label="Bred on Farm"
                        name="bred"
                        type="radio"
                        id="bred"
                        onChange={handleUpdate}
                        value="Bred on Farm"
                        checked={updateForm.bred === 'Bred on Farm'}
                      />
                      <Form.Check
                        inline
                        label="Purchased"
                        name="bred"
                        type="radio"
                        id="purchased"
                        value="Purchased"
                        checked={updateForm.bred === 'Purchased'}
                        onChange={handleUpdate}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label htmlFor="">WEANED AT</Form.Label>
                      <Form.Control
                        name="weaning"
                        onChange={handleUpdate}
                        value={updateForm.weaning}
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h6>PARENTS</h6>
                <Form.Group>
                  <Form.Label htmlFor="">Dame *</Form.Label>
                  <Form.Control
                    name="dame"
                    onChange={handleUpdate}
                    value={updateForm.dame}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="">Sire *</Form.Label>
                  <Form.Control
                    name="sire"
                    onChange={handleUpdate}
                    value={updateForm.sire}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="">Granddame</Form.Label>
                  <Form.Control
                    name="grandDame"
                    onChange={handleUpdate}
                    value={updateForm.grandDame}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="">Grandsire</Form.Label>
                  <Form.Control
                    name="grandSire"
                    onChange={handleUpdate}
                    value={updateForm.grandSire}
                    type="text"
                  />
                </Form.Group>
              </Col>

              <Col>
                <h6>WEIGHT</h6>
                <Form.Group>
                  <label htmlFor="">At Birth</label>
                  <Form.Control
                    name="weightBirth"
                    onChange={handleUpdate}
                    value={updateForm.weightBirth}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">At Weaning</label>
                  <Form.Control
                    name="weightWean"
                    onChange={handleUpdate}
                    value={updateForm.weightWean}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">At 8 Weeks</label>
                  <Form.Control
                    name="weight8"
                    onChange={handleUpdate}
                    value={updateForm.weight8}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Current</label>
                  <Form.Control
                    name="weightCurrent"
                    onChange={handleUpdate}
                    value={updateForm.weightCurrent}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Sale</label>
                  <Form.Control
                    name="weightSale"
                    onChange={handleUpdate}
                    value={updateForm.weightSale}
                    type="number"
                  />
                </Form.Group>
              </Col>

              <Col>
                <h6>FERTILITY</h6>
                <Form.Group>
                  <label htmlFor="">Age at First Service</label>
                  <Form.Control
                    name="firstService"
                    onChange={handleUpdate}
                    value={updateForm.firstService}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Services</label>
                  <Form.Control
                    name="totalService"
                    onChange={handleUpdate}
                    value={updateForm.totalService}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Litters</label>
                  <Form.Control
                    name="totalLitters"
                    onChange={handleUpdate}
                    value={updateForm.totalLitters}
                    type="number"
                  />
                </Form.Group>
              </Col>
              <Col>
                <h6>LITTER</h6>
                <Form.Group>
                  <label htmlFor="">Number of Kits</label>
                  <Form.Control
                    name="totalKits"
                    onChange={handleUpdate}
                    value={updateForm.totalKits}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Kits Alive</label>
                  <Form.Control
                    name="aliveKits"
                    onChange={handleUpdate}
                    value={updateForm.aliveKits}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number of Kits Dead</label>
                  <Form.Control
                    name="deadKits"
                    onChange={handleUpdate}
                    value={updateForm.deadKits}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number Sold</label>
                  <Form.Control
                    name="soldKits"
                    onChange={handleUpdate}
                    value={updateForm.soldKits}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Number Butchered</label>
                  <Form.Control
                    name="butcheredKits"
                    onChange={handleUpdate}
                    value={updateForm.butcheredKits}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="formButtonsContainer">
              <button className="formButtons" type="submit">
                Update
              </button>
              <button
                className="formButtons"
                type="button"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </Container>
        </Form>
      </section>
    </div>
  );
};

export default EditAnimal;
