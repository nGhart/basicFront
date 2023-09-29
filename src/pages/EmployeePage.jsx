import React, { useEffect } from 'react';
import AddEmployee from '../contents/employees/AddEmployee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Employees from '../contents/employees/EmployeeList';
import employeeStore from '../stores/employeeStore';

const EmployeePage = () => {
  const store = employeeStore();
  useEffect(() => {
    store.getEmployees();
  }, [store]);
  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand>
              <h1 className="title">Employee Records</h1>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <AddEmployee />
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div
        className="tableContainer"
        //style={{ width: '100%' }}
      >
        <Employees />
      </div>
    </div>
  );
};

export default EmployeePage;
