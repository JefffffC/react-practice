import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDeriveStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;
  //   }
  //   else return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Person.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          // need keys for React, comparison of old dom to virtual dom for distinct elements, index isnt good
          name={person.name}
          age={person.age}
          key={index}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          // isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

  export default Persons;