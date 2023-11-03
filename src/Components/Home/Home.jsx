import React, { useState } from 'react';
import Nav from '../Navbar/Nav';
import style from './Home.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import Aside from '../Aside/Aside';

const Home = () => {
  const initialTasklist = [
    {
      id: '1',
      name: 'Gym at 8 am',
      state: 'Incomplete',
    },
  ];

  const { isAuthenticated, user } = useAuth0();
  const [taskList, setTaskList] = useState(initialTasklist);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [taskToEditId, setTaskToEditId] = useState(null);

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedTaskList);
  }

  const handleComplete = (id) => {
    const updatedTaskList = taskList.map((item) => {
      if (item.id === id) {
        return { ...item, state: item.state === 'Incomplete' ? 'Completed' : 'Incomplete' };
      }
      return item;
    });
    setTaskList(updatedTaskList);
  }

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = (taskList.length + 1).toString();
      const newTask = {
        id: newId,
        name: newTodo,
        state: 'Incomplete',
      };
      setTaskList([...taskList, newTask]);
      setNewTodo('');
    }
  }

  const handleEdit = (id) => {
    const taskToEdit = taskList.find((item) => item.id === id);

    if (taskToEdit) {
      setIsEditing(true);
      setTaskToEditId(id);
      setEditedTaskName(taskToEdit.name);
    }
  }

  const handleSaveEdit = () => {
    if (editedTaskName.trim() !== '') {
      const updatedTaskList = taskList.map((item) => {
        if (item.id === taskToEditId) {
          return { ...item, name: editedTaskName };
        }
        return item;
      });
      setTaskList(updatedTaskList);
      setIsEditing(false);
      setTaskToEditId(null);
      setEditedTaskName('');
    }
  }

  return (
    <>
      <Nav />

      <div className={style.container}>
        <Aside />
       
        { isAuthenticated && (
          <section className={style.home}>
            <h1>It's great to see you, <span>{user.given_name}</span>!</h1>
           
            <div className={style.todo}>
              {isEditing ? (
                <div className={style.addtodo}>
                  <input
                    type="text"
                    value={editedTaskName}
                    onChange={(e) => setEditedTaskName(e.target.value)}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                </div>
              ) : (
                <div className={style.addtodo}>
                  <input
                    type="text"
                    placeholder="Add a task"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                  />
                  <button onClick={handleAddTodo}>Add Task</button>
                </div>
              )}

              {taskList.length > 0 ? (
                taskList.map((item) => (
                  <section className={style.task_container} key={item.id}>
                    <div className={style.table} data-aos="fade-down" data-aos-duration="1000">
                      <h3>{item.name}</h3>
                      <p>{item.state}</p>
                      <div className={style.btns}>
                        <button onClick={() => handleComplete(item.id)}>
                          Status
                        </button>
                        <img onClick={() => handleEdit(item.id)} src="images/icons/EDIT-icon.png" alt="" />
                        <img onClick={() => handleDelete(item.id)} src="images/icons/delete-icon.png" alt="" />
                      </div>
                    </div>
                  </section>
                ))
              ) : (
                "Add Your Tasks....."
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default Home;
