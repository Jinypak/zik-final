import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: lightgray;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999px;
`;
const ModalBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  transform: translateY(${(props) => props.transY}%);
  background-color: #fff;
  transition: 2s ease;
`;

function LoginModal({setLoginCheck}) {
  const [transY, setTransY] = useState(100);
  useEffect(() => {
    setTransY(0);
  }, []);

  return (
    <Container>
      <ModalBox transY={transY} setTransY={setTransY}>
        <h1>줌인키즈에 오신 것을 환영합니다.</h1>
        <p>회원이시면 로그인을 해주세요</p>
        <Link to='/login' onclick={()=>setLoginCheck(true)}>로그인</Link>
      </ModalBox>
    </Container>
  );
}

export default LoginModal;
