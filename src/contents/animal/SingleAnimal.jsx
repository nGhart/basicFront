import React, { useEffect, useState } from 'react';
import animalStore from '../../stores/animalStore';
import './animal.css';
import EditAnimal from './EditAnimal';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Skeleton, Box } from '@chakra-ui/react';
import Accordion from 'react-bootstrap/Accordion';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  useDisclosure,
  Button,
  Tr,
  Td,
} from '@chakra-ui/react';

const SingleAnimal = ({ item, index }) => {
  const store = animalStore((store) => ({
    editAnimal: store.editAnimal,
    deleteAnimal: store.deleteAnimal,
    updateAnimal: store.updateAnimal,
    handleUpdate: store.handleUpdate,
    updateForm: store.updateForm,
    getAnimals: store.getAnimals,
  }));

  useEffect(() => {
    store.getAnimals();
  }, []);

  const { isOpenDelete, onToggle, onCloseDelete } = useDisclosure();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    store.editAnimal(item);
    setShowModal(true);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModal = () => setShowModal(false);

  function getAge(dob) {
    const birthD = new Date(dob);
    //console.log("birthD",birthD)
    const today = new Date();
    const dif = today - birthD;
    //console.log("dif",dif)
    const age = Math.floor(dif / (1000 * 60 * 60 * 24 * 7));
    return age;
  }

  return (
    <>
      <Tr key={item._id}>
        <Td>{index + 1}</Td>
        <Td>{item.name}</Td>
        <Td>{item.breed}</Td>
        <Td>{item.sex}</Td>
        <Td>{item.bred}</Td>
        <Td>{item.dob.slice(0, 10)}</Td>
        <Td>{getAge(item.dob)}</Td>
        <Td>{item.weightCurrent}</Td>
        <Td>{item.status}</Td>
        <Td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleShow}>
              <i className="fas fa-eye"></i>
            </button>
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>

            <Popover>
              <PopoverTrigger>
                <button className="actionIcons" onClick={onToggle}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Header</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    Are you sure you want to delete this entry
                  </PopoverBody>
                  <PopoverFooter>
                    <Button
                      colorScheme="red"
                      onClick={() => store.deleteAnimal(item._id)}
                    >
                      Delete
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
        </Td>
      </Tr>

      <Modal
        show={showModal}
        style={{ padding: '5px' }}
        onHide={handleCloseModal}
        scrollable={true}
      >
        <Modal.Header closeButton className="header">
          <h4>Edit Animal</h4>
        </Modal.Header>
        <Modal.Body>
          <EditAnimal
            updateAnimal={store.updateAnimal}
            handleUpdate={store.handleUpdate}
            updateForm={store.updateForm}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6}>
                <Row>
                  <Col xs={6}>
                    <img
                      src={item.pic}
                      alt="Animal"
                      style={{ width: '100%', objectFit: 'cover' }}
                    />
                  </Col>
                  <Col xs={6}>
                    <h4>DETAILS</h4>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>ID</span>
                      {item.name}
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>SEX</span> {item.sex}
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>DOB</span>
                      {item.dob.slice(0, 10)}
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>SOURCE</span> {item.bred}
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>AGE</span>
                      {getAge(item.dob)} weeks
                    </p>

                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>BREED</span> {item.breed}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={6}>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Parents</Accordion.Header>
                    <Accordion.Body>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>DAME</span>
                        {item.dame}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>SIRE</span>
                        {item.sire}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>GRANDDAME</span>
                        {item.grandDame}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>GRANDSIRE</span>
                        {item.grandSire}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Weight</Accordion.Header>
                    <Accordion.Body>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>CURRENT WEIGHT</span> {item.weightCurrent}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>WEIGHT AT SALE</span> {item.weightSale}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Fertility</Accordion.Header>
                    <Accordion.Body>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>TOTAL SERVICE</span> {item.totalService}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>TOTAL LITTERS</span> {item.totalLitters}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Litters</Accordion.Header>
                    <Accordion.Body>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>TOTAL KITS</span>
                        {item.totalKits}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>KITS ALIVE</span>
                        {item.aliveKits}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>KITS DEAD</span> {item.deadKits}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>KITS SOLD</span>
                        {item.soldKits}
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>KITS BUTCHERED</span>
                        {item.butcheredKits}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleAnimal;
