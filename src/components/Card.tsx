import { FC, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
    title: string,
    subtitle?: string,
    text?: string,
    image?: string,
    alt?: string,
    component?: ReactNode,
    color?: string
};

const Card: FC<CardProps> = ({ title, subtitle, text, image, alt, component, color }) => {
    return (
        <CardMain style={{ backgroundColor: color }}>
            <h2>{title}</h2>
            {subtitle && <h3>Tecnologias: {subtitle}</h3>}
            {image && <img src={image} alt={alt} />}
            {component && component}
            {text && <p>{text}</p>}
        </CardMain>
    )
};

export default Card;

const CardMain = styled.section`
    width: 350px;
    height: 400px;
    margin: 10px 0;
    color: black;
    font-family: "Roboto";
    font-weight: 500;
    border-radius: 10px;
    padding: 30px;
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
    
    p{
        font-weight: 400;
        font-size: 1rem;
        text-align: start;
    }
`