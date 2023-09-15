"use client";
import styled from "styled-components";

const ProjectsStyle = styled.div`
  background-color: #eaebff;

  .contanier_project {
    margin: 0 auto;
    max-width: 1000px;
    padding: 8em 0em;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  h1,
  h3 {
    color: #001d53;
  }

  ul {
    padding: 1em 0em;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    overflow-y: auto;
  }

  li {
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;

    a {
      text-decoration: none;
      background-color: #001d53;
      padding: 0.4em;
      border-radius: 0.8em;
      color: #eaebff;
      width: 50%;
    }
  }

  ::-webkit-scrollbar {
    width: 2px;
    background-color: #ffffff;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #001d53; /* Cor da thumb (a barra de arrastar) */
    border-radius: 3px; /* Arredondamento da thumb */
  }
`;
export default ProjectsStyle;
