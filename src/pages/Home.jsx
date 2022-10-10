import React from 'react'
import AddForm from '../components/AddForm'
import Layout from "../components/Layout"
import Header from "../components/Header"
import TodoListContainer from '../components/TodoListContainer'
import styled from "styled-components";

const Home = () => {
  return (
    <StContainer>
      <Header />
      <Layout />
      <AddForm />
      <TodoListContainer />
    </StContainer>  )
}

export default Home

const StContainer = styled.section`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;