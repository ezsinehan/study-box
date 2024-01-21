import React, { useState } from "react";
import "../styles/Secondbrain.css";

const SecondBrain = () => {
  // Function to load tasks from local storage
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  // State initialization
  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // Function to save tasks to local storage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Function to add a new task
  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setNewTask("");
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Function to start editing a task
  const startEditing = (index, task) => {
    setEditingIndex(index);
    setEditedTask(task);
  };

  // Function to handle editing changes
  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  // Function to save the edited task
  const saveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editedTask;
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setEditingIndex(null);
  };

  // Function to render tasks
  const renderTasks = () => {
    return tasks.map((task, index) => (
      <div className="task-item" key={index}>
        {editingIndex === index ? (
          <input type="text" value={editedTask} onChange={handleEditChange} />
        ) : (
          <span onClick={() => startEditing(index, task)}>{task}</span>
        )}
        <button className="delete-btn btn" onClick={() => deleteTask(index)}>
          Complete
        </button>
        {editingIndex === index && (
          <button className="save-btn btn" onClick={saveEdit}>
            Save
          </button>
        )}
      </div>
    ));
  };

  return (
    <div>
      <h1>SecondBrain</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn" onClick={() => addTask(newTask)}>
        Add Task
      </button>
      <div>{renderTasks()}</div>
    </div>
  );
};

export default SecondBrain;
