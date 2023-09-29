import React, { useEffect } from 'react';
import AddTransaction from '../contents/transaction/AddTransaction';
import Transactions from '../contents/transaction/Transactions';
import transactionStore from '../stores/transactionStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const TransactionPage = () => {
  const store = transactionStore();

  useEffect(() => {
    store.getTransactions();
  }, [store]);

  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <h1 className="title">Transactions</h1>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddTransaction />
                <Link to="/category">
                  <button className="addButtons">See Summary</button>
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="tableContainer">
        <Transactions />
      </div>
    </div>
  );
};

export default TransactionPage;
