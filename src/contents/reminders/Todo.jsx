import React, { useState } from 'react';
import Todoform from './Todoform';

const Todo = ({ todos, completeTodo, removeTodo, updatedTodos }) => {
  const [edit, editTodo] = useState({
    id: null,
    value: '',
  });
  const submitUpdate = (value) => {
    updatedTodos(edit.id, value);
    editTodo({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div
      className={
        (todos.length !== null && todos.length) > 9
          ? 'todoContainer'
          : 'nothing'
      }
    >
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            <span className="checkparent" style={{ width: '8px' }}>
              <span className={todo.isComplete ? 'checkComplete' : 'check'}>
                ✔
              </span>
            </span>
            {todo.text}
          </div>
          <div className="icons">
            <span onClick={() => removeTodo(todo.id)} className="deleteIcon">
              X
            </span>
            <span
              onClick={() => editTodo({ id: todo.id, value: todo.text })}
              className="editIcon"
            >
              ✎
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
