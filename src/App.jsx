// import {Component} from "react";
import ToDoList from "./components/ToDoList.jsx";
// import todos from "./components/todos.json";
import ToDoEditor from "./components/ToDoEditor.jsx";
import Filter from "./components/Filter.jsx";
import Modal from "./components/Modal.jsx"
// import Form from "./components/Form.jsx";
import IconButton from "./components/IconButton.jsx"
import PlusIcon from './assets/plus.svg?react';
import CloseIcon from './assets/close.svg?react';
import {useState, useEffect} from "react";


function App () {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? [])
    const [filter, setFilter] = useState('')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodo = (message) => {
        const newTodo = {
            id: Date.now(),
            text: message,
            completed: false,
        }

       setTodos((prevState)=>[newTodo, ...prevState])
    }

    const deleteTodo = (todoId) => {
        setTodos(prevState => (
            prevState.filter(todo => todo.id !== todoId)
        ))
    }

    const changeFilter = (e) => {
        setFilter(e.currentTarget.value)
    }

    const toggleComplete = (todoId) => {
        setTodos(prevState => (
            prevState.map(todo => (todo.id === todoId ? {...todo, completed: !todo.completed} : todo))
        ))
    }

    const getVisibleTodos = () => {
        const normalizedFilter = filter.toLowerCase()
        return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter))
    }


    const getTodoComplete = () =>{
        return todos.reduce((acc, todo)=>(todo.completed ? acc+1 : acc),0)}


    const toggleModal = () => {
       setShowModal(prevState => (
           !prevState
        ))
    }

    const todoCompleted = getTodoComplete();

    const filteredTodos = getVisibleTodos();

    return(
        <>
            <div className='max-w-2xl p-10 outline-4 outline-red-900' >
                <h1 className='text-center flex justify-between'>Мои задачи
                    <IconButton onClick={() =>{toggleModal()}}><PlusIcon stroke ='white'/></IconButton>
                </h1>

                <div className='text-2xl font-bold text-green-900 flex flex-row justify-between'>
                    <p>Всего задач: {todos.length}</p>
                    <p>Выполнено: {todoCompleted}</p>
                </div>
                <Filter
                    value = {filter}
                    onChange = {changeFilter}
                />
                <ToDoList
                    todos={filteredTodos}
                    onDeleteTodo={deleteTodo}
                    onToggleComplete={toggleComplete} />
            </div>

            {/*<Form onSubmit={this.submitForm} />*/}
            {showModal && <Modal onClose = {toggleModal}>
                <IconButton className='btn-base flex mr-0 ml-auto mb-2 p-2   ' onClick={() =>{toggleModal()}}><CloseIcon stroke='white' /></IconButton>
                <ToDoEditor onAddTodo={addTodo} onToggle ={toggleModal}/>

            </Modal>}



        </>

    )

}














    // submitForm = (...args) => {
    //     console.log(...args)
    //
    // }





export default App
