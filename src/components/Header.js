import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color:#ccc;
`

function Header() {
    return (
        <Container>
            <img src="./img/logo.png" alt="" />
        </Container>
    )
}

export default Header
