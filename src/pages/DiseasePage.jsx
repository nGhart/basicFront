import React, { useEffect } from 'react';
import AddDisease from '../contents/disease/AddDisease';
import Diseases from '../contents/disease/Diseases';
import diseaseStore from '../stores/diseaseStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const DiseasePage = () => {
  const store = diseaseStore();

  useEffect(() => {
    store.getDiseases();
  }, [store]);
  return (
    <div style={{ marginTop: '10px', height: '100%' }}>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(47, 137, 118)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="font4">Diseases</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddDisease />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div>
        <Diseases />
      </div>
    </div>
  );
};

export default DiseasePage;
