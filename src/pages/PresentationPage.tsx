import { FC } from "react"
import styled from "styled-components";
import IWhite from "/images/eu_claro.png";
import IDark from "/images/eu_escuro.png";
import Header from "../components/Header";
import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";

export const Presentation: FC = () => {
    const modeContext = useContext(ModeContext);

    if (!ModeContext) {
        throw new Error('ModeSwitcher deve ser usado dentro de um ModeProvider');
    }

    const { mode, setMode } = modeContext;

    const changeMode = () => {
        setMode(!mode)
    };
    return (
        <Main mode={mode}>
            <Header changeMode={changeMode} mode={mode} />
            <img src={mode ? IDark : IWhite} className="who_am_i" />
        </Main>
    )
};

const Main = styled.main<{ mode: boolean }>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.mode ? "#21272F" : "white"};

    .who_am_i{
        width: 50%;
        margin-top: 20px;
    }
`

