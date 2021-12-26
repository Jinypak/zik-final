import styled from "styled-components"

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
    line-height: 10vh;
    width: 100%;
    text-align: center;
    background-color:#ccc;
    z-index:8;
`

function Header() {
    return (
        <Container>
            <img src="./img/logo.png" alt="" />
        </Container>
    )
}

export default Header
