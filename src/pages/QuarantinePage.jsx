import React, { useEffect } from 'react';
import AddQuarantine from '../contents/quarantine/AddQuarantine';
import Quarantines from '../contents/quarantine/Quarantines';
import quarantineStore from '../stores/quarantineStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const QuarantinePage = () => {
  const store = quarantineStore();

  useEffect(() => {
    store.getQuarantines();
  }, [store]);
  return (
    <div style={{ marginTop: '10px', height: '100%' }}>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(47, 137, 118)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="font4">Quarantine Records</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddQuarantine />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <div>
            <Quarantines />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default QuarantinePage;
