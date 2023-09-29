import { create } from 'zustand';
import axios from 'axios';

const invoiceStore = create((set) => ({
  invoices: null,
  createInvoice: {
    clientName: '',
    clientEmail: '',
    clientNumber: '',
    buckPrice: '',
    clientBuckCount: '',
    doePrice: '',
    clientDoeCount: '',
    kitPrice: '',
    clientKitCount: '',
    manurePrice: '',
    clientManureCount: '',
  },
  updateFormInvoice: {
    clientName: '',
    clientEmail: '',
    clientNumber: '',
    buckPrice: '',
    clientBuckCount: '',
    doePrice: '',
    clientDoeCount: '',
    kitPrice: '',
    clientKitCount: '',
    manurePrice: '',
    clientManureCount: '',
    _id: null,
  },

  getInvoices: async () => {
    try {
      const response = await axios.get('/invoices');
      set({ invoices: response.data.invoices });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateInvoices: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createInvoice: {
            ...state.createInvoice,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddInvoice: async (e) => {
    try {
      e.preventDefault();
      const { createInvoice, invoices } = invoiceStore.getState();
      const response = await axios.post('/invoices', createInvoice);
      set({
        invoices: [...invoices, response.data.invoice],
        createInvoice: {
          clientName: '',
          clientEmail: '',
          clientNumber: '',
          buckPrice: '',
          clientBuckCount: '',
          doePrice: '',
          clientDoeCount: '',
          kitPrice: '',
          clientKitCount: '',
          manurePrice: '',
          clientManureCount: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteInvoice: async (_id) => {
    try {
      const response = await axios.delete(`/invoices/${_id}`);
      const { invoices } = invoiceStore.getState();

      const newInvoices = invoices.filter((item) => {
        return item._id !== _id;
      });
      set({ invoices: newInvoices });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdateInvoice: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormInvoice: {
            ...state.updateFormInvoice,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editInvoice: (item) => {
    try {
      set({
        updateFormInvoice: {
          clientName: item.clientName,
          clientEmail: item.clientEmail,
          clientNumber: item.clientNumber,
          buckPrice: item.buckPrice,
          clientBuckCount: item.clientBuckCount,
          doePrice: item.doePrice,
          clientDoeCount: item.clientDoeCount,
          kitPrice: item.kitPrice,
          clientKitCount: item.clientKitCount,
          manurePrice: item.manurePrice,
          clientManureCount: item.clientManureCount,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateInvoice: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormInvoice: {
          clientName,
          clientEmail,
          clientNumber,
          buckPrice,
          clientBuckCount,
          doePrice,
          clientDoeCount,
          kitPrice,
          clientKitCount,
          manurePrice,
          clientManureCount,
          _id,
        },
        invoices,
      } = invoiceStore.getState();
      const response = await axios.put(`/invoices/${_id}`, {
        clientName,
        clientEmail,
        clientNumber,
        buckPrice,
        clientBuckCount,
        doePrice,
        clientDoeCount,
        kitPrice,
        clientKitCount,
        manurePrice,
        clientManureCount,
      });

      const newInvoices = [...invoices];
      const invoiceIndex = invoices.findIndex((item) => {
        return item._id === _id;
      });
      newInvoices[invoiceIndex] = response.data.invoice;

      set({
        invoices: newInvoices,
        updateFormInvoice: {
          clientName: '',
          clientEmail: '',
          clientNumber: '',
          buckPrice: '',
          clientBuckCount: '',
          doePrice: '',
          clientDoeCount: '',
          kitPrice: '',
          clientKitCount: '',
          manurePrice: '',
          clientManureCount: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default invoiceStore;
