import Todo from "./Todo.jsx";

const ToDoList = ({todos, onDeleteTodo, onToggleComplete}) => {
    return(
        <ul className='pl-0 list-none'>
            {todos.map(({id, text, completed})=>(
                <li key={id}>
                    <Todo
                        text={text}
                        completed={completed}
                        onDelete={()=>onDeleteTodo(id)}
                        onToggleComplete={()=>onToggleComplete(id)}/>
                </li>))}
        </ul>
    )
}

export default ToDoList