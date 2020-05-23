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
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then((result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    title: result.title
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
                <h2>{this.state.title}</h2>
            </div>
        )
    }

}

export default RequestElement;