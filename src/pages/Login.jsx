import { Link } from "react-router-dom"
import styled from "styled-components"



const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        border: none;
        border-bottom: 1px solid #000;
        margin: 10px 0;
    }
`
const Line = styled.div`
    width: 100%;
    position: relative;

    .line {
        position: absolute;
        width: 90%;
        border: 1px dashed #000;
        left: 0;
        right:0;
        top:50%;
        bottom:50%;
        margin: auto;
        z-index:1;
    }

    .or {
        padding: 10px;
        width: 30px;
        height: 30px;
        margin: 0 auto;
        border: 1px solid #000;
        text-align: center;
        border-radius: 9999px;
        background: red;
        z-index: 3;
    }
`
const SocialLogin = styled.div`

    display: flex;

    padding: 20px;
    button {
        background-color: #000;
        color: #fff;
        margin: 0 10px;
    }
`

function Login() {
    return (
        <div>
            <LoginForm>
                <input type="text" placeholder="user@email.com" />
                <input type="text" placeholder="password" />
                <Link to="signup">회원가입하기</Link>
            </LoginForm>
            <Line>
                <div className="line"></div>
                <div className="or">또는</div>
            </Line>
            <SocialLogin>
                <button className="naver">Login to Naver</button>
                <button className="google">Login to Google</button>
                <button className="kakao">Login to KAKAO</button>
                <button className="facebook">Login to Facebook</button>
            </SocialLogin>
        </div>
    )
}

export default Login
