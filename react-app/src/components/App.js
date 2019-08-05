import React, {Component, Fragment} from "react"
import EmployeeTable from "./EmployeeTable"
import AddEmployeeForm from "./AddEmployeeForm"
// import '../scss/body.scss'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'Add Employee',
            employeeList: [
                { name: 'raj',age: 20},
                { name: 'rajib',age: 22},
                { name: 'sumon',age: 18}

            ],
            selectedEmployee: {},
        };
        this.addEmployee = this.addEmployee.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onEdit = this.onEdit.bind(this)
    }

    addEmployee(name, age, index=null) {
        if(index == null) {
            let employeeData = {
                name: name,
                age: age
            }
            this.setState({ 
                employeeList: [...this.state.employeeList, employeeData ]
            })
        } else {
            let employee = this.state.employeeList
            employee[index].name= name
            employee[index].age = age
            this.setState({
                selectedEmployee: {},
                employeeList: employee,
                status: 'Add Employee'

            })      
        }
        return;


    }

    onDelete(index) {
        this.setState({
            employeeList: this.state.employeeList.filter((item, itemIndex) => (index != itemIndex)),
        });
    };

    onEdit(index) {
        let selectedEmployee = this.state.employeeList[index]
        selectedEmployee.index = index;
        this.setState({
            selectedEmployee: selectedEmployee,
            status: 'Update Employee'
        })
    };

    render() {
        return (
            <Fragment>
            <h1 className="title-bc">Employee App</h1>
            <table>
            <EmployeeTable employees={this.state.employeeList} editEmployee={this.onEdit} deleteEmployee={this.onDelete}/>
            </table>
            <br/>
            <AddEmployeeForm addEmployee={this.addEmployee} submitStatus={this.state.status} selectedEmployee={this.state.selectedEmployee}/>
            </Fragment>
        )
    }

}