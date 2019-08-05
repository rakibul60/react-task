import React, {Component, Fragment} from "react"

const initialState = {
    index: null,
    name: '',
    age: '',
    nameError: '',
    ageError: '',
}
export default class AddEmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.validate = this.validate.bind(this)

    }
    

    onSubmit (event, name, age, index) {
        event.preventDefault();
        const isValid = this.validate()

        if(this.props.addEmployee){
            this.props.addEmployee(name, age, index);
            // this.setState({
            //     name: '',
            //     age: '',
            //     index: null
            // })
            if(isValid) {
                this.setState(initialState)
            }
        }
        
    }
    validate() {
        let nameError = "";
        let ageError = "";
        if(!this.state.name) {
            nameError = "name cannot be blank";
        }
        if(!this.state.age) {
            ageError = "age cannot be blank"
        }
        if(nameError || ageError) {
            this.setState({
                nameError,
                ageError
            })
            return false;
        }
        return true;
    };
    onChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.selectedEmployee != this.props.selectedEmployee) {
            this.setState({
                index: this.props.selectedEmployee.index,
                age: this.props.selectedEmployee.age,
                name: this.props.selectedEmployee.name
            })
        }
    }
    render() {
        return ( 
            <Fragment>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        onChange={(event) => this.onChangeHandler(event)}
                        value= {this.state.name}
                        autoComplete="off"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Jsx" />
                        <div style={{ fontsize: 12, color: "red"}}>
                            {this.state.nameError}
                        </div>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        onChange={(event) => this.onChangeHandler(event)}
                        value={this.state.age}
                        autoComplete="off"
                        min="0"
                        max="100"
                        name="age"
                        type="number"
                        className="form-control"
                        placeholder="You age" />
                        <div style={{ fontsize: 12, color: "red"}}>
                            {this.state.ageError}
                        </div>
                </div>

                <button
                    onClick={(event) => this.onSubmit(event, this.state.name, this.state.age, this.state.index)}
                    disabled={!this.state.name || !this.state.age}
                    className="btn btn-success btn-lg"
                > {this.props.submitStatus}
                </button>
            </form>

            </Fragment>

        )
    }
};