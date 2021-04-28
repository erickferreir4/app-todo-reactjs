import React from 'react';
import useLocalStorage from './../../hooks/useLocalStorage';

export const TaskContext = React.createContext(null)

export const TaskStorage = ({children}) => {

    const [taskStorage, setTaskStorage] = React.useState(null)
    const [tasks, setTask] = React.useState(null)
    const {storage, updateStorage} = useLocalStorage()

    React.useEffect( () => {
        //setTimeout( () => {
        setTaskStorage(storage)
        setTask(storage)
        //}, 5000)
    }, [storage])

    function addTask(task) {
        let id = new Date().getTime()
        const new_task = {id: id, task: task, isActive: true}
        const task_update = [...taskStorage, new_task]

        setTaskStorage(task_update)
        setTask(task_update)

        updateStorage(task_update)
    }

    function updateTask(id, key, value, ...args) {
        const task_update = tasks.map( item => {
            if( item.id === id ) {
                item[key] = value
            }
            return item
        })
        setTaskStorage(task_update)
        setTask(task_update)

        updateStorage(task_update)
    }

    function deleteTask(id) {
        const task_update = taskStorage.filter( item => item.id !== id )
        setTaskStorage(task_update)
        setTask(task_update)

        updateStorage(task_update)
    }

    function all() {
        const task_update = taskStorage.filter( item => item )
        setTask(task_update)
    }

    function active() {
        const task_update = taskStorage.filter( item => item.isActive )
        setTask(task_update)
    }

    function completed() {
        const task_update = taskStorage.filter( item => !item.isActive )
        setTask(task_update)
    }

    function clear() {
        const task_update = taskStorage.filter( item => item.isActive )
        setTaskStorage(task_update)
        setTask(task_update)
    }

    if(!tasks) return (<>'loading...'</>)
    return (
        <TaskContext.Provider 
            value={{
                    tasks,
                    updateTask,
                    deleteTask,
                    all,
                    active,
                    completed,
                    clear,
                    addTask
                }}>
            {children}
        </TaskContext.Provider>
    )
}
