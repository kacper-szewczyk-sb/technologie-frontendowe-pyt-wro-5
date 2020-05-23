import React, { Component } from 'react';
import './ImageParagraph.css';
import logo from './logo.svg';

class ImageParagraph extends Component {

    constructor(props) {
        super(props);
        console.log("Konstruktor");
    }

    handleClick = () => {
        console.log("Nacisnieto");
    }

    componentDidMount() {
        console.log("Komponent wyrenderowany");
    }

    render() {
        console.log("Renderowanie");
        return (
            <section>
                <h2>{this.props.tytul}</h2>
                <div className="row">
                    <div className="desktop-50-width">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="desktop-50-width">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button onClick={this.handleClick}>Naciśnij</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default ImageParagraph;