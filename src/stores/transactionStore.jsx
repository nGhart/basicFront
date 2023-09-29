import { create } from 'zustand';
import axios from 'axios';

const transactionStore = create((set) => ({
  transactions: null,
  createTransaction: {
    name: '',
    category: '',
    price: '',
    payment: '',
    transactionType: '',
    date: '',
  },
  updateFormTransaction: {
    name: '',
    category: '',
    price: '',
    payment: '',
    transactionType: '',
    date: '',
    _id: null,
  },
  set: (newState) => set(newState),
  totalIncomeAndExpenses: {
    totalIncome: 0,
    totalExpenses: 0,
    balance: 0,
  },
  incomeByCategory: [],
  expensesByCategory: [],
  getTransactions: async () => {
    try {
      const response = await axios.get('/transactions');
      set({ transactions: response.data.transactions });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateTransactions: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createTransaction: {
            ...state.createTransaction,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddTransaction: async (e) => {
    try {
      e.preventDefault();
      const { createTransaction, transactions } = transactionStore.getState();
      const response = await axios.post('/transactions', createTransaction);
      set({
        transactions: [...transactions, response.data.transaction],
        createTransaction: {
          name: '',
          category: '',
          price: '',
          payment: '',
          transactionType: '',
          date: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteTransaction: async (_id) => {
    try {
      const response = await axios.delete(`/transactions/${_id}`);
      const { transactions } = transactionStore.getState();

      const newTransactions = transactions.filter((item) => {
        return item._id !== _id;
      });
      set({ transactions: newTransactions });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdateTransaction: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormTransaction: {
            ...state.updateFormTransaction,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editTransaction: (item) => {
    try {
      set({
        updateFormTransaction: {
          name: item.name,
          category: item.category,
          price: item.price,
          payment: item.payment,
          transactionType: item.transactionType,
          date: item.date,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateTransaction: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormTransaction: {
          name,
          category,
          price,
          payment,
          transactionType,
          date,
          _id,
        },
        transactions,
      } = transactionStore.getState();
      const response = await axios.put(`/transactions/${_id}`, {
        name,
        category,
        price,
        payment,
        transactionType,
        date,
      });

      const newTransactions = [...transactions];
      const transactionIndex = transactions.findIndex((item) => {
        return item._id === _id;
      });
      newTransactions[transactionIndex] = response.data.transaction;

      set({
        transactions: newTransactions,
        updateFormTransaction: {
          name: '',
          category: '',
          price: '',
          payment: '',
          transactionType: '',
          date: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  processTransactions: () => {
    const { transactions } = transactionStore.getState();

    if (!transactions) return;

    const incomeByCategory = {};
    const expensesByCategory = {};

    transactions.forEach((transaction) => {
      const { transactionType, category, price } = transaction;
      const amount = parseFloat(price);

      if (transactionType === 'Income') {
        if (!incomeByCategory[category]) {
          incomeByCategory[category] = amount;
        } else {
          incomeByCategory[category] += amount;
        }
      } else if (transactionType === 'Expense') {
        if (!expensesByCategory[category]) {
          expensesByCategory[category] = amount;
        } else {
          expensesByCategory[category] += amount;
        }
      }
    });

    const incomeCategories = Object.keys(incomeByCategory).map((category) => ({
      category,
      total: incomeByCategory[category],
    }));

    const expenseCategories = Object.keys(expensesByCategory).map(
      (category) => ({
        category,
        total: expensesByCategory[category],
      })
    );

    set({
      incomeByCategory: incomeCategories,
      expensesByCategory: expenseCategories,
    });
  },
}));
export default transactionStore;
