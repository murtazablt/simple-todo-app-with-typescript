import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (todoId: string) => void;
}> = (props) => {

  const deleteTodoHandler= (todoId: string) => {
    props.onDeleteTodo(todoId);
  }


  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          onDeleteTodo={deleteTodoHandler}
          text={item.text}
          id={item.id}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
