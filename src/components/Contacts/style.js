"use client";
import styled from "styled-components";

const ContactsStyle = styled.div`
  background-color: #001d53;

  .contanier_contacts {
    margin: 0 auto;
    max-width: 1000px;
    padding: 8em 0em;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: #ffffff;
  }

  .contanier_section {
    display: flex;
    flex-direction: row;
    gap: 2em;
  }

  section {
    width: 50%;
    padding: 1em;
    gap: 1em;
  }

  .contanier_image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border: 3px solid #ffffff;
    border-radius: 1em 0em;
  }

  .contanier_icons {
    display: flex;
    gap: 1em;
  }

  form {
    display: flex;
    gap: 1em;
    flex-direction: column;
  }

  label {
    color: #ffffff;
    text-align: start;
  }

  input {
    padding: 0.8em;
    border-radius: 0.5em;
    border: none;
    font-family: cursive;
  }

  textarea {
    padding: 0.8em;
    border-radius: 0.5em;
    border: none;
    min-height: 8em;
    font-family: cursive;
  }

  button {
    margin-top: 1.1em;
    width: 30%;
    padding: 0.5em;
    border-radius: 0.5em;
    border: none;
    color: #ffffff;
    background: #5667a5;
    font-family: cursive;
    font-weight: 500;
    font-size: 15px;
  }
`;
export default ContactsStyle;
