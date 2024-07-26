import { FC } from "react";
import styled from "styled-components";

interface TitleProps {
    title: string;
}
const Title: FC<TitleProps> = ({ title }) => {
    return (
        <TitleMain>
            {title}
        </TitleMain>
    )
};

export default Title;

const TitleMain = styled.h1`
    font-family: "Roboto";
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    padding: 10px;
    border-bottom: 5px solid white;
    border-left: 3px solid white;
    border-right: 3px solid white
`;
