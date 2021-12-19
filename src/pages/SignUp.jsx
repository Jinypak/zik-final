import { Link } from "react-router-dom"
import styled from "styled-components"


const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: start;
align-items: start;

input {
    border: none;
    border-bottom: 1px solid #000;
}
`

const StyledLink = styled(Link)`
 margin: 0 auto;
 text-decoration: none;
 padding: 10px 20px;
 border-radius: 20px;
 background-color: #000;
 color: #fff;
`
function SignUp() {
return (
<Container>
    <input type="text" placeholder="이메일 입력" />
    <input type="text" placeholder="비밀번호 입력" />
    <input type="text" placeholder="비밀번호 확인" />
    <input type="text" placeholder="휴대폰 번호 입력" />
    <input type="text" placeholder="주소 입력" />
    <StyledLink to="/home">회원가입 하기</StyledLink>
</Container>
)
}

export default SignUp