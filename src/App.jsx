import {Component} from "react";
import ToDoList from "./components/ToDoList.jsx";
import todos from "./components/todos.json";
import ToDoEditor from "./components/ToDoEditor.jsx";
import Filter from "./components/Filter.jsx";
// import Form from "./components/Form.jsx";
import Modal from "./components/Modal.jsx"


class App extends Component {

    state ={
        todos: [],
        filter: '',
        showModal: false,
    }

    componentDidMount() {
        const todos = localStorage.getItem('todos')
        console.log(todos)
        const parsedTodo = JSON.parse(todos)
        console.log(parsedTodo)

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
                   <h1 className='text-center'>Мои задачи</h1>
                   <ToDoEditor onAddTodo={this.addTodo}/>
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

                   <h1>Хуй</h1>
                   <button onClick={() =>{this.toggleModal()}}>закройся</button>

               </Modal>}
               <button onClick={() =>{this.toggleModal()}}>откройся</button>



           </>

        )
    }

}

export default App
