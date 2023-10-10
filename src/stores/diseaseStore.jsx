import { create } from 'zustand';
import axios from 'axios';

const diseaseStore = create((set) => ({
  diseases: null,
  createDisease: {
    diseaseAnimal: '',
    diseaseCondition: '',
    diseaseManagement: '',
    diseaseDuration: '',
    diseaseOutcome: '',
    diseaseDate: '',
  },
  updateFormDisease: {
    diseaseAnimal: '',
    diseaseCondition: '',
    diseaseManagement: '',
    diseaseDuration: '',
    diseaseOutcome: '',
    diseaseDate: '',
    _id: null,
  },

  getDiseases: async () => {
    try {
      const response = await axios.get('/diseases');
      set({ diseases: response.data.diseases });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateDiseases: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createDisease: {
            ...state.createDisease,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },

  handleAddDisease: async (e) => {
    try {
      e.preventDefault();
      const { createDisease, diseases } = diseaseStore.getState();
      const response = await axios.post('/diseases', createDisease);
      set({
        diseases: [...diseases, response.data.disease],
        createDisease: {
          diseaseAnimal: '',
          diseaseCondition: '',
          diseaseManagement: '',
          diseaseDuration: '',
          diseaseOutcome: '',
          diseaseDate: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteDisease: async (_id) => {
    try {
      const response = await axios.delete(`/diseases/${_id}`);
      const { diseases } = diseaseStore.getState();

      const newDiseases = diseases.filter((item) => {
        return item._id !== _id;
      });
      set({ diseases: newDiseases });
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdateDisease: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormDisease: {
            ...state.updateFormDisease,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editDisease: (item) => {
    try {
      set({
        updateFormDisease: {
          diseaseAnimal: item.diseaseAnimal,
          diseaseCondition: item.diseaseCondition,
          diseaseManagement: item.diseaseManagement,
          diseaseDuration: item.diseaseDuration,
          diseaseOutcome: item.diseaseOutcome,
          diseaseDate: item.diseaseDate,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateDisease: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormDisease: {
          diseaseAnimal,
          diseaseCondition,
          diseaseManagement,
          diseaseDuration,
          diseaseOutcome,
          diseaseDate,
          _id,
        },
        diseases,
      } = diseaseStore.getState();
      const response = await axios.put(`/diseases/${_id}`, {
        diseaseAnimal,
        diseaseCondition,
        diseaseManagement,
        diseaseDuration,
        diseaseOutcome,
        diseaseDate,
      });

      const newDiseases = [...diseases];
      const diseaseIndex = diseases.findIndex((item) => {
        return item._id === _id;
      });
      newDiseases[diseaseIndex] = response.data.disease;

      set({
        diseases: newDiseases,
        updateFormDisease: {
          diseaseAnimal: '',
          diseaseCondition: '',
          diseaseManagement: '',
          diseaseDuration: '',
          diseaseOutcome: '',
          diseaseDate: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default diseaseStore;
