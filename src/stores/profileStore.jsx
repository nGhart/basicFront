import { create } from 'zustand';
import axios from 'axios';

const profileStore = create((set) => ({
  profiles: null,
  createProfile: {
    name: '',
    email: '',
    number1: '',
    number2: '',
    building: '',
    street: '',
    city: '',
    country: '',
    logo: '',
  },
  updateFormProfile: {
    name: '',
    email: '',
    number1: '',
    number2: '',
    building: '',
    street: '',
    city: '',
    country: '',
    logo: '',
    _id: null,
  },

  getProfiles: async () => {
    try {
      const response = await axios.get('/profiles');
      set({ profiles: response.data.profiles });
    } catch (error) {
      console.log(error.message);
    }
  },
  updateCreateProfiles: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createProfile: {
            ...state.createProfile,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddProfile: async (e) => {
    try {
      e.preventDefault();
      const { createProfile, profiles } = profileStore.getState();
      const response = await axios.post('/profiles', createProfile);
      set({
        profiles: [...profiles, response.data.profile],
        createProfile: {
          name: '',
          email: '',
          number1: '',
          number2: '',
          building: '',
          street: '',
          city: '',
          country: '',
          logo: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteProfile: async (_id) => {
    try {
      const response = await axios.delete(`/profiles/${_id}`);
      const { profiles } = profileStore.getState();

      const newProfiles = profiles.filter((item) => {
        return item._id !== _id;
      });
      set({ profiles: newProfiles });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdateProfile: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormProfile: {
            ...state.updateFormProfile,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editProfile: (item) => {
    try {
      set({
        updateFormProfile: {
          name: item.name,
          email: item.email,
          number1: item.number1,
          number2: item.number2,
          building: item.building,
          street: item.street,
          city: item.city,
          country: item.country,
          logo: item.logo,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateProfile: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormProfile: {
          name,
          email,
          number1,
          number2,
          building,
          street,
          city,
          country,
          logo,
          _id,
        },
        profiles,
      } = profileStore.getState();
      const response = await axios.put(`/profiles/${_id}`, {
        name,
        email,
        number1,
        number2,
        building,
        street,
        city,
        country,
        logo,
      });

      const newProfiles = [...profiles];
      const profileIndex = profiles.findIndex((item) => {
        return item._id === _id;
      });
      newProfiles[profileIndex] = response.data.profile;

      set({
        profiles: newProfiles,
        updateFormProfile: {
          name: '',
          email: '',
          number1: '',
          number2: '',
          building: '',
          street: '',
          city: '',
          country: '',
          logo: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default profileStore;
