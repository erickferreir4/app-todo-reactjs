import React from 'react';
import './styles.css';
import {GlobalContext} from './../GlobalContext';

const TaskFooter = () => {

    const {tasks, active, all, completed, clear} = React.useContext(GlobalContext)
    const left = tasks.filter( item => item.isActive ).length

    return (
        <div className='todos--footer'>
            <span>{left} items left</span>
            <span>
                <button onClick={() => {all()}}>All</button>
                <button onClick={() => {active()}}>Active</button>
                <button onClick={() => {completed()}}>Completed</button>
            </span>

            <span><button onClick={() => {clear()}} className='todos--footer-clear'>Clear Completed</button></span>
        </div>
    )
}


export default TaskFooter;
