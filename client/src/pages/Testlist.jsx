import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { resultData } from "../data2";

const Container = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`;
const ResultBox = styled.div`
  width: 84%;
  border: 1px solid #000;
  border-radius: 20px;
  margin: 20px auto;
  padding: 20px;
  position: relative;

  .testDate {
    position: absolute;
    margin: 0 auto;
    top: 0;
  }
  .resultLink {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    color: #289ca4;
  }
  .testList {
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      text-align: center;
      h3 {
        background-color: #F07272;
        color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 9999px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
`;

function Testlist() {
  const [listIntroCheck, setListIntroCheck] = useState(false);
  useEffect(() => {
    setListIntroCheck(true);
  }, []);

  return (
    <Container>
      {listIntroCheck === true ? (
        <ListIntro setListIntroCheck={setListIntroCheck}></ListIntro>
      ) : null}
      검사결과 리스트
      {resultData.map((result) => (
        <ResultBox key={result.id}>
          <p className="testDate">{result.date} : 2021.12. 21</p>
          <div className="testList">
            <li>
              <h3>상</h3>
              인지
            </li>
            <li>
              <h3>상</h3>
              사회성
            </li>
            <li>
              <h3>상</h3>
              운동
            </li>
            <li>
              <h3>상</h3>
              언어
            </li>
            <li>
              <h3>상</h3>
              자조
            </li>
          </div>
          <Link to="testlist/result/:id" className="resultLink">
            분석 결과 보기 &gt;
          </Link>
        </ResultBox>
      ))}
    </Container>
  );
}

const ListIntroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
`;

const IntroBox = styled.div`
  position: fixed;
  top: 30%;
  left: 2%;
  right: 2%;
  bottom: 30%;
  background-color: #fff;
  z-index: 11;
  border-radius: 20px;
  border: 1px solid #000;
  padding: 10px;
`;

const ListIntroBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  border: none;
`;

function ListIntro({ setListIntroCheck }) {
  return (
    <ListIntroContainer>
      <IntroBox>
        <p>
          분석 결과보기&gt;를 누르시면 종합 검사결과를 다시 확인하실 수
          있습니다.
        </p>
        <p>
          비교하기를 누르시면 날짜별 검사 이력 비교하기를 사용하실 수 있습니다.
          결과비교는 최대 3개까지 가능하며, 5가지 발달 영역의 점수를 각 날짜별로
          비교하여 보여줍니다.
        </p>
        <ListIntroBtn onClick={() => setListIntroCheck(false)}>
          닫기
        </ListIntroBtn>
      </IntroBox>
    </ListIntroContainer>
  );
}

export default Testlist;
