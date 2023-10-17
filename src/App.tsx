import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


export type FilterValuesType = "all" | "active" | "completed"
function App() {

    const todoListTitle: string = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: crypto.randomUUID(), isDone: true, title: "HTML&CSS"},
        {id: crypto.randomUUID(), isDone: true, title: "JS"},
        {id: crypto.randomUUID(), isDone: false, title: "React"},
        {id: crypto.randomUUID(), isDone: false, title: "Node JS"},
        {id: crypto.randomUUID(), isDone: false, title: "Angular"},
    ])

    //при удалении создаем новый массив, без эл-та, который хотим удалить
    const removeTask = (taskId: string) => {
        // const nextState: Array<TaskType> = []
        // for (let i = 0; i < tasks.length; i++){
        //     if(tasks[i].id !== taskId){
        //         nextState.push(tasks[i])
        //     }
        // }

        // const nextState: Array<TaskType> = tasks.filter(t => t.id !== taskId)

        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const addTask = (title: string) => {

        const newTask: TaskType = {
            id: crypto.randomUUID(),
            title,
            isDone: false
        }
        // const nextState: Array<TaskType> = [...tasks, newTask]
        setTasks([...tasks, newTask])
    }

    const changeTaskStatus = (taskId: string) => {
        const updateTasks: Array<TaskType> = tasks.map(t => t.id === taskId
        ? {...t, isDone : !t.isDone}
            : t
        )
        setTasks(updateTasks)
    }
    const changeTaskTitle = () => {}

    const [filter, setFilter] = useState<FilterValuesType>("all")
    const getFilteredTasksForRender = (allTasks: Array<TaskType>, filterValue: FilterValuesType): Array<TaskType> => {
        switch (filterValue){
            case "active":
                return allTasks.filter(tasks => !tasks.isDone)
            case "completed":
                return allTasks.filter(tasks => tasks.isDone)
            default:
                return allTasks
        }
    }
    const changeFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }
    const filteredTasksForRender: Array<TaskType> = getFilteredTasksForRender(tasks, filter)
    return (
        <div className="App">
            <TodoList title = {todoListTitle}
                      tasks={filteredTasksForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}

            />
        </div>
    );
}

export default App;
