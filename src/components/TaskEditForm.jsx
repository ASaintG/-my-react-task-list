import React, { useState, useEffect } from 'react';

const TaskEditForm = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState({
    name: '',
    fecha: '',
    description: '',
    estado: false,
  });

  useEffect(() => {
    // Actualizar el estado del formulario cuando cambia la tarea
    setEditedTask({
      name: task.name || '',
      fecha: task.fecha || '',
      description: task.description || '',
      estado: task.estado || false,
    });
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Llamar a la función onSave con la tarea editada
    onSave(editedTask);
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <label htmlFor="name">Task:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Task"
          value={editedTask.name}
          onChange={handleChange}
        />
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={editedTask.fecha}
          onChange={handleChange}
        />
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={editedTask.description}
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Guardar Actualización</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </>
  );
};

export default TaskEditForm;
