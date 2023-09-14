"use client";
import styled, { CSSObject } from "styled-components";
import css from "styled-jsx/css";

const Container = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  z-index: 5;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  padding: 1em;
  gap: 1em;
  margin-left: auto;
  align-items: flex-end;
  background: #818ccf;
  backdrop-filter: blur(3px);
  color: #001d53;
  cursor: pointer;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 auto;
    gap: 1em;
    font-size: 1.1em;
  }

  a {
    color: #001d53;
    text-decoration: none;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      display: flex;
    `}
`;
export default Container;
