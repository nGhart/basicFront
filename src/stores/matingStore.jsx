import { create } from 'zustand';
import axios from 'axios';

const matingStore = create((set) => ({
  matings: null,
  createMating: {
    matingDoe: '',
    matingBuck: '',
    matingDate1: '',
    matingDate2: '',
    nesting: '',
    kindling: '',
    status: '',
  },
  updateFormMating: {
    matingDoe: '',
    matingBuck: '',
    matingDate1: '',
    matingDate2: '',
    nesting: '',
    kindling: '',
    status: '',
    _id: null,
  },

  getMatings: async () => {
    try {
      const response = await axios.get('/matings');
      set({ matings: response.data.matings });
    } catch (error) {
      console.log(error);
    }
  },

  updateCreateMatings: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createMating: {
            ...state.createMating,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddMating: async (e) => {
    try {
      e.preventDefault();
      const { createMating, matings } = matingStore.getState();
      const response = await axios.post('/matings', createMating);
      set({
        matings: [...matings, response.data.mating],
        createMating: {
          matingDoe: '',
          matingBuck: '',
          matingDate1: '',
          matingDate2: '',
          nesting: '',
          kindling: '',
          status: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteMating: async (_id) => {
    try {
      const response = await axios.delete(`/matings/${_id}`);
      const { matings } = matingStore.getState();

      const newMatings = matings.filter((item) => {
        return item._id !== _id;
      });
      set({ matings: newMatings });
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdateMating: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormMating: {
            ...state.updateFormMating,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editMating: (item) => {
    try {
      set({
        updateFormMating: {
          matingDoe: item.matingDoe,
          matingBuck: item.matingBuck,
          matingDate1: item.matingDate1,
          matingDate2: item.matingDate2,
          nesting: item.nesting,
          kindling: item.kindling,
          status: item.status,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateMating: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormMating: {
          matingDoe,
          matingBuck,
          matingDate1,
          matingDate2,
          nesting,
          kindling,
          status,
          _id,
        },
        matings,
      } = matingStore.getState();
      const response = await axios.put(`/matings/${_id}`, {
        matingDoe,
        matingBuck,
        matingDate1,
        matingDate2,
        nesting,
        status,
        kindling,
      });

      const newMatings = [...matings];
      const matingIndex = matings.findIndex((item) => {
        return item._id === _id;
      });
      newMatings[matingIndex] = response.data.mating;

      set({
        matings: newMatings,
        updateFormMating: {
          matingDoe: '',
          matingBuck: '',
          matingDate1: '',
          matingDate2: '',
          nesting: '',
          kindling: '',
          status: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default matingStore;
