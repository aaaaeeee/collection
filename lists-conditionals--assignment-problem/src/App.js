import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';


class App extends Component {
  state = {
    userInput: '',
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  
  };

  deleteCharacterHandler= (index) => {
    const text = this.state.userInput.split('');//here change is strin to array
    text.splice(index,1); // here it will delete one index from array
    const updatedText = text.join('');//here it will change text array back to string
    this.setState({userInput: updatedText});
  };

  render() {
    const charList = this.state.userInput.split('').map((char,index) => {
      return <Char 
      character={char}
      key={index}
      click= {()=> this.deleteCharacterHandler(index)} />;
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" 
        onChange={this.inputChangeHandler}
        value={this.state.userInput}
        />
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;