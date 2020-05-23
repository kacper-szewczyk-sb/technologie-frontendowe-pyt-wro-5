import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Paragraph from './components/paragraph/Paragraph';
import ImageParagraph from './components/image-paragraph/ImageParagraph';
import ImageParagraphRight from './components/image-paragraph-right/ImageParagraphRight';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with SDA
        </a>
        <p>Test lorem ipsum</p>
      </header>
      <Paragraph></Paragraph>
      <ImageParagraph tytul="Paragraf zainicjalizowany z App.js" 
      zdjecie={logo}></ImageParagraph>
      <ImageParagraphRight tytul="Paragraf ze zdjęciem po prawej" 
      zdjecie="https://vignette.wikia.nocookie.net/movies/images/8/81/Nicolas_Cage.jpg/revision/latest/scale-to-width-down/340?cb=20170911161536&path-prefix=pl"/>

      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <Footer></Footer>
    </div>
  );
}

export default App;
