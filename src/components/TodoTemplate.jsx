import React, { useState, useRef } from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

function TodoTemplate() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  const handleSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  };

  return (
    <Container>
      <TodoTitle>TODO LIST</TodoTitle>
      <TodoInsert onSubmit={handleSubmit} />
      <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 90vh;
  border: 3px solid orange;
  border-radius: 20px;
  background-color: #fff;
`;

export default TodoTemplate;
