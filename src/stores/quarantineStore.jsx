import { create } from 'zustand';
import axios from 'axios';

const quarantineStore = create((set) => ({
  quarantines: null,
  createQuarantine: {
    animal: '',
    condition: '',
    outcome: '',
    startDate: '',
    endDate: '',
  },
  updateFormQuarantine: {
    animal: '',
    condition: '',
    outcome: '',
    startDate: '',
    endDate: '',
    _id: null,
  },

  getQuarantines: async () => {
    try {
      const response = await axios.get('/quarantines');
      set({ quarantines: response.data.quarantines });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateQuarantines: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createQuarantine: {
            ...state.createQuarantine,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },

  handleAddQuarantine: async (e) => {
    try {
      e.preventDefault();
      const { createQuarantine, quarantines } = quarantineStore.getState();
      const response = await axios.post('/quarantines', createQuarantine);
      set({
        quarantines: [...quarantines, response.data.quarantine],
        createQuarantine: {
          animal: '',
          condition: '',
          outcome: '',
          startDate: '',
          endDate: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteQuarantine: async (_id) => {
    try {
      const response = await axios.delete(`/quarantines/${_id}`);
      const { quarantines } = quarantineStore.getState();

      const newQuarantines = quarantines.filter((item) => {
        return item._id !== _id;
      });
      set({ quarantines: newQuarantines });
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdateQuarantine: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormQuarantine: {
            ...state.updateFormQuarantine,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editQuarantine: (item) => {
    try {
      set({
        updateFormQuarantine: {
          animal: item.animal,
          condition: item.condition,
          outcome: item.outcome,
          startDate: item.startDate,
          endDate: item.endDate,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateQuarantine: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormQuarantine: {
          animal,
          condition,
          outcome,
          startDate,
          endDate,
          _id,
        },
        quarantines,
      } = quarantineStore.getState();
      const response = await axios.put(`/quarantines/${_id}`, {
        animal,
        condition,
        outcome,
        startDate,
        endDate,
      });

      const newQuarantines = [...quarantines];
      const quarantineIndex = quarantines.findIndex((item) => {
        return item._id === _id;
      });
      newQuarantines[quarantineIndex] = response.data.quarantine;

      set({
        quarantines: newQuarantines,
        updateFormQuarantine: {
          animal: '',
          condition: '',
          outcome: '',
          startDate: '',
          endDate: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default quarantineStore;
