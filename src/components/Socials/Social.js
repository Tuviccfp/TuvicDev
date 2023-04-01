import styled from "styled-components";

const NavSocials = styled.nav`
    width: 300px;
    position: fixed;
    top: 290px;
    right: -200px;

    li {
            list-style-type: none;
            width: 50px;
            height: 50px;
        }

    img {
        width: 40px;
        height: 40px;
        background-color: grey;
        border-radius: 30px;
    }
`
export default function Socials() {
    return (
        <NavSocials>
            <ul>
                <li className="github">
                    <img src="github (2).png" alt="icon github preto"/> 
                </li>

                <li className="linkedin">
                    <img src="linkedin.png" alt="icon linkedin preto"/>
                </li>

                <li className="twitter">
                    <img src="twitter.png" alt="icon twitter preto"/>
                </li>

                <li className="whatsapp">
                    <img src="whatsapp.png" alt="icon twitter preto"/>
                </li>
            </ul>
        </NavSocials>
    )
}