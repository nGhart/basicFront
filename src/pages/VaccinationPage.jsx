import React, { useEffect } from 'react';
import AddVaccination from '../contents/vaccination/AddVaccination';
import Vaccinations from '../contents/vaccination/Vaccinations';
import vaccinationStore from '../stores/vaccinationStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const VaccinationPage = () => {
  const store = vaccinationStore();

  useEffect(() => {
    store.getVaccinations();
  }, [store]);
  return (
    <div style={{ marginTop: '10px', height: '100%' }}>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(47, 137, 118)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="font4">Vaccination Records</h1>{' '}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddVaccination />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <div>
            <Vaccinations />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default VaccinationPage;
