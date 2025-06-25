import {Component} from "react";
class Form extends Component {
    state = {
        name:"",
        surname: "",
                    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === "") {
            alert("Введи чё нить")
        }

        this.props.onSubmit(this.state);

        this.reset()
    }
    reset=()=>{
        this.setState({name:"",surname:"",})
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Имя
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Фамилия
                        <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                    </label>

                 <button type="submit"> Отправить</button>
                </form>

            </>
        )
    }
}


export default Form