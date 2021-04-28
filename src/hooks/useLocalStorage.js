import React from 'react';

const useLocalStorage = () => {
    const [storage, setStorage] = React.useState(null)

    React.useEffect( () => {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
        setStorage(tasks)
    }, [])

    function updateStorage(new_tasks) {
        localStorage.setItem('tasks', JSON.stringify(new_tasks))
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
        setStorage(tasks)
    }

    return {storage, updateStorage}
}

export default useLocalStorage;
