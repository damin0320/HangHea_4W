import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';
import {deleteTodo, changeTodo} from "../redux/modules/todos"
import { Link } from "react-router-dom";



const TodoListContainer = () => {
  const {todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id))
  }
  const onChangeHandler = (id) => {
    dispatch(changeTodo(id))
  }

    return (
    <StTodoContainer>
      <StWorking>
      <h2>
        Working~~!!
      </h2>
          <StTodos>
      {todos.filter((t)=> !t.isDone).map((todo) => (
        <StTodo key={todo.id}>
          <StTodoInner>
          <StLink to={`/${todo.id}`} key={todo.id}>
        <div>상세보기</div>
                </StLink> 
            <div>
          <h1>{todo.title}</h1>
          <p>{todo.body}</p>
          <StDelButton type="button" onClick={()=>{onDeleteHandler(todo.id)}}>삭제</StDelButton>
          <StChnButton type="button" onClick={()=>{onChangeHandler(todo.id)}}>{todo.isDone ?  "취소" : "완료"}</StChnButton>
          {/* 핸들러에서 매개변수로 보내고 콜백함수로 보내준다. */}
          </div>
          </StTodoInner>
          {/* div로 나눈다. */}
        </StTodo>
      ))}
    </StTodos>
      </StWorking>
      <StDone>
      <h2>
        Done~~!!
      </h2>
      <StTodos>
      {todos.filter((t)=> t.isDone).map((todo) => (
        <StTodo key={todo.id}>
          <StTodoInner>
          <StLink to={`/${todo.id}`} key={todo.id}>
        <div>상세보기</div>
                </StLink>         
          <h1>{todo.title}</h1>
          <p>{todo.body}</p>
          <StDelButton type="button" onClick={()=>{onDeleteHandler(todo.id)}}>삭제</StDelButton>
          {/* 핸들러에서 매개변수로 보내고 콜백함수로 보내준다. */}
          <StChnButton type="button" onClick={()=>{onChangeHandler(todo.id)}}>{todo.isDone ?  "취소" : "완료"}</StChnButton>
          </StTodoInner>
          {/* div로 나눈다. */}
        </StTodo>
      ))}
    </StTodos>
       
      </StDone>
      
    </StTodoContainer>

  )
}

export default TodoListContainer

const StLink = styled(Link)`
  text-decoration: none;
`;


const StTodoContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const StWorking = styled.div`
  `;

const StDone = styled.div`
  `;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 2px solid #ddd;
  width: 20%;
  height: 200px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;

const StTodoInner = styled.div`
  align-items: center;
`;

const StDelButton = styled.button`
  border: none;
  background-color: red;
  color : white;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StChnButton = styled.button`
  border: none;
  background-color: greenyellow;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;