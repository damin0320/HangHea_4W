// src/redux/modules/todos.js
import {v4 as uuidv4} from 'uuid';


// Action Value
const ADD_TODOLIST = "ADD_TODOLIST"
// Action Creator
export const addTodo = (payload) => {
  return {
    type : ADD_TODOLIST,
    payload,
    }
  };
// Initial State
const initialState = {
  todos : [  
    {id : uuidv4(),
    title : "react를 공부합시다.",
    body : "챕터 1부터 챕터 12까지 학습",
    isDone: false
  },
    {id : uuidv4(),
      title : "redux를 공부합시다.",
      body : "챕터 5부터 챕터 10까지 학습",
      isDone: true
    }]

};

// Reducer 기본형태
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todos : [...state.todos, action.payload]
      }
    default:
      return state;
  }
};
// export default reducer
export default todos;