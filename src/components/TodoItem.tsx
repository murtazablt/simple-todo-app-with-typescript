import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onDeleteTodo: (todoId: string) => void;
}> = (props) => {
  const deleteTodoHandler = (e: React.MouseEvent) => {
    const clickedTodoId = e.currentTarget.id;
    props.onDeleteTodo(clickedTodoId);
  };

  return (
    <li className={classes.item} onClick={deleteTodoHandler} id={props.id}>
      {props.text}
    </li>
  );
};

export default TodoItem;
