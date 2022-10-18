import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function TodoInsert(props) {
  const [content, setContent] = useState("");
  const ref = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    props.onSubmit(content);
    setContent("");
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInput
          ref={ref}
          type="text"
          name="text"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={handleChange}
        />
        <AddButton
          type="submit"
          onClick={handleSubmit}
          onKeyPress={handleKeyPress}
        >
          추가
        </AddButton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const TextInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 0 5px;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d8e3e7;
    font-style: italic;
  }
`;

const AddButton = styled.button`
  width: 60px;
  height: 32px;
  border: 0;
  border-radius: 5px;
  background-color: #ffcc88;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default TodoInsert;
