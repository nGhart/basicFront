import { create } from 'zustand';
import axios from 'axios';

const inventoryStore = create((set) => ({
  inventories: null,
  createInventory: {
    inventoryName: '',
    inventoryNumber: '',
    inventoryDate: '',
    inventoryPrice: '',
    inventorySalePrice: '',
  },
  updateFormInventory: {
    inventoryName: '',
    inventoryNumber: '',
    inventoryDate: '',
    inventoryPrice: '',
    inventorySalePrice: '',
    _id: null,
  },

  getInventories: async () => {
    try {
      const response = await axios.get('/inventories');
      set({ inventories: response.data.inventories });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateInventories: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createInventory: {
            ...state.createInventory,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },

  handleAddInventory: async (e) => {
    try {
      e.preventDefault();
      const { createInventory, inventories } = inventoryStore.getState();
      const response = await axios.post('/inventories', createInventory);
      set({
        inventories: [...inventories, response.data.inventory],
        createInventory: {
          inventoryName: '',
          inventoryNumber: '',
          inventoryDate: '',
          inventoryPrice: '',
          inventorySalePrice: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteInventory: async (_id) => {
    try {
      const response = await axios.delete(`/inventories/${_id}`);
      const { inventories } = inventoryStore.getState();

      const newInventories = inventories.filter((item) => {
        return item._id !== _id;
      });
      set({ inventories: newInventories });
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdateInventory: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormInventory: {
            ...state.updateFormInventory,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editInventory: (item) => {
    try {
      set({
        updateFormInventory: {
          inventoryName: item.inventoryName,
          inventoryNumber: item.inventoryNumber,
          inventoryDate: item.inventoryDate,
          inventoryPrice: item.inventoryPrice,
          inventorySalePrice: item.inventorySalePrice,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateInventory: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormInventory: {
          inventoryName,
          inventoryNumber,
          inventoryDate,
          inventoryPrice,
          inventorySalePrice,
          _id,
        },
        inventories,
      } = inventoryStore.getState();
      const response = await axios.put(`/inventories/${_id}`, {
        inventoryName,
        inventoryNumber,
        inventoryDate,
        inventoryPrice,
        inventorySalePrice,
      });

      const newInventories = [...inventories];
      const inventoryIndex = inventories.findIndex((item) => {
        return item._id === _id;
      });
      newInventories[inventoryIndex] = response.data.inventory;

      set({
        inventories: newInventories,
        updateFormInventory: {
          inventoryName: '',
          inventoryNumber: '',
          inventoryDate: '',
          inventoryPrice: '',
          inventorySalePrice,
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default inventoryStore;
