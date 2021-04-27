import React from 'react';
import './styles.css';
import TaskItem from './../TaskItem';
import {GlobalContext} from './../GlobalContext';


const TaskList = () => {

    const {tasks, updateTask, deleteTask} = React.useContext(GlobalContext)

    return (
        <ul className='todos--list'>
            {tasks.map( item => (
                <TaskItem isChecked={item.isActive} 
                        task={item.task}
                        id={item.id}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        key={item.id}/>
            ))}
        </ul>
    )
}

export default TaskList;
