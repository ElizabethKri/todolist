import React, {useRef, useState, KeyboardEvent, ChangeEvent} from 'react';
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

    const [newTaskTitle, setNewTaskTitle] =useState('')
    console.log('Render')

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
    const  onClickAddTask =
        ()=> {
            addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    const onKewDownAdd = (event: KeyboardEvent<HTMLInputElement>) => event.key === "Enter" && onClickAddTask()
    const onChangeSetNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.target.value)
    const isAddBtnDisabled = newTaskTitle === "" || newTaskTitle.length >=15
    const userMessage = newTaskTitle.length < 15
    ? <span>Enter new title</span>
    : <span style={{color: "red"}}>Your title is too long</span>

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
                onChange={onChangeSetNewTaskTitle}
                onKeyDown= {onKewDownAdd}
                />
                <button
                    disabled={isAddBtnDisabled}
                    onClick={onClickAddTask}>
                    +</button>
                <div>{userMessage}</div>
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