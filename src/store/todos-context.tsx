import React, { ReactNode, useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
  todos: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  todos: [],
  addTodo: (todoText) => {},
  removeTodo: (todoId) => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextObj = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
