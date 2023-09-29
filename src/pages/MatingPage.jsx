import React, { useEffect } from 'react';
import AddMating from '../contents/matingRecords/AddMating';
import Matings from '../contents/matingRecords/Matings';
import matingStore from '../stores/matingStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MatingPage = () => {
  const store = matingStore();

  useEffect(() => {
    store.getMatings();
  }, [store]);
  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Mating Records</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddMating />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="tableContainer">
        <Matings />
      </div>
    </div>
  );
};

export default MatingPage;
