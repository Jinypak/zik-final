import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "../components/LoginModal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div``;
const KidsImage = styled.img`
  width: 80%;
  border-radius: 9999px;
  margin-top: 5px;
  margin-bottom: -10px;
`;

const KidTabBox = styled.div`
  display: flex;
  .active {
    background-color: #fff;
  }
`;

const KidTab = styled.div`
  width: 20%;
  height: 100px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center center;
`;
const UserDetail = styled.div`
  position: relative;
  background-color: #fff;
  margin-top: -1px;
  padding: 15px;
`;

const LastTest = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
`;

const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HomeInfoTab = styled.div`
  width: 94%;
  height: 50px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;

  li {
    text-align: center;
    width: 20%;
    list-style-type: none;
  }

  li.active {
    border: 1px solid #000;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
    line-height: 50px;
  }
`;

const HomeInfoBox = styled.div`
  width: 95%;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;

  img {
    width: 80%;
    margin: 0 auto;
  }
`;

const GoTestBtn = styled(Link)`
  margin: 20px auto;
  padding: 10px 22%;
  color: #fff;
  border-radius: 9999px;
  background: linear-gradient(89.92deg, #289ca4 0.07%, #c6ecee 118.05%);
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  ::after {
    background-image: url("./img/goBtnImg.png");
    width: 50px;
    height: 50px;
  }
`;



function Home({ appIndex, setAppIndex, loginCheck }) {
  return (
    <div>
      <Container>
        {!(loginCheck === false && appIndex === 1) ? (
          <>
            <UserInfo>
              <KidTabBox>
                <KidTab className="active">
                  <KidsImage
                    src="https://avatars.githubusercontent.com/u/79570234?v=4"
                    alt=""
                  />
                  <p>김인호</p>
                </KidTab>
              </KidTabBox>
              <UserDetail>
                <p>Login을 해주세요</p>
                <Link to="/login" onClick={() => setAppIndex(2)}>
                  로그인
                </Link>
              </UserDetail>
            </UserInfo>
            <LoginModal
              appIndex={appIndex}
              setAppIndex={setAppIndex}
            ></LoginModal>
          </>
        ) : (
          <>
            {true ? (
              <>
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

                <HomeInfo>
                  <HomeInfoTab>
                    <li className="active">인지</li>
                    <li>사회성</li>
                    <li>운동</li>
                    <li>언어</li>
                    <li>자조</li>
                  </HomeInfoTab>
                  <HomeInfoBox>
                    <img src="./img/homeTestImg.png" alt="" />
                    <h3>발달 영역 - 인지란 무엇일까?</h3>
                    <p>일상생활에서 필요한 여러 가지</p>
                  </HomeInfoBox>
                  <GoTestBtn to="/test">발달 테스트 하러가기</GoTestBtn>
                </HomeInfo>
              </>
            ) : (
              <>
                {loginCheck}
                {appIndex}
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
}
export { UserInfo, KidTabBox, KidTab, KidsImage, UserDetail, LastTest };
export default Home;
