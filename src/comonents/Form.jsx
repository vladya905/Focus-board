import {Component} from "react";
class Form extends Component {
    state = {
        name:"",
        surname: "",
        level: "junior",
        license: false,
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

    licenseChange = (e) => {
        this.setState({license: e.target.checked});
    }

    render() {
        return (
            <>
                <form className='flex flex-col gap-5 w-1/2 h-80 border-1 rounded-2xl p-3' onSubmit={this.handleSubmit}>

                    <label>
                        Имя:
                        <input className='ml-10 border-2 border-black rounded-md' type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Фамилия:
                        <input className='ml-2 border-2 border-black rounded-md' type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                    </label>
                        <div className='flex gap-5'>
                            Выберите уровень:
                            <label>
                                Джун
                                <input type="radio"
                                       name ="level"
                                       value="junior"
                                       onChange={this.handleChange}
                                       checked={this.state.level==='junior'}/>
                            </label>
                            <label>
                                Мидл
                                <input type="radio"
                                       name ="level" value="middle"
                                       onChange={this.handleChange}
                                       checked={this.state.level==='middle'}/>
                            </label>
                            <label>
                                Сеньор
                                <input type="radio"
                                       name ="level"
                                       value="senior"
                                       onChange={this.handleChange}
                                       checked={this.state.level==='senior'}/>
                            </label>
                        </div>
                    <label className='mt-7'>
                        Принимаю условия
                        <input type="checkbox"
                               name="agree"
                               checked={this.state.license}
                               onChange={this.licenseChange} />
                    </label>
                        <button className="m-auto w-30 h-8 bg-blue-600 rounded-md enabled:text-amber-50" type="submit" disabled={!this.state.license}> Отправить</button>
                </form>

            </>
        )
    }
}


export default Form