import { FC } from "react";
import styled from "styled-components";
import Title from "../components/Title";

export const Portfolio: FC = () => {
    return (
        <Main>
            <Title title="Portfólio" />
        </Main>
    )
};

const Main = styled.main`
    width: 100%;
    height: auto;
    min-height: 100vh;
`
