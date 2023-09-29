// notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 'ljkmkj', text: 'clean cage' },
    { id: 'ljkmk562j', text: 'Feed Cage A' },
    { id: 'ljkm2@454kj', text: 'Package Meat' },
    { id: 'ljkmk%%%562j', text: 'Restock feed' },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.todos = state.todos.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, updatedNote } = action.payload;
      const index = state.todos.findIndex((note) => note.id === id);
      if (index !== -1) {
        state.todos[index] = updatedNote;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = todosSlice.actions;
export default todosSlice.reducer;
