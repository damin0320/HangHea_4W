# 항해 4주차 개인과제 2 : Redux 활용한 Todo List 만들기


목차

## 프로젝트 소개

<p align="justify">
리액트 기본기를 바탕으로 한 TodoList 만들기<br>
제한사항 : <br>
  <li> 예시로 준 동일한 폴더구조를 이용하여 컴포넌트를 나눌 것</li>
  <li> 오로지 useState 훅만을 이용하여 과제를 완성할 것</li>
</p>


## <a href="https://hanghea4w-damin0320.vercel.app/">실제 배포한 Redux TodoList</a>

<br>

## 기술 스택

HTML / CSS / JavaScript / React / Redux / git / gitHub / Vercel

<br>

## 구현 기능

### 기능 1 : input와 button 이용한 TodoList 등록
- 두 개의 input을 한 번에 관리하여 값을 받음
- onChangeHandler 통한 입력값 포착 후 저장
- submit시 dispatch에서 보낸 action 감지한 reducer 통해 state 값 변경으로 값 전달 및 등록
<br>
### 기능 2 : 만든 TodoList 삭제
- filter 이용하여 매개변수로 들어온 id와 todoList id 비교하여 같지 않은 값 삭제
- reducer통한 state 값 변경
<br>
### 기능 3 : TodoList 완료 및 취소
- map 메서드를 활용하여 item.id와 매개변수 id와 비교 후 등록 및 취소
- redux로 받은 값 filter 후 map으로 다시 돌려서 isDone 값에 따라 Working / Done 나누기
<br>

### 기능 4. react- router-dom 통한 상세 페이지 구현
- index.js, Router.jsx, app.js 사전 설정 통한 페이지 이동 세팅
- Detail.jsx 파일 따로 관리하여 Home.jsx와 분리 후 상세 페이지 구현
- Link 테그 이용한 홈 이동
- useParams로 id 값 가져온 것 활용하여 /:id 로 페이지 로딩 없이 이동

- 이후 리덕스 사용 않고 Detail.jsx에서 useSelector 로 todos 값 가져온 뒤 find 메서드 이용한 상세 페이지 내용 구현

<br>

## 컴포넌트 나눈 이유

### Ducks 패턴 활용 통한 컴포넌트 나누기

### 1. Component
- AddForm.jsx : input 및 추가하기 버튼 관리 일원화
- TodoListContainer.jsx : TodoList 관련 전반 일원화(프레임, 삭제 및 완료/취소, 리스트 추가)
> 컴포넌트 나눌 것 고려 했으나 일원화하여 관리하는 것이 유지보수에 더 용이할 것 같아 함께 관리
- Header.jsx : 헤더 (제목)용
- Layout.jsx : 레이아웃 조건 맞추기

<br>

### 2. Pages
- Home.jsx : App.js 대신해 페이지 이동까지 고려한 디자인 (App.js는 Router만 로드하면 되게 설정)
- Detail.jsx : 상세페이지. url로 따로 관리되고 있는 패턴이라 분리하여 관리


<br>

### 3. redux & Router
- modules > todos.js : Action Creator, Reducer 관리 일원화하기 위한 패턴
- shared > Router.jsx : react-router-dom 방식에 따라 Home, 상세페이지 이동 위한 설정으로 패턴 관리


<br>
## 배운 점 & 아쉬운 점


배운 점 <br>
- Redux 활용법(dispatch, reducer, action creator, state 상태값 통제 등...)
- 리액트 기본기 숙달 및 react-router-dom 방식 이해

아쉬운 점 <br>
- 컴포넌트 구성 시 TodoListContainer를 일원화 관리하다보니 살짝 무거운 감이 있음
- Redux 활용까지는 잘 했으나 이론 이해가 더 필요해서 공부 더 해야함

<p align="justify">

</p>

<br>

## 라이센스

Copyright 2022. hang-hae99 9th W4 team 4. all rights reserved.
