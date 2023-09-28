import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";



function App() {

    const todoListTitle: string = "What to learn"

    const tasks: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS"},
        {id: 3, isDone: false, title: "React"},
        {id: 4, isDone: false, title: "Node JS"},
        {id: 5, isDone: false, title: "Angular"},
    ]



    return (
        <div className="App">
            <TodoList title = {todoListTitle} tasks={tasks}/>
        </div>
    );
}

export default App;
