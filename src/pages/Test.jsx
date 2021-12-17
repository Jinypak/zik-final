import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: -1px;
    margin-bottom: 15px;
`;

const TestInfoA = styled.div`
    width: 95%;
    margin: 20px auto;
    border: 1px solid #000;
    border-radius: 20px;
`;
const InfoAText = styled.div`
    padding: 10px;
`;
const TestInfoB = styled.div`
    width: 95%;
    margin: 20px auto;
    border: 1px solid #000;
    border-radius: 20px;
`;
const InfoBText = styled.div``;
const TestBtn = styled(Link)``;

function Test() {
    return (
        <Container>
            <TestInfoA>
                <InfoAText>
                    <h2>발달검사 상세설명</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus saepe incidunt repellendus aliquid laboriosam
                        pariatur sapiente, tempore modi qui commodi deleniti
                        iusto quidem recusandae labore obcaecati! Ex inventore
                        reiciendis facere.
                    </p>
                </InfoAText>
            </TestInfoA>
            <TestInfoB>
                <InfoBText>
                    <h2>검사 진행사항에 대한 설명</h2>
                    <img src="" alt="" />
                </InfoBText>
            </TestInfoB>
            <TestBtn to="/test/detail/1">발달검사 테스트 시작</TestBtn>

        </Container>
    );
}

export default Test;
