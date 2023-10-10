import { create } from 'zustand';
import axios from 'axios';

const animalStore = create((set) => ({
  //states
  animals: null,
  createAnimal: {
    name: '',
    sex: '',
    dob: '',
    bred: '',
    breed: '',
    description: '',
    dame: '',
    sire: '',
    grandDame: '',
    grandSire: '',
    weightCurrent: '',
    weightSale: '',
    totalService: '',
    totalLitters: '',
    totalKits: '',
    aliveKits: '',
    deadKits: '',
    soldKits: '',
    butcheredKits: '',
    pic: '',
    status: '',
  },
  updateForm: {
    name: '',
    sex: '',
    dob: '',
    bred: '',
    breed: '',
    description: '',
    dame: '',
    sire: '',
    grandDame: '',
    grandSire: '',
    weightCurrent: '',
    weightSale: '',
    totalService: '',
    totalLitters: '',
    totalKits: '',
    aliveKits: '',
    deadKits: '',
    soldKits: '',
    butcheredKits: '',
    pic: '',
    status: '',
    _id: null,
  },
  animalSex: [],
  //functions
  getAnimals: async () => {
    try {
      const response = await axios.get('/animals');
      set({ animals: response.data.animals });
    } catch (error) {
      console.log(error);
    }
  },

  updateCreateAnimals: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createAnimal: {
            ...state.createAnimal,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddAnimal: async (e) => {
    try {
      e.preventDefault();
      const { createAnimal, animals } = animalStore.getState();
      const response = await axios.post('/animals', createAnimal);
      set({
        animals: [...animals, response.data.animal],
        createAnimal: {
          name: '',
          sex: '',
          dob: '',
          bred: '',
          breed: '',
          description: '',
          dame: '',
          sire: '',
          grandDame: '',
          grandSire: '',
          weightCurrent: '',
          weightSale: '',
          totalService: '',
          totalLitters: '',
          totalKits: '',
          aliveKits: '',
          deadKits: '',
          soldKits: '',
          butcheredKits: '',
          pic: '',
          status: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteAnimal: async (_id) => {
    try {
      const response = await axios.delete(`/animals/${_id}`);
      const { animals } = animalStore.getState();

      const newAnimals = animals.filter((item) => {
        return item._id !== _id;
      });
      set({ animals: newAnimals });
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdate: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateForm: {
            ...state.updateForm,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editAnimal: (item) => {
    try {
      set({
        updateForm: {
          name: item.name,
          sex: item.sex,
          dob: item.dob,
          bred: item.bred,
          breed: item.breed,
          description: item.description,
          dame: item.dame,
          sire: item.sire,
          grandDame: item.grandDame,
          grandSire: item.grandSire,
          weightCurrent: item.weightCurrent,
          weightSale: item.weightSale,
          totalService: item.totalService,
          totalLitters: item.totalLitters,
          totalKits: item.totalKits,
          aliveKits: item.aliveKits,
          deadKits: item.deadKits,
          soldKits: item.soldKits,
          butcheredKits: item.butcheredKits,
          pic: item.pic,
          status: item.status,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateAnimal: async (e) => {
    try {
      e.preventDefault();
      const {
        updateForm: {
          name,
          sex,
          dob,
          bred,
          breed,
          description,
          dame,
          sire,
          grandDame,
          grandSire,
          weaning,
          weightWean,
          weight8,
          weightCurrent,
          weightSale,
          firstService,
          totalService,
          totalLitters,
          totalKits,
          aliveKits,
          deadKits,
          soldKits,
          butcheredKits,
          pic,
          status,
          _id,
        },
        animals,
      } = animalStore.getState();
      const response = await axios.put(`/animals/${_id}`, {
        name,
        sex,
        dob,
        bred,
        breed,
        description,
        dame,
        sire,
        grandDame,
        grandSire,
        weaning,
        weightWean,
        weight8,
        weightCurrent,
        weightSale,
        firstService,
        totalService,
        totalLitters,
        totalKits,
        aliveKits,
        deadKits,
        soldKits,
        butcheredKits,
        status,
        pic,
      });

      const newAnimals = [...animals];
      const animalIndex = animals.findIndex((item) => {
        return item._id === _id;
      });
      newAnimals[animalIndex] = response.data.animal;

      set({
        animals: newAnimals,
        updateForm: {
          name: '',
          sex: '',
          dob: '',
          bred: '',
          breed: '',
          description: '',
          dame: '',
          sire: '',
          grandDame: '',
          grandSire: '',
          weightCurrent: '',
          weightSale: '',
          totalService: '',
          totalLitters: '',
          totalKits: '',
          aliveKits: '',
          deadKits: '',
          soldKits: '',
          butcheredKits: '',
          pic: '',
          status: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default animalStore;
