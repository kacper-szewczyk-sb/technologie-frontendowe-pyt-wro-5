import React, { Component } from 'react';
import './ListAlphabet.css';

const A = 65;

class ListAlphabet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: Array.from({length: 26}, (_,i) => {
                return String.fromCharCode(i + A);
            })
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.letters.map(letter =>
                        <li key={letter}>{letter}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ListAlphabet;