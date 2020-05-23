import React from 'react';
import './RequestElement.css';

class RequestElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1", { mode: 'no-cors'})
        .then(res => res.json())
        .then((result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    title: result
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                })
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.isLoaded ? "Laduje" : "Zaladowano"}
                {this.state.title}
            </div>
        )
    }

}

export default RequestElement;