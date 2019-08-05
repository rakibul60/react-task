import React, {Component, Fragment} from "react"

export default class EmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)
    }

    deleteEmployee (event, index) {
        if(this.props.deleteEmployee){
            this.props.deleteEmployee(index);
        }
        
    }

    editEmployee (event, index) {
        if(this.props.editEmployee){
            this.props.editEmployee(index);
        }
        
    }

    render() {
        return ( 
            <Fragment>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody> 
            {this.props.employees.map((employee, index) => (
                <tr key={index}>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>
                        <button onClick={(event) => this.editEmployee(event, index)}>Edit</button>
                        <button onClick={(event) => this.deleteEmployee(event, index)}>Delete</button>
                       
                    </td>

                </tr>
            ))}
            </tbody>

            </Fragment>

        )
    }
};