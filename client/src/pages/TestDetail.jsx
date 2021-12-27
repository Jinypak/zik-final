import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./checkBox.css";
import { testDetails } from "../data2";
import { useState } from "react";
import TestModal from "../components/TestModal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const PrevLink = styled(Link)`
  margin: 10px;
  padding-top: 10px;
  text-decoration: none;
  color: #ccc;
  text-decoration: none;
`;

const TestTab = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto 20px;

  p {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 5px 5px;
  }
`;

const TestContainer = styled.div``;
const TestBox = styled.div`
  display: flex;
  flex-direction: column;

  .flexContainer {
    display: flex;
    justify-content: space-around;
  }
`;
const TestNumber = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  line-height: 30px;
  text-align: center;
  border-radius: 9999px;
`;
const TestText = styled.div`
  width: 80%;
`;
const TestCheckBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CheckBoxStyling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  span {
    width: 50px;
    height: 50px;
    border-radius: 9999px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    opacity: 0.5;
  }

  .low {
    background-color: #7acbcf;
  }
  .middle {
    background-color: #fdb03f;
  }
  .high {
    background-color: #fd7765;
  }

  .active {
    opacity: 1;
  }

  label {
    margin-top: 10px;
  }
`;

const TestCheck = styled.input`
  display: none;
`;

const TestLinkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const PrevBtn = styled(Link)`
  width: 40%;
  color: #289ca4;
  text-align: center;
  height: 50px;
  border-radius: 30px;
  text-decoration: none;
  line-height: 50px;
  border: 1px solid #289ca4;
  margin-bottom: 5vh;
`;
const NextBtn = styled(Link)`
  width: 40%;
  background-color: #289ca4;
  text-align: center;
  height: 50px;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  line-height: 50px;
  margin-bottom: 5vh;
`;

const TestTitle = styled.h2`
  margin: 0 auto;
  padding: 0;
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  p {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #289ca4;
    color: #fff;
    font-size: 24px;
    text-align: center;
  }
`;

function TestDetail(props) {
  const [resultCheck, setResultCheck] = useState(false);

  let history = useHistory();

  const handleClick = (e) => {
    if (props.testIndex < 4) {
      props.setTestIndex(props.testIndex + e);
    } else {
      setResultCheck(true);
      props.setTestIndex(0);
    }
  };

  return (
    <Container>
      <PrevLink onClick={() => history.goBack()}>&lt; 이전 페이지로</PrevLink>
      <TestTitle>
        발달 검사 <p>?</p>
      </TestTitle>
      <TestTab>
        <p>인지</p>
        <p>사회성</p>
        <p>운동</p>
        <p>언어</p>
        <p>자조</p>
      </TestTab>
      <TestDetailBox></TestDetailBox>
      <TestLinkBox>
        <PrevBtn onClick={() => handleClick(-1)}>&lt; 이전</PrevBtn>
        {props.testIndex !== 4 ? (
          <NextBtn onClick={() => handleClick(1)}>다음 &gt; </NextBtn>
        ) : (
          <NextBtn onClick={() => handleClick()}>결과보기</NextBtn>
        )}
        {resultCheck === true ? <TestModal></TestModal> : null}
      </TestLinkBox>
    </Container>
  );
}

function TestDetailBox() {
  return (
    <TestContainer>
      {testDetails.map((data) => (
        <TestBox>
          <div className="flexContainer">
            <TestNumber>{data.id}</TestNumber>
            <TestText>{data.desc}</TestText>
          </div>
          <TestCheckBox>
            <CheckBoxStyling>
              <span class="low">하</span>
              <label for="하지 못한다">하지 못한다</label>
            </CheckBoxStyling>

            <CheckBoxStyling>
              <span class="middle  active">중</span>
              <label for="가끔한다">가끔한다</label>
            </CheckBoxStyling>

            <CheckBoxStyling>
              <span class="high">상</span>
              <label for="자주 한다">자주 한다</label>
            </CheckBoxStyling>
          </TestCheckBox>
        </TestBox>
      ))}
    </TestContainer>
  );
}

export default TestDetail;
