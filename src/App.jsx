import {Component} from "react";
import ToDoList from "./comonents/ToDoList.jsx";
import todos from "./comonents/todos.json";
import ToDoEditor from "./comonents/ToDoEditor.jsx";
import Filter from "./comonents/Filter.jsx";
// import Form from "./comonents/Form.jsx";


class App extends Component {

    state ={
        todos,
        filter: '',
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




    // submitForm = (data) => {
    //     console.log(data)
    //
    // } ------------форму тестил

    render() {

        const {todos, filter} = this.state;

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

           </>

        )
    }

}

export default App
