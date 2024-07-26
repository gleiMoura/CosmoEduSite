import { FC, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
    title: string,
    image?: string,
    alt?: string,
    subtitle?: string,
    component?: ReactNode
};

const Card: FC<CardProps> = ({ title, image, alt, subtitle, component }) => {
    return (
        <CardMain>
            <h2>{title}</h2>
            {image && <img src={image} alt={alt} />}
            {component && component}
            {subtitle && <p>{subtitle}</p>}
        </CardMain>
    )
};

export default Card;

const CardMain = styled.section`
    width: 350px;
    height: 350px;
    margin: 10px 0;
    color: black;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 1.5rem;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 80%;
    }

    h2{
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 20px;
    }
`