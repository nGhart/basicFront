import React from 'react';
import './ReminderPage.scss';
import Todolist from '../../contents/reminders/Todolist';
import { useSelector } from 'react-redux';

function ReminderPage() {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <section className="reminderSection">
      <div className="to-do-app">
        <Todolist todos={todos} />
      </div>
    </section>
  );
}

export default ReminderPage;
