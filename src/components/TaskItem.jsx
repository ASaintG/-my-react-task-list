
import React from 'react';
import "../App.css"
const TaskItem = ({ task }) => {
  return (
    <li>
    
      <strong>Estado:</strong>
      <input type="checkbox" className="round-checkbox" checked={task.estado}  />
      <br />
      <strong>Nombre:</strong> {task.name}
   
     

    </li>
  );
};

export default TaskItem;
