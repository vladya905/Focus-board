import Todo from "./Todo.jsx";

const ToDoList = ({todos, onDeleteTodo, onToggleComplete}) => {
    return(
        <ul className='pl-0 list-none'>
            {todos.map(({id, text, completed})=>(
                <li key={id} className='hover:bg-green-400 transition-colors duration-300 shadow '>
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