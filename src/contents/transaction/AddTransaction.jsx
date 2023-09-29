import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import transactionStore from '../../stores/transactionStore';

const AddTransaction = () => {
  const store = transactionStore();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="addButtons" onClick={handleShow}>
        Add New Entry
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Add Transaction</Modal.Header>
        <Form
          style={{
            width: '100%',
            minHeight: '300px',
            margin: '5px',
            padding: '10px',
          }}
          onSubmit={store.handleAddTransaction}
        >
          <Form.Group>
            <Form.Label>Transaction Type *</Form.Label>
            <Form.Check
              inline
              required
              label="Expense"
              name="transactionType"
              type="radio"
              id="Expense"
              value="Expense"
              checked={store.createTransaction.transactionType === 'Expense'}
              onChange={store.updateCreateTransactions}
            />
            <Form.Check
              inline
              required
              label="Income"
              name="transactionType"
              type="radio"
              id="Income"
              value="Income"
              checked={store.createTransaction.transactionType === 'Income'}
              onChange={store.updateCreateTransactions}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicDate"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Date *
            </Form.Label>
            <Form.Control
              required
              type="date"
              name="date"
              value={store.createTransaction.date}
              onChange={store.updateCreateTransactions}
            ></Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicExpense"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Description *
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Description"
              maxLength={20}
              name="name"
              value={store.createTransaction.name}
              onChange={store.updateCreateTransactions}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleFormCategory"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Category *
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              type="text"
              required
              onChange={store.updateCreateTransactions}
              name="category"
              value={store.createTransaction.category}
            >
              <option> Choose Category</option>
              <option></option>
              <option>EXPENSE</option>
              <option value="Repairs">Repairs</option>
              <option value="Transport">Transport</option>
              <option value="Feed">Feed</option>
              <option value="Utilities">Utilities</option>
              <option value="Equipment">Equipment</option>
              <option value="Health">Health</option>
              <option value="Salary">Salary</option>
              <option value="Loans">Loans</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option></option>
              <option>INCOME</option>
              <option value="Animal Sales">Animal Sales</option>
              <option value="Manure Sales">Manure Sales</option>
              <option value="Meat Sales">Meat Sales</option>
              <option value="Other Income">Other Income</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlAmount"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Amount *
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              onChange={store.updateCreateTransactions}
              name="price"
              value={store.createTransaction.price}
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlPayment"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Payment Method
            </Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Cash"
                name="payment"
                type="radio"
                id="cash"
                value="Cash"
                checked={store.createTransaction.payment === 'Cash'}
                onChange={store.updateCreateTransactions}
              />
              <Form.Check
                inline
                label="Card"
                name="payment"
                type="radio"
                id="card"
                value="Card"
                checked={store.createTransaction.payment === 'Card'}
                onChange={store.updateCreateTransactions}
              />
              <Form.Check
                inline
                label="Mobile Money"
                name="payment"
                value="Mobile Money"
                type="radio"
                id="mobileMoney"
                checked={store.createTransaction.payment === 'Mobile Money'}
                onChange={store.updateCreateTransactions}
              />
            </div>
          </Form.Group>
          <Form.Group
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              border: 'none',
            }}
          ></Form.Group>
          <div className="formButtonsContainer">
            <button type="submit" className="formButtons">
              <span>Add</span>
            </button>
            <button className="formButtons" type="button" onClick={handleClose}>
              <span>Close</span>
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddTransaction;
