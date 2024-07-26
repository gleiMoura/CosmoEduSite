import { FC } from "react"
import styled from "styled-components";
import WhoAmI from "../assets/quem_sou_eu.png";
import Header from "../components/Header";

export const Presentation: FC = () => {
    return (
        <Main>
            <Header />
            <img src={WhoAmI} className="who_am_i" />
        </Main>
    )
};

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .who_am_i{
        width: 50%
    }
`

