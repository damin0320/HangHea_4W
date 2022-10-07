import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from "../redux/modules/todos"
import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid';
const AddForm = () => {
const [todo, setTodo] = useState(
  { 
    title : "",
    body : "",
  }
)
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const setChangeHandler = (e) => {
    setTodo({
      ...todo,
      [e.target.name] : e.target.value
    })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(todo.title === "" || todo.body === "" || todo.title === undefined || todo.body === undefined) {
      // 하나만 넣으면 undefined가 뜬다.
      return alert("빈칸을 입력해주세요")
    }

    dispatch(addTodo({
      id : uuidv4(),
      title : todo.title,
      body : todo.body, 
      isDone : false,
    }))
  }
  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Todos의 제목과 내용을 입력하세요</label>
        <StInput type="text" name="title" value={todos.title} onChange={setChangeHandler} />
        <StInput type="text" name="body" value={todos.body} onChange={setChangeHandler} />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  )
}

export default AddForm

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;