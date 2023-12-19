
import React from 'react';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TaskItem = ({ task, onDelete,onEdit }) => {
  return (
    <li>
     <div onClick={onEdit} style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}>
      <strong>Estado:</strong>
      <input type="checkbox" className="round-checkbox" checked={task.estado}  />
      <br />
      <strong>Nombre:</strong> {task.name}
      <button onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} /> 
      </button>
     
      
      </div>
    </li>
  );
};

export default TaskItem;
