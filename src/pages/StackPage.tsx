import { FC } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Icon from "../components/Icon";

export const Stack: FC = () => {
    return (
        <Main>
            <h1>Tecnologias</h1>
            <Cards>
                <Card title="Front End" component={
                    <>
                        <Icon name="ReactJS" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        <Icon name="HTML" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <Icon name="CSS" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    </>
                } />
                <Card title="Back End" component={
                    <>
                        <Icon name="MongoDB" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                        <Icon name="PostgreSQL" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                        <Icon name="Express" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                    </>
                } />
                <Card title="Complementares" component={
                    <>
                        <Icon name="Git" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                        <Icon name="Jest" size={70} link="https://cdn.iconscout.com/icon/free/png-512/free-jest-3521517-2945020.png?f=avif&w=256" />
                        <Icon name="Docker" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                    </>
                } />
            </Cards>
        </Main>
    )
};

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #F2C744;

    h1{
        font-family: "Roboto";
        font-weight: 500;
        font-size: 2rem;
        text-align: center;
        padding: 20px
    }
`;

const Cards = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`