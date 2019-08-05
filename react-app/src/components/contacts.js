import React, {Component, Fragment} from "react"

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.goback = this.goback.bind(this);
    }
    goback(event){
        this.props.history.push('/home');
    }
    render() {
        return (
            <Fragment>
                <button  onClick={this.goback}>Back to Home</button>
            </Fragment>
        );
    }
}
