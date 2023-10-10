import React, { useEffect } from 'react';
import animalStore from '../stores/animalStore';
import Animals from '../contents/animal/Animals';
import AddAnimal from '../contents/animal/AddAnimal';
import '../contents/animal/animal.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AnimalTable = () => {
  const store = animalStore();

  useEffect(() => {
    store.getAnimals();
  }, [store]);

  return (
    <div>
      <header className="headerNav">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Animal Records</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddAnimal />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <div className="tableContainer">
        <Animals />
      </div>
    </div>
  );
};

export default AnimalTable;
