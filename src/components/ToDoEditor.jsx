import {Component} from "react";

class ToDoEditor extends Component {
    state={
        message: '',
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value,

        });
    }

    handleSubmit = (e) => {
        const {onAddTodo, onToggle} = this.props
        e.preventDefault();
        if(this.state.message === ''){
            alert('Введи че нить')
            return
        }
       onAddTodo(this.state.message);
        this.setState({message: ''});
        onToggle()


    }

    render() {
        return(
            <form className='flex flex-col max-w-2xl ' onSubmit={this.handleSubmit}>
                <textarea
                    className='textarea p-2 resize-none'
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder='пиши сюдой...'>

                </textarea>
                <button className='btn-base w-full !rounded-md' type='submit'>Добавить</button>
            </form>
        );
    }
}

export default ToDoEditor