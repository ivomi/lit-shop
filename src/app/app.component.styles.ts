import { css } from 'lit';

export const AppComponentStyles = css`
  :host {
    display: block;
    font-family: sans-serif;
    text-align: center;
  }

  header > * {
    padding: 0 5px;
  }
  
  img {
    margin: 15px auto;
    height: auto;
    width: 250px;
    max-width: 100%;
  }
`;
