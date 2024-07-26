import styled from "styled-components";

const Header = () => {
    return (
        <HeaderMain>
            <a>Stack</a>
            <a>Portfólio</a>
        </HeaderMain>
    )
};

const HeaderMain = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F2C744;

    a{
        color: black;
        font-weight: 500;
        font-size: 2rem;
        font-family: 'Roboto';
    }
`;

export default Header;