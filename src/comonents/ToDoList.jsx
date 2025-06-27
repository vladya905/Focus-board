const ToDoList = ({todos, onDeleteTodo, onToggleComplete}) => {
    return(
        <ul className='pl-0 '>
            {todos.map(({id, text, completed})=>(
                <li key={id} className='mb-1 flex gap-5 items-center border-1 border-gray-700 justify-between p-3 rounded shadow' >
                    <input
                        className='w-6 h-6'
                        type='checkbox'
                        checked={completed}
                        onChange={()=>onToggleComplete(id)}
                    />
                    <p className={`flex-1 italic ${completed ? 'line-through' : ''}`}>{text}</p>
                <button className='btn-base' type="button" onClick={()=> onDeleteTodo(id)}>Удалить</button>
            </li>))}
        </ul>
    )
}

export default ToDoList