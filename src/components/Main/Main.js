import styled from "styled-components";
import { Code } from "phosphor-react";
import CarouselImg from "./CarouselImg";

//justify-content: space-between;    
const StyleMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    background-color: #121214;
    height: 100vh;

    .info-main {
        display: flex;
        align-items: center;
        margin: 0px 0px 0px 80px;
    }
    .icon-code {
        background-color: #9be1fb;
        border-radius: 5px;
        width: 50px; height: 50px;
        margin: 0px 10px 50px 0px;
    }
    h1 {
        color: #e1e1e6;
    }
    p { text-align: center;}
`

export default function Main() {
    return (
        <StyleMain id="inicio">
            <div className="info-main">
                <Code className="icon-code"/>
                <div>
                    <h1>Desenvolvedor Full Stack</h1> <br/>
                    <p style={{color: '#7c7c8a'}}>Victor Cordeiro Fraguas Pires</p>
                </div>
            </div>
            <CarouselImg />
        </StyleMain>
    )
}
