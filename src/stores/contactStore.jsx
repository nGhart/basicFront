import { create } from 'zustand';
import axios from 'axios';

const contactStore = create((set) => ({
  contacts: null,
  createContact: {
    contactName: '',
    contactNumber: '',
    contactEmail: '',
    contactGroup: '',
  },
  updateFormContact: {
    contactName: '',
    contactNumber: '',
    contactEmail: '',
    contactGroup: '',
    _id: null,
  },

  getContacts: async () => {
    try {
      const response = await axios.get('/contacts');
      set({ contacts: response.data.contacts });
    } catch (error) {
      console.log(error.message);
    }
  },
  updateCreateContacts: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createContact: {
            ...state.createContact,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleAddContact: async (e) => {
    try {
      e.preventDefault();
      const { createContact, contacts } = contactStore.getState();
      const response = await axios.post('/contacts', createContact);
      set({
        contacts: [...contacts, response.data.contact],
        createContact: {
          contactName: '',
          contactNumber: '',
          contactEmail: '',
          contactGroup: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteContact: async (_id) => {
    try {
      const response = await axios.delete(`/contacts/${_id}`);
      const { contacts } = contactStore.getState();

      const newContacts = contacts.filter((item) => {
        return item._id !== _id;
      });
      set({ contacts: newContacts });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdateContact: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormContact: {
            ...state.updateFormContact,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editContact: (item) => {
    try {
      set({
        updateFormContact: {
          contactName: item.contactName,
          contactNumber: item.contactNumber,
          contactEmail: item.contactEmail,
          contactGroup: item.contactGroup,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateContact: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormContact: {
          contactName,
          contactNumber,
          contactEmail,
          contactGroup,
          _id,
        },
        contacts,
      } = contactStore.getState();
      const response = await axios.put(`/contacts/${_id}`, {
        contactName,
        contactNumber,
        contactEmail,
        contactGroup,
      });

      const newContacts = [...contacts];
      const contactIndex = contacts.findIndex((item) => {
        return item._id === _id;
      });
      newContacts[contactIndex] = response.data.contact;

      set({
        contacts: newContacts,
        updateFormContact: {
          contactName: '',
          contactNumber: '',
          contactEmail: '',
          contactGroup: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
}));
export default contactStore;
