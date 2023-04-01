import styled from "styled-components"

const SectionStyle = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 180px;
    place-items: center;
    background: rgba( 32, 32, 36, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-top: 50px;
    width: 100%;
    padding: 40px;
    height: 100vh;
    box-sizing: border-box;

    h2 {
        font-size: 8rem;
        width: 250px;
        line-height: 1;
        text-transform: uppercase;
        word-break: break-all;
        max-width: 4ch;
        margin-left: 180px;
    }

    .config {
        margin-left: 300px;
    }
    .info-formacao {
        font-size: 1.5rem;
        line-height: 1.33;
        max-width: 40ch;
        margin-bottom: 60px;
    }
    .facul {
        margin-bottom: 45px;
    }
    #curses {
        display: grid;
        grid-template-columns: 1fr ;
        gap: 10px 20px;    
        margin: 0px -30px; 10px 0px;
    }
`
export default function Training() {
    return (
        <SectionStyle id="formacao">
            <h2>FORMAÇÃO</h2>

            <div className="config">
                <p className="info-formacao">
                    Abaixo tem disponível alguns dos meus projetos pessoais e projetos relacionados aos cursos que eu já realizei. 
                    Nesses projetos utilizei as tecnologias <b>HTML</b>, <b>CSS</b> e <b>JavaScript.</b><br/>
                    Nos APP Web utilizei <b>React.</b>
                </p>

                <div className="facul">
                    <h3 className="facul-type">Graduação</h3>
                    <p className="facul-curse">Ciência da Computação</p>
                    <span className="facul-inst">Faculdade Descomplica</span>
                </div>

                <ul className="curses-idioma">
                    <li id="curses">
                        <h3 className="curse-title">TESTE</h3>
                        <p className="data">Início: 00/0000 <span>Conclusão: 00/0000</span></p>
                        <span className="curse-carga">Carga Horária: 00hrs</span>
                    </li>
                    <li id="curses">
                        <h3 className="curse-title">TESTE</h3>
                        <p className="data">Início: 00/0000<span>Conclusão: 00/0000</span></p>
                        <span className="curse-carga">Carga Horária: 00hrs</span>
                    </li>
                    <li id="curses">
                        <h3 className="curse-title">TESTE</h3>
                        <p className="data">Início: 00/0000<span>Conclusão: 00/0000</span></p>
                        <span className="curse-carga">Carga Horária: 00hrs</span>
                    </li>
                    <li id="curses">
                        <h3 className="curse-title">TESTE</h3>
                        <p className="data">Início: 00/0000<span>Conclusão: 00/0000</span></p>
                        <span className="curse-carga">Carga Horária: 00hrs</span>
                    </li>
                </ul>
            </div>
        </SectionStyle>
    )
}