import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./checkBox.css";
import { testDetails } from "../data2";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: -1px;
    margin-bottom: 15px;
`;

const PrevLink = styled(Link)`
    margin: 10px;
    padding-top: 10px;
    text-decoration: none;
    color: #ccc;
    border-bottom: 1px solid #ccc;
`;

const TestTab = styled.div`
    display: flex;
    justify-content: center;

    p {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 5px 10px;
        margin: 5px 5px;
        margin-top: 20px;
    }
`;

const TestContainer = styled.div``;
const TestBox = styled.div``;
const TestNumber = styled.div``;
const TestText = styled.div``;
const TestCheckBox = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const CheckBoxStyling = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
const PrevBtn = styled(Link)``;
const NextBtn = styled(Link)``;

function TestDetail(props) {
    let history = useHistory();
    const handleClick = (e) => {
        props.setTestIndex(props.testIndex + e);
    };

    return (
        <Container>
            <PrevLink onClick={() => history.goBack()}>
                &lt;이전 페이지로
            </PrevLink>
            <label class="checkbox">
                <input type="checkbox" />
                <span class="checkbox_icon"></span>
                <span class="checkbox_text"></span>
            </label>
            <TestTab>
                <p>인지</p>
                <p>사회성</p>
                <p>운동</p>
                <p>언어</p>
                <p>자조</p>
            </TestTab>
            <TestDetailBox></TestDetailBox>
            <TestLinkBox>
                <PrevBtn onClick={() => handleClick(-1)}>이전</PrevBtn>
                <NextBtn onClick={() => handleClick(1)}>다음</NextBtn>
            </TestLinkBox>
        </Container>
    );
}

function TestDetailBox() {
    return (
        <TestContainer>
            <TestBox>
                <TestNumber>{testDetails[3].id}</TestNumber>
                <TestText>{testDetails[0].desc}</TestText>
                <TestCheckBox>
                    <CheckBoxStyling>
                        <input
                            class="checkbox_img"
                            type="radio"
                            id="huey"
                            name="drone"
                            value="huey"
                            checked
                        />
                        <label for="하지 못한다">하지 못한다</label>
                    </CheckBoxStyling>

                    <CheckBoxStyling>
                        <TestCheck
                            type="radio"
                            id="dewey"
                            name="drone"
                            value="dewey"
                        />
                        <label for="가끔한다">가끔한다</label>
                    </CheckBoxStyling>

                    <CheckBoxStyling>
                        <TestCheck
                            type="radio"
                            id="louie"
                            name="drone"
                            value="louie"
                        />
                        <label for="자주 한다">자주 한다</label>
                    </CheckBoxStyling>
                </TestCheckBox>
            </TestBox>
        </TestContainer>
    );
}

export default TestDetail;
