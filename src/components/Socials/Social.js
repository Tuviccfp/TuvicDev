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
    cursor: pointer;
  }
`;
export default function Socials() {
  return (
    <NavSocials>
      <ul>
        <li className="github">
          <a href="https://github.com/Tuviccfp">
            <img src="github (2).png" alt="icon github preto" />
          </a>
        </li>

        <li className="linkedin">
          <a href="https://www.linkedin.com/in/victor-cordeiro-fraguas-b5b586266/">
            <img src="linkedin.png" alt="icon linkedin preto" />
          </a>
        </li>

        <li className="twitter">
          <a href="#">
            <img src="twitter.png" alt="icon twitter preto" />
          </a>
        </li>

        <li className="whatsapp">
          <a href="https://wa.me/5521964818546">
            <img src="whatsapp.png" alt="icon twitter preto" />
          </a>
        </li>
      </ul>
    </NavSocials>
  );
}
