import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuItems } from "../data2";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10vh;
    background-color: #fff;
    display: flex;
    align-items: space-evenly;
    justify-content: center;
    z-index:8;
    border-top: 1px solid #ccc;
    padding: 0 10px;
`;

const Menu = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 0 auto;
`;
const MenuImg = styled.img``;
const MenuTitle = styled.div`
color: #000;
`;

function Footer() {
    return (
        <Container>
            {menuItems.map((menuItem) => 
                <Menu to={menuItem.link} key={menuItem.id}>
                    <MenuImg src={menuItem.img}></MenuImg>
                    <MenuTitle>{menuItem.title}</MenuTitle>
                </Menu>
            )}
        </Container>
    );
}

export default Footer;
