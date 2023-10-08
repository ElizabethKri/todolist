import React, {useRef, useState} from 'react';
import {FilterValuesType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (nextFilterValue: FilterValuesType) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList: React.FC<TodoListPropsType> = ({title, tasks, removeTask, changeFilter, addTask}) => {


    // let tasksList : Array<JSX.Element> | JSX.Element;
    // if(tasks.length === 0){
    //     tasksList = <span>Your tasksList is empty</span>
    // } else {
    //     const listItems: Array<JSX.Element> = []
    //     for(let i = 0; i <tasks.length; i++){
    //         const newListItem =
    //             <li key={tasks[i].id}>
    //                 <input type="checkbox" checked={tasks[i].isDone}/>
    //                 <span>{tasks[i].title}</span>
    //                 <button>x</button>
    //             </li>
    //         listItems.push(newListItem)
    //     }
    //
    //     tasksList = <ul>
    //         {listItems}
    //     </ul>
    // }

    const listItems: Array<JSX.Element> =
        tasks.map(tasks => {
            const onClickRemoveTaskHandler = () => removeTask(tasks.id)
            return (
                <li key={tasks.id}>
                    <input type="checkbox" checked={tasks.isDone}/>
                    <span>{tasks.title}</span>
                    <button onClick={onClickRemoveTaskHandler}>x</button>
                </li>
            )
        })

    // const titleInput = useRef<HTMLInputElement>(null)

    const tasksList: JSX.Element = tasks.length
        ? <ul>{listItems}</ul>
        : <span>Your tasksList is empty</span>

    const [newTaskTitle, setNewTaskTitle] =useState('')


    return (
        <div className={"todolist"}>
            <h3>{title}</h3>
            <div>
                {/*<input ref={titleInput}/>*/}
                {/*<button onClick={() =>{*/}
                {/*    if (titleInput.current){*/}
                {/*        addTask(titleInput?.current.value)*/}
                {/*        titleInput.current.value = ""*/}
                {/*    }*/}
                {/*}}>+</button>*/}
                <input value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}/>
                <button
                    disabled={newTaskTitle === "" || newTaskTitle.length >=15 }
                    onClick={()=> {
                        addTask(newTaskTitle)
                        setNewTaskTitle('')
                    }
                }>+</button>
                <div><span>{newTaskTitle.length < 15
                    ? 'Enter new title'
                    : 'Your title is too long'}</span></div>

            </div>
            {tasksList}
            <div>
                <button onClick={()=>changeFilter('all')}>All</button>
                <button onClick={()=>changeFilter('active')}>Active</button>
                <button onClick={()=>changeFilter('completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;