import styled from "styled-components";
import Card from "../CardProject";

const SectionStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 180px;
  background-color: white;
  width: 100%;
  padding: 56px;
  place-items: center;
  height: 100vh;

  h2 {
    font-size: 8rem;
    width: 250px;
    line-height: 1;
    text-transform: uppercase;
    word-break: break-all;
    max-width: 4ch;
    margin-left: 220px;
    color: #e1e1e6;
  }
  .config {
    margin-left: 300px;
  }
  .info-projects {
    font-size: 1.5rem;
    line-height: 1.33;
    max-width: 40ch;
    margin-bottom: 60px;
    color: #7c7c8a;
  }
  .project {
    & > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 10px 20px;
      background: rgba(18, 18, 20, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border: 1px solid rgba(18, 18, 20, 0.25);
      padding: 20px;
      width: 600px;
      overflow: hidden;
      margin: 20px 0px 20px 0px;
      & > h3 {
        color: #e1e1e6;
      }
      & > span {
        color: #7c7c8a;
      }
      & > p {
        color: #7c7c8a;
        width: 200px;
        height: 50px;
      }
    }
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
export default function Projects() {
  return (
    <SectionStyle id="projetos">
      <h2>PROJETOS</h2>

      <div className="config">
        <p className="info-projects">
          Abaixo tem disponível alguns dos meus projetos pessoais e projetos
          relacionados aos cursos que eu já realizei. Nesses projetos utilizei
          as tecnologias <b>HTML</b>, <b>CSS</b> e <b>JavaScript.</b>
          <br />
          Nos APP Web utilizei <b>React.</b>
        </p>

        <div className="project">
          <Card
            nameProject={"Teste"}
            nivelProject={'Testeeeeeee'}
            yearProject={2022}
            tech1={"React"}
            tech2={"HTML 5"}
            tech3={"CSS 3"}
            tech4={"Node.Js"}
          />
          
          <Card
            nameProject={"Teste"}
            nivelProject={'Testeeeeeee'}
            yearProject={2022}
            tech1={"React"}
            tech2={"HTML 5"}
            tech3={"CSS 3"}
            tech4={"Node.Js"}
          />

          <Card
            nameProject={"Teste"}
            nivelProject={'Testeeeeeee'}
            yearProject={2022}
            tech1={"React"}
            tech2={"HTML 5"}
            tech3={"CSS 3"}
            tech4={"Node.Js"}
          />

          <Card
            nameProject={"Teste"}
            nivelProject={'Testeeeeeee'}
            yearProject={2022}
            tech1={"React"}
            tech2={"HTML 5"}
            tech3={"CSS 3"}
            tech4={"Node.Js"}
          />
        </div>
      </div>
    </SectionStyle>
  );
}
