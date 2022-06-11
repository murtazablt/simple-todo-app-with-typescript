import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.todos.map((item) => (
        <TodoItem
          onDeleteTodo={todosCtx.removeTodo}
          text={item.text}
          id={item.id}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
