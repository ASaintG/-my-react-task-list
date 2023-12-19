import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskEditForm from './TaskEditForm';

const TaskList = ({ tasks: initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ name: '', fecha: '', description: '', estado: false });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.name.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask({ name: '', fecha: '', description: '', estado: false });
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setNewTask(tasks[index]);
  };

  const handleSaveEdit = (editedTask) => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editedTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setNewTask({ name: '', fecha: '', description: '', estado: false });
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setNewTask({ name: '', fecha: '', description: '', estado: false });
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (editingIndex !== null) {
        handleSaveEdit();
      } else {
        handleAddTask();
      }
    }
  };

  return (
    <> {editingIndex === null && (
      <div>
        <h3>Agregar Nueva Tarea:</h3>
        <input
          type="text"
          placeholder="Título"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          onKeyDown={handleTitleKeyDown}
        />
      </div>
    )}
    <div className="tarjeta">
      <h2>Listado de Tareas:</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(index)}
            onEdit={() => handleEditTask(index)}
          />
        ))}
      </ul>
      <div>
        {/* Renderizar el formulario de edición si hay un índice de edición */}
        {editingIndex !== null && (
          <TaskEditForm
            task={tasks[editingIndex]}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        )}

        {/* Renderizar el formulario para agregar nueva tarea si no está en modo de edición */}
       
      </div>
    </div>
    </>
  );
};

export default TaskList;
