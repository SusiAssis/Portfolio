"use client";
import styled from "styled-components";

const AbountMeStyled = styled.div`
  background-color: #001d53;
  color: #eaebff;
  width: 100%;
  height: auto;
  padding: 8em 2em;

  .contanier_sections {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    gap: 2em;
    align-items: center;
    justify-content: space-between;
  }

  section {
    width: 450px;
    height: 400px;
  }

  .section_text {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }

  @media (max-width: 750px) {
    padding: 3em 1em;

    .contanier_sections {
      flex-direction: column;
      width: 100%;
    }

    .imagem_section {
      width: 290px;
      height: 290px;
    }

    section {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .section_text {
      min-width: 310px;
      padding: 1em;
      gap: 1em;
    }
  }
`;
export default AbountMeStyled;
