import { create } from 'zustand';
import axios from 'axios';

const feedStore = create((set) => ({
  feeds: null,
  createFeed: {
    feedName: '',
    feedQuantity: '',
    feedDatePurchased: '',
    feedServing: '',
  },
  updateFormFeed: {
    feedName: '',
    feedQuantity: '',
    feedDatePurchased: '',
    feedServing: '',
    _id: null,
  },

  getFeeds: async () => {
    try {
      const response = await axios.get('/feeds');
      set({ feeds: response.data.feeds });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateFeeds: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createFeed: {
            ...state.createFeed,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },

  handleAddFeed: async (e) => {
    try {
      e.preventDefault();
      const { createFeed, feeds } = feedStore.getState();
      const response = await axios.post('/feeds', createFeed);
      set({
        feeds: [...feeds, response.data.feed],
        createFeed: {
          feedName: '',
          feedQuantity: '',
          feedDatePurchased: '',
          feedServing: '',
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteFeed: async (_id) => {
    try {
      const response = await axios.delete(`/feeds/${_id}`);
      const { feeds } = feedStore.getState();

      const newFeeds = feeds.filter((item) => {
        return item._id !== _id;
      });
      set({ feeds: newFeeds });
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdateFeed: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateFormFeed: {
            ...state.updateFormFeed,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editFeed: (item) => {
    try {
      set({
        updateFormFeed: {
          feedName: item.feedName,
          feedQuantity: item.feedQuantity,
          feedDatePurchased: item.feedDatePurchased,
          feedServing: item.feedServing,
          _id: item._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateFeed: async (e) => {
    try {
      e.preventDefault();
      const {
        updateFormFeed: {
          feedName,
          feedQuantity,
          feedDatePurchased,
          feedServing,
          _id,
        },
        feeds,
      } = feedStore.getState();
      const response = await axios.put(`/feeds/${_id}`, {
        feedName,
        feedQuantity,
        feedDatePurchased,
        feedServing,
      });

      const newFeeds = [...feeds];
      const feedIndex = feeds.findIndex((item) => {
        return item._id === _id;
      });
      newFeeds[feedIndex] = response.data.feed;

      set({
        feeds: newFeeds,
        updateFormFeed: {
          feedName: '',
          feedQuantity: '',
          feedDatePurchased: '',
          feedServing: '',
          _id: null,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default feedStore;
