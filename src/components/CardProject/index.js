import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px 20px;
    background: rgba( 18,18, 20, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border: 1px solid rgba(18,18, 20, 0.25);
    padding: 20px;
    width: 600px;
    overflow: hidden;
    margin: 20px 0px 20px 0px;
    & > h3 {
        color: #e1e1e6;
    } & > span {
        color: #7c7c8a;
    } & > p { 
        color: #7c7c8a;
        width: 200px;
        height: 50px;
    } 

    .project-tech {
        display: flex; 
        flex-direction: row;
        & > li {
            background-color: #9be1fb;
            margin: 0px 10px 0px 10px;
            padding: 5px;
            border-radius: 5px;
            color: #121214;
            list-style-type: none;
        }
    }
`;

export default function Card({
  nameProject,
  nivelProject,
  yearProject,
  tech1,
  tech2,
  tech3,
  tech4,
}) {
  return (
    <CardStyle>
      <h3 className="project-title">{nameProject}</h3>
      <span className="project-nivel">{nivelProject}</span>
      <span className="project-year">{yearProject}</span>
      <ul className="project-tech">
        <li className="tech1">{tech1}</li>
        <li className="tech2">{tech2}</li>
        <li className="tech3">{tech3}</li>
        <li className="tech4">{tech4}</li>
      </ul>
    </CardStyle>
  );
}
