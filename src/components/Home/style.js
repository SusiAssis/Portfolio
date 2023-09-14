"use client";
import styled from "styled-components";

const HomeStyle = styled.div`
  background-color: #eaebff;

  .contanier_sections {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
    padding: 150px 1em 1em 1em;
  }

  .contanier_text {
    gap: 1em;
    h1 {
      font-size: 1.4em;
    }

    .text_world {
      align-items: center;
      display: flex;
      gap: 0.5em;
    }

    h2 {
      font-size: 2.8em;
    }

    p {
      font-size: 1.4em;
    }
  }

  section {
    width: 450px;
    height: 400px;
    color: #001d53;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contanier_image {
    display: flex;
    justify-content: space-around;
    object-fit: cover;
  }

  .purple {
    background-color: #5667a5;
    border-radius: 1.5em;
    position: relative;
    left: 15px;
    top: 15px;
    width: 350px;
    height: 350px;
  }

  .contanier_lista_tech {
    padding: 2em 0em;
    max-width: 1000px;
    margin: 0 auto;
  }

  .imagem_section {
    z-index: 1;
    position: absolute;
    border-radius: 1.5em;
    border: 3.5px solid #ffffff;
    width: 350px;
    height: 350px;
  }

  a {
    color: #001d53;
    background-color: #bfc4fe;
    text-decoration: none;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    padding: 0.4em 0.5em;
    border-radius: 0.5em;
    gap: 0.3em;
  }

  ul {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 1em;
    list-style: none;
  }

  @media (max-width: 750px) {
    .contanier_sections {
      flex-direction: column;
      width: 100%;
    }

    .contanier_text {
      align-items: center;
      display: flex;
      gap: 1em;
      word-wrap: break-word;

      .text_world {
        gap: 0.2em;
      }

      h1 {
        font-size: 1.1em;
      }

      h2 {
        font-size: 2em;
      }
    }

    .contanier_image {
      width: 310px;
      height: 310px;
      align-items: center;
      object-fit: cover;
    }

    .imagem_section {
      width: 260px;
      height: 260px;
    }

    section {
      width: 260px;
      height: 260px;
    }

    .purple {
      width: 260px;
      height: 260px;
    }

    .contanier_lista_tech {
      width: 100%;
      height: 120px;

      ul {
        padding: 0.5em;
        overflow-y: auto;
      }

      ::-webkit-scrollbar {
        height: 3.5px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #001d53; /* Cor da thumb (a barra de arrastar) */
        border-radius: 4px; /* Arredondamento da thumb */
      }
    }
  }
`;
export default HomeStyle;
