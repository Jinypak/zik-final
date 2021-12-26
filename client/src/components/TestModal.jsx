import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background: lightgray;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
`;
const ModalBox = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
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

function TestModal() {
    const [transY, setTransY] = useState(100);
    let history = useHistory();
    //   const [transY, setTransY] = useState(100);
    useEffect(() => {
        setTransY(0);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            history.push("/testlist");
        }, 5000);
    }, []);
    return ( 
        <Container>
            <ModalBox transY={transY} setTransY={setTransY}>
                <img src="./img/logo.png" alt="" />
                <h2>테스트 결과를 확인 중입니다.</h2>
                <p>테스트결과 측정 중...</p>
            </ModalBox>
        </Container>
    );
}

export default TestModal;
