import React, { useEffect } from 'react';
import transactionStore from '../stores/transactionStore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

const TransactionSummary = () => {
  const store = transactionStore();

  useEffect(() => {
    store.getTransactions();
  }, [store.transactions]);

  useEffect(() => {
    if (store.transactions) {
      const totalIncome = store.transactions.reduce((total, transaction) => {
        return transaction.transactionType === 'Income'
          ? total + parseFloat(transaction.price)
          : total;
      }, 0);

      const totalExpenses = store.transactions.reduce((total, transaction) => {
        return transaction.transactionType === 'Expense'
          ? total + parseFloat(transaction.price)
          : total;
      }, 0);

      const balance = totalIncome - totalExpenses;

      store.set((state) => ({
        totalIncomeAndExpenses: {
          ...state.totalIncomeAndExpenses,
          totalIncome: totalIncome.toFixed(2),
          totalExpenses: totalExpenses.toFixed(2),
          balance: balance.toFixed(2),
        },
      }));
    }
  }, [store.transactions]);
  return (
    <>
      <Container>
        <h3 className="font2">Financial Summary</h3>
        <Row>
          <Stack gap={3}>
            <div
              className="p-2 font1 homeBack"
              style={{
                textAlign: 'center',
                display: 'flex',
                //width: '100%',
                height: '50px',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '5px',
              }}
            >
              <h6>
                Balance GHC{' '}
                <span
                  style={{
                    color: `${
                      store.totalIncomeAndExpenses.balance < 0 ? 'red' : 'black'
                    }`,
                  }}
                >
                  {store.totalIncomeAndExpenses.balance}
                </span>
              </h6>
              <h6>
                Income GHC{' '}
                <span
                  style={{
                    color: 'green',
                    fontWeight: '700',
                  }}
                >
                  {store.totalIncomeAndExpenses.totalIncome}
                </span>
              </h6>
              <h6>
                Expense GHC{' '}
                <span
                  style={{
                    color: 'red',
                    fontWeight: '700',
                  }}
                >
                  {store.totalIncomeAndExpenses.totalExpenses}
                </span>
              </h6>
            </div>
          </Stack>
        </Row>
      </Container>
    </>
  );
};

export default TransactionSummary;
