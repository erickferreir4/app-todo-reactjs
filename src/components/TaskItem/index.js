import React from 'react';

const TaskItem = ({deleteTask, updateTask, isChecked, task, id}) => {

    return (
        <li className={isChecked ? '' : 'checked'}>
            <button className='todos--list-check'
                    onClick={() => {updateTask(id, 'isActive', !isChecked)}}>
            </button>
            <p className='todos--list-task'>{task}</p>
            <button className='todos--list-delete'
                    onClick={() => {deleteTask(id)}}
            >+</button>
        </li>
    )
}

export default TaskItem;
