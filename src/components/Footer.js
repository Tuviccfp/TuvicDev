import { Code, Envelope, GithubLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react"
import styled from "styled-components"

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
    place-items:center; 
}
.contacts {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    gap: 25px 25px;
    & > .github, .gmail {
        width: 250px;
    }
}
.icon-contacts {
    width: 30px;
    height: 30px;
    margin-right: 3px;
}
`
export default function Footer() {
    return (
        <SectionStyle id="contato">
            <div className="footer">
                <h3>Gostou do meu trabalho? Entre em contato comigo e faça um orçamento ou me contrate para a sua empresa! <Code/></h3>
                <ul className="contacts">
                    <li className="github"><GithubLogo className="icon-contacts"/>https://github.com/Tuviccfp</li>
                    <li className="linkedin"><LinkedinLogo className="icon-contacts"/></li>
                    <li className="twitter"><TwitterLogo className="icon-contacts"/></li>
                    <li className="whatsapp"><WhatsappLogo className="icon-contacts"/>(XX) XXXXX-XXXX</li>
                    <li className="gmail"><Envelope className="icon-contacts"/> victorcordeirofp@gmail.com</li>
                </ul>
            </div>
        </SectionStyle>
    )
}