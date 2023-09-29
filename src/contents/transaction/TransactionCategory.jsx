import React, { useEffect } from 'react';
import transactionStore from '../../stores/transactionStore';

const TransactionCategory = () => {
  const store = transactionStore();

  useEffect(() => {
    store.getTransactions();
  }, [store]);

  useEffect(() => {
    if (store.transactions) {
      store.processTransactions();
    }
  }, [store]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          border: '3px outset rgb(26, 44, 40)',
          width: '600px',
        }}
      >
        <h1 className="font4" style={{ textAlign: 'center' }}>
          Transaction Summary
        </h1>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div className="Income">
            <h2 className="font5">Income</h2>
            <ul>
              {store.incomeByCategory.map((category) => (
                <li key={category.category}>
                  {category.category}: {category.total} GHC
                </li>
              ))}
            </ul>
          </div>
          <div className="expenses">
            <h2 className="font5">Expenses</h2>
            <ul>
              {store.expensesByCategory.map((category) => (
                <li key={category.category}>
                  {category.category}: {category.total} GHC
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCategory;
