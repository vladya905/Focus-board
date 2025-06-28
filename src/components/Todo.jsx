import React from 'react'
import IconButton from "./IconButton.jsx"
import DelIcon from '../assets/del.svg?react';


const Todo = ({text, completed, onToggleComplete, onDelete}) => {
    return (
        <div className='mb-1 flex gap-5 items-center border-1 border-gray-700 justify-between p-3 rounded shadow'>
            <input
                className='w-6 h-6 rounded-2xl'
                type='checkbox'
                checked={completed}
                onChange={onToggleComplete}
            />
            <p className={`flex-1 italic ${completed ? 'line-through' : ''}`}>{text}</p>
            <IconButton
                    type="button"
                    onClick={onDelete} aria-label='delete'>
                <DelIcon width='24' heigth ='24' stroke ='white'/>
            </IconButton>
        </div>
)
}

export default Todo


