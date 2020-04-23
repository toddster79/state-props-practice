import React, { Component } from 'react';
import { Card } from './components/Card'


class App extends Component { 

  state = {
    students: ["Todd", "Bianca", "Jill", "Jared", "David"]
  }  

  createCards = () => {
    return this.state.students.map(student => {
      return <Card name={student}/>
    })
  }

  render() {
  return (
    <div className="App">
      <ul>
        {this.createCards()}
      </ul>
    </div>
  ); 
  }
}

export default App;
