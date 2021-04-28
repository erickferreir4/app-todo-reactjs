import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import TaskFooter from './components/TaskFooter';
import TaskList from './components/TaskList';
import {TaskStorage} from './components/TaskContext';

const App = () => {
    return (
        <>
            <Header />
            <div className='todos--wrapper'>
                <TaskStorage>
                    <Task />
                    <TaskList />
                    <TaskFooter />
                </TaskStorage>
            </div>
        </>
    )
}

export default App;
