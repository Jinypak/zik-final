import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { KidsImage, KidTab, KidTabBox, LastTest, UserDetail, UserInfo } from "./Home";

const Container = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TestInfoA = styled.div`
  width: 95%;
  margin: 20px auto;
  border: 1px solid #000;
  border-radius: 20px;
`;
// const InfoAText = styled.div`
//     padding: 10px;
// `;
const TestInfoB = styled.div`
  width: 95%;
  margin: 20px auto;
  border: 1px solid #000;
  border-radius: 20px;
`;
// const InfoBText = styled.div``;
const TestBtn = styled(Link)`
  margin: 20px auto;
  padding: 10px 22%;
  color: #fff;
  border-radius: 9999px;
  background: linear-gradient(89.92deg, #289ca4 0.07%, #c6ecee 118.05%);
  text-align: center;
  text-decoration: none;
`;

function Test() {
  return (
    <Container>
      <UserInfo>
        <KidTabBox>
          <KidTab className="active">
            <KidsImage
              src="https://avatars.githubusercontent.com/u/79570234?v=4"
              alt=""
            />
            <p>박인호</p>
          </KidTab>
          <KidTab>
            <KidsImage
              src="https://avatars.githubusercontent.com/u/79570234?v=4"
              alt=""
            />
            <p>박인호</p>
          </KidTab>
          <KidTab>
            <KidsImage
              src="https://avatars.githubusercontent.com/u/79570234?v=4"
              alt=""
            />
            <p>박인호</p>
          </KidTab>
        </KidTabBox>
        <UserDetail>
          <p>
            <h3>이미주님</h3> 안녕하세요!
          </p>
          <p>박인호 | </p>
          <p>이미주 님 | 양육자 | 33세 | 거주지 입력</p>
          <LastTest>최근 검사 후 121일 경과</LastTest>
        </UserDetail>
      </UserInfo>
      <TestInfoA>
        <img src="./img/infoAImg.png" alt="" />
      </TestInfoA>
      <TestInfoB>
        <img src="./img/infoBImg.png" alt="" />
      </TestInfoB>
      <TestBtn to="/test/detail/1">발달검사 테스트 시작</TestBtn>
    </Container>
  );
}

export default Test;
