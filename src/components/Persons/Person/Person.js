import React, { Component } from "react";
import classes from "./Person.css";
import Auxilliary from "../../../hoc/Auxilliary";
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super();
    this.inputElementRef = React.createRef()
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Auxilliary>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={ (inputEl) => {this.inputElement = inputEl} }
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
