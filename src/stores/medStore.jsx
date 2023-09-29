import { create } from 'zustand';
import axios from 'axios';

const medStore = create((set) => ({
  meds: null,
  createMed: {
    name: '',
    number: '',
    expiryDate: '',
    supplier: '',
  },
  updateFormMed: {
    name: '',
    number: '',
    expiryDate: '',
    supplier: '',
    _id: null,
  },
  getMeds: async () => {
    try {
      const response = await axios.get('/meds');
      set({ meds: response.data.meds });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateMeds: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createMed: {
            ...state.createMed,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddMed: async (e) => {
    try {
      e.preventDefault();
      const { createMed, meds } = medStore.getState();
      const response = await axios.post(
        '/meds',
        createMed
      );
      set({
        meds: [...meds, response.data.med],
        createMed: {
          name: '',
          number: '',
          expiryDate: '',
          supplier: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteMed: async (_id) => {
    try {
      const response = await axios.delete(`/meds/${_id}`);
      const { meds } = medStore.getState();

      const newMeds = meds.filter((item) => {
        return item._id !== _id;
      });
      set({ meds: newMeds });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdateMed: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormMed: {
            ...state.updateFormMed,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editMed: (item) => {
    try {
      set({
        updateFormMed: {
          name: item.name,
          number: item.number,
          expiryDate: item.expiryDate,
          supplier: item.supplier,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateMed: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormMed: { name, number, expiryDate, supplier, _id },
        meds,
      } = medStore.getState();
      const response = await axios.put(`/meds/${_id}`, {
        name,
        number,
        expiryDate,
        supplier,
      });

      const newMeds = [...meds];
      const medIndex = meds.findIndex((item) => {
        return item._id === _id;
      });
      newMeds[medIndex] = response.data.med;

      set({
        meds: newMeds,
        updateFormMed: {
          name: '',
          number: '',
          expiryDate: '',
          supplier: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default medStore;
