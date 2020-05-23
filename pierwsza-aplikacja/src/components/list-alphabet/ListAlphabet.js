import React, { Component } from 'react';
import './ListAlphabet.css';

const A = 65;

class ListAlphabet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            justClicked: null,
            letters: Array.from({length: 26}, (_,i) => {
                return String.fromCharCode(i + A);
            })
        }
    }

    handleClick(letter) {
        this.setState({ justClicked: letter});
    }

    render() {
        return (
            <div className="separated">
                Just clicked: {this.state.justClicked}
                <ul>
                    {this.state.letters.map(letter =>
                        <li key={letter} onClick={() => this.handleClick(letter)}>
                            {letter}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ListAlphabet;