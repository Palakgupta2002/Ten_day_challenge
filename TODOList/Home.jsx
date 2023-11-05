import React, { useState, useEffect } from 'react';
import Type from './Type';
import './Home.css';
import { PlusOutlined } from '@ant-design/icons';

const Home = () => {
  const [Task, setTask] = useState([]);
  const [ShowTask, SetShowTask] = useState([]); 
  const [ReadTaskClick, SetReadTaskClick] = useState('hidden');
  const [Readtask, setReadtask] = useState({
    TaskName: '',
    TaskDesc: '',
    Time: '', 
  });
  const [CreateClick, setCreateClick] = useState('hidden');
  const [formData, setFormData] = useState({
    TaskName: '',
    TaskDesc: '',
    Time: '',
  });
  const auth = JSON.parse(localStorage.getItem('userInfo'));
  
 
  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const savedTasks = JSON.parse(localStorage.getItem('Task'));
    if (Array.isArray(savedTasks)) {
      SetShowTask(savedTasks);
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  const CreateTask = () => {
    setCreateClick('visible');
    SetReadTaskClick('hidden');
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addTask = () => {
    const newTask = {
      TaskName: formData.TaskName,
      TaskDesc: formData.TaskDesc,
      Time: formData.Time,
    };
  
  setTask([...Task, newTask]);
    const updatedTasks = [...ShowTask, newTask];
    
    // Save the updated ShowTask in local storage
    localStorage.setItem('Task', JSON.stringify(updatedTasks));

    // Clear the form
    setFormData({
      TaskName: '',
      TaskDesc: '',
      Time: '',
    });

    setCreateClick('hidden');

  };
 
 

  const HandleDeleteTask = (index) => {
    const updatedTasks = ShowTask.filter((task, taskIndex) => taskIndex !== index);
    SetShowTask(updatedTasks);
    localStorage.setItem('Task', JSON.stringify(updatedTasks));
  };

  const handleshowTask = (index) => {
    setReadtask(ShowTask[index]);
    SetReadTaskClick('visible');
    setCreateClick('hidden');
  };

  return (
    <div className='Home'>
      <div className='Profile'>
        <img src={auth.profilePhoto} width={'10%'} height={'30%'} />
        <h2 style={{ color: 'darkblue' }}>
          <Type String={[`Hii!  ${auth.username}`]} />
        </h2>
      </div>
      <div style={{ display: 'flex'}}>
        <div className='CreateBox'>
            <h1>Add Your Task Here</h1>
          {Array.isArray(ShowTask) && ShowTask.map((task, index) => (
            <div className="ShowTask" key={index}>
              <span>Name:</span> {task.TaskName}, <br />
              <span>Description:</span> {task.TaskDesc}, <br />
              <span>Time:</span> {task.Time}
              <div style={{ display: "flex", columnGap: "10px" }}>
                <button onClick={() => HandleDeleteTask(index)} className='ShowButton'>Delete</button>
                <button onClick={() => handleshowTask(index)} className='ShowButton'>Show</button>
              </div>
            </div>
          ))}
          <button onClick={CreateTask} className='CreateTask'>
            <PlusOutlined style={{ fontSize: '40px' }} />
          </button>
        </div>
        <div>
          <div
            className='CreateBox1'
            style={{
              visibility: CreateClick,     
            }}
          >
            <form>
              <label>Task name</label>
              <input className='input' name='TaskName' type='text' value={formData.TaskName} onChange={handlechange}></input>
              <label>Task Description</label>
              <input className='input' name='TaskDesc' type='text' value={formData.TaskDesc} onChange={handlechange}></input>
              <label>Time</label>
              <input className='input' name='Time' type='time' value={formData.Time} onChange={handlechange}></input>
              <div style={{ display: "flex", columnGap: "30px" }}>
                <button className='ButtonCreate' type='button' onClick={addTask}>Add</button>
                <button className='ButtonCreate' type='button' onClick={() => setCreateClick('hidden')}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div className='ReadBox'  style={{  visibility:ReadTaskClick }}>
          <span>Task Name:- {Readtask.TaskName}</span><br></br>
          <span> Task Desc:-{Readtask.TaskDesc}</span><br></br>
          <span>Time:-{Readtask.Time}</span><br></br>
          <button onClick={()=>{
            SetReadTaskClick('hidden');
          }}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
