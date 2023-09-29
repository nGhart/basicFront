import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import SingleTransaction from './SingleTransaction';
import transactionStore from '../../stores/transactionStore';
import Stack from 'react-bootstrap/Stack';

const Transactions = () => {
  const store = transactionStore();

  useEffect(() => {
    store.getTransactions();
  }, [store]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactions = store.transactions || [];
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = transactions.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(transactions.length / itemsPerPage);
  const numbers = [...Array(noPages).keys()].map((item) => item + 1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== noPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }
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
      <Stack gap={3}>
        <div
          className="p-2 font4"
          style={{
            textAlign: 'center',
            display: 'flex',
            width: '100%',
            height: '50px',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            backgroundColor: 'rgb(47, 137, 118)',
          }}
        >
          <h4>
            Balance GHC{' '}
            <span
              style={{
                color: `${
                  store.totalIncomeAndExpenses.balance < 0 ? 'red' : 'black'
                }`,
                fontFamily: 'Carter One',
              }}
            >
              {store.totalIncomeAndExpenses.balance}
            </span>
          </h4>
          <h5>
            Income GHC{' '}
            <span
              style={{
                color: 'green',
                fontWeight: '700',
                fontFamily: 'Carter One',
              }}
            >
              {store.totalIncomeAndExpenses.totalIncome}
            </span>
          </h5>
          <h5>
            Expense GHC{' '}
            <span
              className="font3"
              style={{
                color: 'red',
                fontWeight: '700',
                fontFamily: 'Carter One',
              }}
            >
              {store.totalIncomeAndExpenses.totalExpenses}
            </span>
          </h5>
        </div>
      </Stack>
      <div className="tableSection" style={{ width: '100%' }}>
        <Row
          style={{
            margin: 'auto',
            marginTop: '5px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {itemsShown.map((item) => {
            return <SingleTransaction key={item._id} item={item} />;
          })}
        </Row>
        <div
          style={{
            display: 'flex',
            width: '100%',
            position: 'absolute',
            bottom: '10%',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <Pagination>
            <Pagination.Item>
              <i onClick={prevPage} style={{ color: 'black' }}>
                Prev
              </i>
            </Pagination.Item>
            {numbers.map((item) => (
              <Pagination.Item
                key={item}
                className={`${currentPage === item ? 'activePage' : ''}`}
              >
                <i onClick={() => changePage(item)} style={{ color: 'black' }}>
                  {item}
                </i>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <i onClick={nextPage} style={{ color: 'black' }}>
                Next
              </i>
            </Pagination.Item>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Transactions;
