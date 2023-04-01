import {
  Code,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";
import styled from "styled-components";

const SectionStyle = styled.section`
  display: grid;
  place-items: center;
  padding: 20px;
  background-color: #121214;
  width: 100%;
  color: #c4c4cc;

  h3 {
    font-size: 1.5rem;
  }
  .footer {
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;
    place-items: center;
  }
  .contacts {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    gap: 25px 25px;
    & > .github,
    .gmail {
      width: 250px;
    }
  }
  .icon-contacts {
    width: 30px;
    height: 30px;
    margin-right: 3px;
  }
  a {
    text-decoration: none;
    color: #c4c4cc;
  }
`;
export default function Footer() {
  return (
    <SectionStyle id="contato">
      <div className="footer">
        <h3>
          Gostou do meu trabalho? Entre em contato comigo e faça um orçamento ou
          me contrate para a sua empresa! <Code />
        </h3>
        <ul className="contacts">
          <li className="github">
            <GithubLogo className="icon-contacts" />
            <a href="https://github.com/Tuviccfp">Meu GitHub</a>
          </li>
          <li className="linkedin">
            <LinkedinLogo className="icon-contacts" />
            <a href="https://www.linkedin.com/in/victor-cordeiro-fraguas-b5b586266/">
              Linkedin
            </a>
          </li>
          <li className="twitter">
            <TwitterLogo className="icon-contacts" />
          </li>
          <li className="whatsapp">
            <WhatsappLogo className="icon-contacts" />
            <a href="https://wa.me/5521964818546">WhatsApp</a>
          </li>
          <li className="gmail">
            <Envelope className="icon-contacts" />
            victorcordeirofp@gmail.com
          </li>
        </ul>
      </div>
    </SectionStyle>
  );
}
