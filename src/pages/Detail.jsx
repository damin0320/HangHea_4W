import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const Detail = () => {
  
  const todos = useSelector((state) => state.todos.todos);
  // todos를 가져온다.
  const {id} = useParams();
  // id를 useParams로 네비게이트 할 때 쓴다.
  const todo = todos.find((item) => {
    // todos에서 todo를 find해서 조건에 맞는 첫 값만 가져와서서 객체를 쓴다.
    // 애써 모듈까지 갈 필요가 없다. 왜냐면 todos가 객체로 변해버리면 filter가 안 되기 때문
    return item.id ===id
  })
  const navigate = useNavigate()
  // /에 이동할 네비게이트


  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader >
            <div>ID :{id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

// import { searchUrl } from "../redux/modules/todos";
// const dispatch = useDispatch()
  // 얘도
  //  useEffect(() => {
    // 얘도 필요 없어진다
    // dispatch(searchUrl(id));
    // searchUrl도 필요 없어진다
    // todos가 객체로 바뀐다...
    // 상태값에 디테일이 있어야 하는 이유를 찾아야 한다.
    // useSelector만으로도 값 변경
  // }, [dispatch, id]);