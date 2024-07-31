import { FC } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Data from "../assets/data.json";
import Card from "../components/Card";
import Video from "../components/Video";

export const Portfolio: FC = () => {
    const cardsList = [...Data].reverse();
    return (
        <Main>
            <Title title="Portfólio" />

            <div className="cards">
                {cardsList.map((info, index) => {
                    return (
                        <a href={info.site} target="_blank">
                            <Card
                                key={index}
                                title={info.title || "undefined"}
                                subtitle={info.subtitle}
                                text={info.text}
                                alt={info.title}
                                component={info.type === "frontend" ? <Video path={`/videos/video${info.title}.mp4`} /> : <img src={`/images/${info.title}.png`} />}
                                color="#F2C744"
                            />
                        </a>
                    )
                })}
            </div>
        </Main>
    )
};

const Main = styled.main`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #21272F;

    .cards {
        width: 100%;
        height: auto;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
