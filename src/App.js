import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:"2i3o4u23", name: "Max", age: 28 },
      { id:"32423523", name: "Manu", age: 29 },
      { id:"32423334", name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex];// would mutates state directly
    const person = {
      ...this.state.persons[personIndex] // this creates an object using the spread operator containing obj of array index
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // creates a copy of the state array and stores it in const persons
    const persons = [...this.state.persons]; // functionally the same as the top, ES6, immutable states (don't mess with original)
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      //inline styling cannot support hovering too easily
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index} // need keys for React, comparison of old dom to virtual dom for distinct elements, index isnt good
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index + person.id)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
