import { create } from 'zustand';
import axios from 'axios';

const vaccinationStore = create((set) => ({
  vaccinations: null,
  createVaccination: {
    medication: '',
    date: '',
    nextDate: '',
  },
  updateFormVaccination: {
    medication: '',
    date: '',
    nextDate: '',
    _id: null,
  },

  getVaccinations: async () => {
    try {
      const response = await axios.get('/vaccinations');
      set({ vaccinations: response.data.vaccinations });
    } catch (error) {
      console.log(error.mes);
    }
  },
  updateCreateVaccinations: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createVaccination: {
            ...state.createVaccination,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },

  handleAddVaccination: async (e) => {
    try {
      e.preventDefault();
      const { createVaccination, vaccinations } = vaccinationStore.getState();
      const response = await axios.post('/vaccinations', createVaccination);
      set({
        vaccinations: [...vaccinations, response.data.vaccination],
        createVaccination: {
          medication: '',
          date: '',
          nextDate: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteVaccination: async (_id) => {
    try {
      const response = await axios.delete(`/vaccinations/${_id}`);
      const { vaccinations } = vaccinationStore.getState();

      const newVaccinations = vaccinations.filter((item) => {
        return item._id !== _id;
      });
      set({ vaccinations: newVaccinations });
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdateVaccination: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormVaccination: {
            ...state.updateFormVaccination,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editVaccination: (item) => {
    try {
      set({
        updateFormVaccination: {
          medication: item.medication,
          date: item.date,
          nextDate: item.nextDate,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateVaccination: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormVaccination: { medication, date, nextDate, _id },
        vaccinations,
      } = vaccinationStore.getState();
      const response = await axios.put(`/vaccinations/${_id}`, {
        medication,
        date,
        nextDate,
      });

      const newVaccinations = [...vaccinations];
      const vaccinationIndex = vaccinations.findIndex((item) => {
        return item._id === _id;
      });
      newVaccinations[vaccinationIndex] = response.data.vaccination;

      set({
        vaccinations: newVaccinations,
        updateFormVaccination: {
          medication: '',
          date: '',
          nextDate: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default vaccinationStore;
