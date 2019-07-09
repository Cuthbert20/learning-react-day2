import React, {Component} from 'react';
import './App.css';
import MathButton from './components/Math'
import Answers from './components/Answers'

class App extends Component {
constructor(){
  super()
  this.state = {
    number1: null,
    number2: null,
    //we are going to map to this empty array
    answer: []
  }
  //when you bind(this) we are binding this to App, so no mater where add is invoked this is bind to App
  this.add = this.add.bind(this)
  this.sub = this.sub.bind(this)
}
handleNum1(event){
  this.setState({
    number1: event.target.value
  })
}
handleNum2(event){
  this.setState({
    number2: event.target.value
  })
}
add() {//we only real needed to change from string to number using + or parseInt on the add function cause javascript will concatenate the two strings. with - * /
  this.setState({
    //using the spread operator so that we get a list of all of the answers
    answer: [...this.state.answer, (parseInt(this.state.number1) + parseInt(this.state.number2))]
  })
  
}
sub(){
  this.setState({
    answer: [...this.state.answer, (parseInt(this.state.number1) - parseInt(this.state.number2))]
  })
}
//when you use an arrow function you don't have to bind because this will always point to where it was created. In this case it is created in App.js
mult = () => {
  this.setState({
    answer: [...this.state.answer, (parseInt(this.state.number1) * parseInt(this.state.number2))]
  })
  
}
//using arrow function again to setState
divde = () => {
  this.setState({//below using shortcut instead of parseInt to convert from string to number we add a + infront of this.state.number1 or 2
    answer: [...this.state.answer, (parseInt(this.state.number1) / parseInt(this.state.number2))]
  })
}
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>MATH Master of the Universe</h1>
        <div className="maths">
          <input onChange={e => this.handleNum1(e)} type="number"/>
          <div className="math-buttons">
            <MathButton operator="+" mathFn = {this.add}/>
            <MathButton operator="-" mathFn = {this.sub}/>
            <MathButton operator="X" mathFn = {this.mult}/>
            <MathButton operator="/" mathFn = {this.divde}/>
          </div>
          <input onChange={e => this.handleNum2(e)} type="number" />
        </div>
        <Answers />
      </header>
    </div>
  );
}
}

export default App;
