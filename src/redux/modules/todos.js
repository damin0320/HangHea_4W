// src/redux/modules/todos.js

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
    {id : 1,
    title : "react를 공부합시다.",},
    {id : 2,
      title : "redux를 공부합시다.",}]

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