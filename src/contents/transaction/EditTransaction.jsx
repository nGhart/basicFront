import React from 'react';
import Form from 'react-bootstrap/Form';

const EditTransaction = ({
  updateTransaction,
  handleUpdateTransaction,
  updateFormTransaction,
  handleCloseModal,
}) => {
  return (
    <>
      <Form
        style={{
          width: '100%',
          minHeight: '300px',
          margin: '5px',
          padding: '10px',
        }}
        onSubmit={updateTransaction}
      >
        <Form.Group>
          <Form.Label>Transaction Type *</Form.Label>
          <Form.Check
            inline
            label="Expense"
            name="transactionType"
            type="radio"
            id="Expense"
            value="Expense"
            checked={updateFormTransaction.transactionType === 'Expense'}
            onChange={handleUpdateTransaction}
          />
          <Form.Check
            inline
            label="Income"
            name="transactionType"
            type="radio"
            id="Income"
            value="Income"
            checked={updateFormTransaction.transactionType === 'Income'}
            onChange={handleUpdateTransaction}
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
            type="date"
            name="date"
            value={updateFormTransaction.date}
            onChange={handleUpdateTransaction}
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
            type="text"
            placeholder="Enter Description"
            maxLength={20}
            name="name"
            value={updateFormTransaction.name}
            onChange={handleUpdateTransaction}
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
            aria-label="Category"
            type="text"
            onChange={handleUpdateTransaction}
            name="category"
            value={updateFormTransaction.category}
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
            onChange={handleUpdateTransaction}
            name="price"
            value={updateFormTransaction.price}
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
              checked={updateFormTransaction.payment === 'Cash'}
              onChange={handleUpdateTransaction}
            />
            <Form.Check
              inline
              label="Card"
              name="payment"
              type="radio"
              id="card"
              value="Card"
              checked={updateFormTransaction.payment === 'Card'}
              onChange={handleUpdateTransaction}
            />
            <Form.Check
              inline
              label="Mobile Money"
              name="payment"
              value="Mobile Money"
              type="radio"
              id="mobileMoney"
              checked={updateFormTransaction.payment === 'Mobile Money'}
              onChange={handleUpdateTransaction}
            />
          </div>
        </Form.Group>
        <Form.Group
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <div className="formButtonsContainer">
            <button className="formButtons" type="submit">
              Save
            </button>
            <button
              className="formButtons"
              type="button"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};

export default EditTransaction;
