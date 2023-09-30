import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType = "all" | "active" | "completed"
function App() {

    const todoListTitle: string = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS"},
        {id: 3, isDone: false, title: "React"},
        {id: 4, isDone: false, title: "Node JS"},
        {id: 5, isDone: false, title: "Angular"},
    ])

    //при удалении создаем новый массив, без эл-та, который хотим удалить
    const removeTask = (taskId: number) => {
        const nextState: Array<TaskType> = []
        for (let i = 0; i < tasks.length; i++){
            if(tasks[i].id !== taskId){
                nextState.push(tasks[i])
            }
        }
        setTasks(nextState)
    }

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
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
