import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="" type="text" />
        <label htmlFor="age"> Age(Years) </label>
        <input id="" type="number" />
      </form>
    </Card>
  );
}

export default AddUser;
