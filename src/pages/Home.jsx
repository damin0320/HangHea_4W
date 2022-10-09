import React from 'react'
import AddForm from '../components/AddForm'
import TodoList from "../components/TodoList"
import TodoListContainer from '../components/TodoListContainer'
import styled from "styled-components";

const Home = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>  )
}

export default Home

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;