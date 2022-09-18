import React, { useState } from 'react';
// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css'


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);


  const goalInputChangeHandler = event => {
    const value = event.target.value;
    if (value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    } else {
      props.onAddGoal(enteredValue);

    }
    setEnteredValue("")
  };


  // using style components

  //   const FormControl = styled.div`

  //  margin: 0.5rem 0;

  //  & label {
  //   font-weight: bold;
  //   display: block;
  //   margin-bottom: 0.5rem;
  // }

  // & input {
  //   display: block;
  //   width: 100%;
  //   border: 1px solid #ccc;
  //   font: inherit;
  //   line-height: 1.5rem;
  //   padding: 0 0.25rem;
  // }

  // & input:focus {
  //   outline: none;
  //   background: #fad0ec;
  //   border-color: #8b005d;
  // }

  // &.invalid input{
  //   border-color: red;
  //   background: #ffd7d7;

  // }
  // &.invalid label {
  //   color: red;
  // }

  // `;

  return (
    <form onSubmit={formSubmitHandler}>
      {/*  adding style dynamically using css modules*/}
      <div className={`${styles.formControl} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>

      {/* adding style dynamically using styled component
      <FormControl className={!isValid ? "invalid" : ""}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}
      {/*  adding style dynamically  inline style*/}
      {/* <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input style={{ borderColor: !isValid ? "red" : "#ccc" }} type="text" onChange={goalInputChangeHandler} />
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
