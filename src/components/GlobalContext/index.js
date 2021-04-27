import React from 'react';

export const GlobalContext = React.createContext(null)

export const GlobalStorage = ({children}) => {

    let fetchtasks = [
        {
            id: 1,
            task: 'task 1',
            isActive: false
        },
        {
            id: 2,
            task: 'task 2',
            isActive: true
        },
        {
            id: 3,
            task: 'task 3',
            isActive: true
        },
    ]

    const [taskStorage, setTaskStorage] = React.useState(fetchtasks)

    const [tasks, setTask] = React.useState(fetchtasks)


    function addTask(task) {
        let id = new Date().getTime()
        const task_update = [...taskStorage, {id: id, task: task, isActive: true}]
        setTaskStorage(task_update)
        setTask(task_update)
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
    }

    function deleteTask(id) {
        const task_update = taskStorage.filter( item => item.id !== id )
        setTaskStorage(task_update)
        setTask(task_update)
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

    React.useEffect( () => {
        //console.log(tasks)
        //console.log(taskStorage)
    }, [tasks, taskStorage])

    return (
        <GlobalContext.Provider 
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
        </GlobalContext.Provider>
    )
}
