import React from 'react';
import Todo from './Todo';
import Todoform from './Todoform';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote, editNote } from '../../appSlice/reminderSlice';

function Todolist() {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();

  const addToDo = (todo) => {
    dispatch(addNote(todo));
  };

  const updatedTodos = (todoId, newValue) => {
    dispatch(editNote({ id: todoId, updatedNote: newValue }));
  };

  const removeTodo = (id) => {
    dispatch(deleteNote(id));
  };

  const completeTodo = (id) => {
    dispatch(
      editNote({
        id: id,
        updatedNote: {
          ...todos.find((todo) => todo.id === id),
          isComplete: !todos.find((todo) => todo.id === id).isComplete,
        },
      })
    );
  };
  return (
    <div className="reminderContainer">
      <h5 className="toTitle">To Do List</h5>
      <Todoform onSubmit={addToDo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatedTodos={updatedTodos}
      />
    </div>
  );
}

export default Todolist;
