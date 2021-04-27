import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import TaskFooter from './components/TaskFooter';
import TaskList from './components/TaskList';
import {GlobalStorage} from './components/GlobalContext';

const App = () => {
    return (
        <>
            <Header />
            <div className='todos--wrapper'>
                <GlobalStorage>
                    <Task />
                    <TaskList />
                    <TaskFooter />
                </GlobalStorage>
            </div>
        </>
    )
}

export default App;
