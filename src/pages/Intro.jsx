import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "../img/start.png";
import { sliderItems } from "../data";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    text-align: center;
    overflow: hidden;
`;

const StartImg = styled.img`
    height: 100%;
    margin: 0 auto;
    transition: all 0.3s ease;
`;

// intro
const IntroContainer = styled.div`
    background-color: #ccc;
    height: 100vh;
    width: 100%;
    dispaly: flex;
`;

const ImageContainer = styled.div`
    width: 100%;
`;
const IntroImageBox = styled.div`
    width: 100%;
    display: flex;
`;

const IntroImage = styled.img`
    flex: 1;
`;
const IntroNav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;

    p {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        background-color: red;
        border-radius: 9999px;
    }
`;
const IntroBtn = styled.button``;

function Intro() {
    const [intro, setIntro] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);

    const handleClick = () => {
        setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        console.log(sliderIndex);
    };


    return (
        <Container>
            {intro === 0 ? (
                <StartImg src={Img} alt=""></StartImg>
            ) : (
                <IntroContainer>
                    <ImageContainer sliderIndex={sliderIndex}>
                        {sliderItems.map((item) => (
                            <IntroImageBox key={item.id}>
                                <IntroImage src={item.img}></IntroImage>
                                <p>{item.desc}</p>
                            </IntroImageBox>
                        ))}
                    </ImageContainer>
                    <IntroNav>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </IntroNav>
                    <IntroBtn onClick={() => handleClick()}>다음</IntroBtn>
                </IntroContainer>
            )}
        </Container>
    );
}

export default Intro;
