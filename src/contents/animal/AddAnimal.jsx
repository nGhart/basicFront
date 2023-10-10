import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import animalStore from '../../stores/animalStore';
import { useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import './animal.css';

const AddAnimal = () => {
  const store = animalStore();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <button className="addButtons" onClick={onOpen}>
        Add Animal
      </button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h4>Add Animal</h4>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={store.handleAddAnimal}>
              <h6>DETAILS</h6>

              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">ID *</Form.Label>
                <Form.Control
                  required
                  name="name"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.name}
                  type="text"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-2 jBetween">
                <Form.Label>SEX *</Form.Label>
                <Form.Select
                  aria-label="SEX"
                  name="sex"
                  className="fif"
                  required
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.sex}
                  type="text"
                >
                  <option>Pick Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">BREED</Form.Label>
                <Form.Control
                  className="fif"
                  name="breed"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.breed}
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">DOB *</Form.Label>
                <Form.Control
                  name="dob"
                  className="fif"
                  required
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.dob}
                  type="date"
                />
              </Form.Group>

              <Form.Group className="mb-2 jBetween">
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

              <Form.Group className="mb-2">
                <Form.Label htmlFor="">DESCRIPTION</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="description"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.description}
                />
              </Form.Group>

              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">IMAGE</Form.Label>
                <Form.Control
                  name="pic"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.pic}
                  type="text"
                />
              </Form.Group>

              <h6>PARENTS</h6>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Dame</Form.Label>
                <Form.Control
                  name="dame"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.dame}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Sire</Form.Label>
                <Form.Control
                  name="sire"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.sire}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Granddame</Form.Label>
                <Form.Control
                  name="grandDame"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.grandDame}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Grandsire</Form.Label>
                <Form.Control
                  name="grandSire"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.grandSire}
                  type="text"
                />
              </Form.Group>

              <h6>WEIGHT</h6>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Current</Form.Label>
                <Form.Control
                  name="weightCurrent"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weightCurrent}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Sale</Form.Label>
                <Form.Control
                  name="weightSale"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weightSale}
                  type="number"
                />
              </Form.Group>

              <h6>FERTILITY</h6>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Number of Services</Form.Label>
                <Form.Control
                  name="totalService"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.totalService}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Number of Litters</Form.Label>
                <Form.Control
                  name="totalLitters"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.totalLitters}
                  type="number"
                />
              </Form.Group>

              <h6>LITTER</h6>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Number of Kits</Form.Label>
                <Form.Control
                  name="totalKits"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.totalKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Number of Kits Alive</Form.Label>
                <Form.Control
                  name="aliveKits"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.aliveKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Number of Kits Dead</Form.Label>
                <Form.Control
                  name="deadKits"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.deadKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Number Sold</Form.Label>
                <Form.Control
                  name="soldKits"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.soldKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label htmlFor="">Number Butchered</Form.Label>
                <Form.Control
                  name="butcheredKits"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.butcheredKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group className="mb-2 jBetween">
                <Form.Label>STATUS</Form.Label>
                <Form.Select
                  aria-label="STATUS"
                  name="status"
                  className="fif"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.status}
                  type="text"
                >
                  <option>Pick Status</option>
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                  <option value="Dead">Dead</option>
                </Form.Select>
              </Form.Group>
              <ModalFooter>
                <div className="around">
                  <Button
                    // isLoading
                    // loadingText="Adding"
                    className="formButtons"
                    type="submit"
                  >
                    Add
                  </Button>
                  <Button
                    type="buttons"
                    className="formButtons"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </div>
              </ModalFooter>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddAnimal;
