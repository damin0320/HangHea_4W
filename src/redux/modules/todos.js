// src/redux/modules/todos.js
import {v4 as uuidv4} from 'uuid';


// Action Value
const ADD_TODOLIST = "ADD_TODOLIST"
const DELETE_TODOLIST = "DELETE_TODOLIST"
const CHANGE_TODOLIST = "CHANGE_TODOLIST"
// Action Creator
export const addTodo = (payload) => {
  return {
    type : ADD_TODOLIST,
    payload,
    }
  };

export const deleteTodo = (payload) => {
  return {
    type : DELETE_TODOLIST,
    id : payload
    // id자체가 객체가 아니라 id 값을 매개변수로 보낸다.
  }
}

export const changeTodo = (payload) => {
  return {
    type : CHANGE_TODOLIST,
    id : payload,
  }
}
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
      case DELETE_TODOLIST:
        return Object.assign({}, {
          todos: state.todos.filter(todo => todo.id !== action.id),
          todo: state.todos,
        });
      case CHANGE_TODOLIST:
        return {
          ...state,
          todos : state.todos.map(todo => {if(todo.id === action.id){
          todo.isDone = !todo.isDone
          return todos
          // todos가 리턴되어야지 true, false값이 리턴되어봤자 필터링이 todolist컨테이너에서 되지 않는다.
          }}),
          todos : state.todos,
        }
    default:
      return state;
  }
};
// export default reducer
export default todos;

// Object.assign({}, {
//   todos: state.todos.map((todo) => {if(todo.id === action.id){
//     todo.isDone = !todo.isDone
// }}),
//   todo: state.todos,
// });