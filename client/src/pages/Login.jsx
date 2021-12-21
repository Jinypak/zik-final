import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "../components/LoginModal";

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
    input {
        border: none;
        border-bottom: 1px solid #000;
        margin: 10px 0;
    }
`;

const LoginInput = styled.input`
    width: 80%;
`;

const Line = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .line {
        height: 0.5px;
        width: 70%;
        background-color: lightgray;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: -1;
    }

    .or {
        border: 2px solid lightgray;
        border-radius: 50%;
        padding: 10px;
        color: gray;
        background-color: white;
        font-weight: bold;
    }
`;
const SocialLogin = styled.div`
    display: flex;

    padding: 20px;
    button {
        background-color: #000;
        color: #fff;
        margin: 0 10px;
    }
`;

const StyleLink = styled(Link)`
    text-decoration: none;
    padding: 10px 40px;
    margin: 10px;
    border: none;
    border-radius: 30px;
    background-color: green;
`;

function Login({ loginCheck, setLoginCheck }) {

    useEffect(() => {
      setLoginCheck(false);
      console.log(loginCheck);
    }, [])

    const naver = () => {
        window.open("http://localhost:3000/auth/naver", "_self");
    };
    const google = () => {
        window.open("http://localhost:3000/auth/google", "_self");
    };
    const kakao = () => {
        window.open("http://localhost:3000/auth/kakao", "_self");
    };
    const facebook = () => {
        window.open("http://localhost:3000/auth/facebook", "_self");
    };

    return (
        <div>
            {loginCheck === false ? (
                <LoginModal></LoginModal>
            ) : (
                <>
                    <LoginForm>
                        <LoginInput type="text" placeholder="user@email.com" />
                        <LoginInput type="text" placeholder="password" />
                        <StyleLink
                            to="/home"
                            onClick={() => setLoginCheck(true)}
                        >
                            로그인
                        </StyleLink>
                        <StyleLink to="/signup">회원가입</StyleLink>
                    </LoginForm>
                    <Line>
                        <div className="line"></div>
                        <div className="or">또는</div>
                    </Line>
                    <SocialLogin>
                        <button className="naver" onClick={naver}>
                            Login to Naver
                        </button>
                        <button className="google" onClick={google}>
                            Login to Google
                        </button>
                        <button className="kakao" onClick={kakao}>
                            Login to KAKAO
                        </button>
                        <button className="facebook" onClick={facebook}>
                            Login to Facebook
                        </button>
                    </SocialLogin>
                </>
            )}
        </div>
    );
}

export default Login;
