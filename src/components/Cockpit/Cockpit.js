import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http requests can go here...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () =>{
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []); // passing an empty array makes it only ever run on componentdidmount, otherwise passing any args makes it only update if the pertaining args get updated

  //useEffect();...

  useEffect(() => {
    console.log('[Cockpit.js] 2nd ueEffect');
    return () =>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personslength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personslength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>

    </div>
  );
};

export default React.memo(cockpit);
