import React from 'react';
import './styles.css';
import {GlobalContext} from './../GlobalContext';

const TaskFooter = () => {

    const {tasks, active, all, completed, clear} = React.useContext(GlobalContext)
    const left = tasks.filter( item => item.isActive ).length
    const [clicked, setClicked] = React.useState(null)

    return (
        <div className='todos--footer'>
            <span>{left} items left</span>
            <span>
                <button 
                    className={clicked  === 'all' ? clicked : null}
                    onClick={() => {all(); setClicked('all')}}>All</button>
                <button 
                    className={clicked  === 'active' ? clicked : null}
                    onClick={() => {active(); setClicked('active')}}>Active</button>
                <button 
                    className={clicked  === 'completed' ? clicked : null}
                    onClick={() => {completed(); setClicked('completed')}}>Completed</button>
            </span>

            <span><button onClick={() => {clear()}} className='todos--footer-clear'>Clear Completed</button></span>
        </div>
    )
}

export default TaskFooter;
