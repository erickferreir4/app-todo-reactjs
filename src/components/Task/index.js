import React from 'react';
import './styles.css';
import {TaskContext} from './../TaskContext';

const Task = () => {

    const {tasks, updateTask, addTask} = React.useContext(TaskContext)
    const [activeAll, setActive] = React.useState(true)

    function toggleActive() {
        tasks.forEach( item => updateTask(item.id, 'isActive', !activeAll) )
        setActive(!activeAll)
    }

    function handleTask({target, keyCode}) {
        let value = target.value
        if(keyCode === 13) {
            target.blur();
            target.value = '';
            if( value.replace(/ /g, '').length ) {
                addTask(value)
            }
        }
    }

    return (
        <div className='todos--task'>
            <button onClick={() => {toggleActive()}}>❯</button>
            <textarea onKeyDown={(event) => handleTask(event)} placeholder='What needs to be done?' rows='1'></textarea>
        </div>
    )
}

export default Task;
