import React from 'react';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList: React.FC<TodoListPropsType> = ({title, tasks}) => {


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
            return (
                <li key={tasks.id}>
                    <input type="checkbox" checked={tasks.isDone}/>
                    <span>{tasks.title}</span>
                    <button>x</button>
                </li>
            )
        })

    const tasksList: Array<JSX.Element> | JSX.Element = tasks.length
        ? <ul>{listItems}</ul>
        : <span>Your tasksList is empty</span>


    return (
        <div className={"todolist"}>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;