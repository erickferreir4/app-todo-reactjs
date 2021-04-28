import React from 'react';
import './styles.css';
import TaskItem from './../TaskItem';
import {TaskContext} from './../TaskContext';


const TaskList = () => {

    const {tasks, updateTask, deleteTask} = React.useContext(TaskContext)

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
