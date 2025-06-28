import {Component} from "react";
import ToDoList from "./components/ToDoList.jsx";
import todos from "./components/todos.json";
import ToDoEditor from "./components/ToDoEditor.jsx";
import Filter from "./components/Filter.jsx";
import Modal from "./components/Modal.jsx"
// import Form from "./components/Form.jsx";
import IconButton from "./components/IconButton.jsx"
import PlusIcon from './assets/plus.svg?react';
import CloseIcon from './assets/close.svg?react';




class App extends Component {

    state ={
        todos: [],
        filter: '',
        showModal: false,
    }

    componentDidMount() {
        const todos = localStorage.getItem('todos')
        const parsedTodo = JSON.parse(todos)

        if(parsedTodo){
            this.setState({
                todos:parsedTodo
            })
        }



    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.todos !== prevState.todos){
            localStorage.setItem('todos', JSON.stringify(this.state.todos))
        }
    }

    addTodo = (message) => {
        const newTodo = {
            id: Date.now(),
            text: message,
            completed: false,
        }

        this.setState(prevState => ({
            todos: [newTodo, ...prevState.todos, ]
        }))
    }

    deleteTodo = (todoId) => {
       this.setState(prevState => ({
           todos: prevState.todos.filter(todo => todo.id !== todoId)
       }))
    }

    changeFilter = (e) => {
       this.setState({filter: e.currentTarget.value})
    }

    toggleComplete = (todoId) => {
        this.setState(prevState =>({
            todos: prevState.todos.map(todo =>(todo.id === todoId ? {...todo, completed: !todo.completed} : todo))
        }))
    }

    getVisibleTodos = () => {
        const {filter, todos} = this.state
        const normalizedFilter = filter.toLowerCase()
        return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter))

    }

    getTodoComplete = () => (
        this.state.todos.reduce((acc, todo)=>(todo.completed ? acc+1 : acc),0)
    )

    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal
        }))
   }

    // submitForm = (data) => {
    //     console.log(data)
    //
    // } ------------форму тестил

    render() {

        const {todos, filter, showModal} = this.state;
        const todoCompleted = this.getTodoComplete();
        const filteredTodos = this.getVisibleTodos();

        return(
           <>
               <div className='max-w-2xl p-10 outline-4 outline-red-900' >
                   <h1 className='text-center flex justify-between'>Мои задачи
                       <IconButton onClick={() =>{this.toggleModal()}}><PlusIcon stroke ='white'/></IconButton>
                   </h1>

                   <div className='text-2xl font-bold text-green-900 flex flex-row justify-between'>
                       <p>Всего задач: {todos.length}</p>
                       <p>Выполнено: {todoCompleted}</p>
                   </div>
                    <Filter
                        value = {filter}
                        onChange = {this.changeFilter}
                    />
                   <ToDoList
                       todos={filteredTodos}
                       onDeleteTodo={this.deleteTodo}
                       onToggleComplete={this.toggleComplete} />
               </div>

               {/*<Form onSubmit={this.submitForm} />*/}
               {showModal && <Modal onClose = {this.toggleModal}>
                   <IconButton className='btn-base flex mr-0 ml-auto mb-2 p-2   ' onClick={() =>{this.toggleModal()}}><CloseIcon stroke='white' /></IconButton>
                   <ToDoEditor onAddTodo={this.addTodo} onToggle ={this.toggleModal}/>

               </Modal>}






           </>

        )
    }

}

export default App
