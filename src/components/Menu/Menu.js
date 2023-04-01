import {HouseLine} from 'phosphor-react';
//import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import '../Menu/menuhome.css';

const NavStyle = styled.nav`
width: 100vw;
display: flex;
-webkit-justify-content: space-between;
flex-direction: row;
position: fixed;
background-color: white;
border-radius: 0px 0px 5px 5px;
border-bottom: 2px solid lightgrey;
padding: 5px;

button {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-left: 75px;
}

ul { 
    display: flex;
    flex-wrap: nowrap; 
    margin-right: 55px;
    & > li {
        margin: 0px 10px 0px 10px;
        list-style-type: none;
        position: relative;
        top: 12px;
    }
}
a {
    text-decoration: none;
    color: black;
}
`
export default function Menu() {
    return (
        <NavStyle>
            <button>
                <a href='rotarota'>
                    <HouseLine style={{width: '35', height: '35'}} />
                </a>
            </button>
          
            <ul>
                <li>
                    <a href='#inicio' id="menu-home">Início</a>
                </li>
                <li>
                    <a href='#projetos' id="menu-home">Projetos</a>
                </li>
                <li>
                    <a href='#formacao' id="menu-home">Formação/Cursos</a>
                </li>
                <li>
                    <a href='#contato' id="menu-home">Contato</a>
                </li>
            </ul>
        </NavStyle>
    )
}

//position: relative; right: 220px;
//position: relative; left: 240px;
//
//
//
//
//
//
//