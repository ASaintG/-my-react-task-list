import React from 'react';
import "../App.css"
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <div className="tarjeta">
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
