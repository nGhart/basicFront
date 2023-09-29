import React, { useEffect } from 'react';
import AddContact from '../contents/contacts/AddContact.jsx';
import Contacts from '../contents/contacts/Contacts.jsx';
import contactStore from '../stores/contactStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const ContactPage = () => {
  const store = contactStore();

  useEffect(() => {
    store.getContacts();
  }, [store]);
  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Contacts</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddContact />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="tableContainer">
        <Contacts />
      </div>
    </div>
  );
};

export default ContactPage;
