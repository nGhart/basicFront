import React, { useEffect } from 'react';
import AddInventory from '../contents/inventory/AddInventory';
import Inventories from '../contents/inventory/Inventories';
import inventoryStore from '../stores/inventoryStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const InventoryPage = () => {
  const store = inventoryStore();

  useEffect(() => {
    store.getInventories();
  }, [store]);

  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Inventory</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddInventory />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="tableContainer">
        <Inventories />
      </div>
    </div>
  );
};

export default InventoryPage;
