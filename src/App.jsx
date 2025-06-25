
import {Component} from "react";
import Form from "./comonents/Form.jsx";



class App extends Component {


    submitForm = (data) => {
        console.log(data)
    }

    render() {
        return(
            <Form onSubmit={this.submitForm}/>
        )
    }

}

export default App
