import { css } from 'lit';

export const AppComponentStyles = css`
  :host {
    display: block;
    font-family: sans-serif;
  }
  
  header {
    display: flex;
    margin-left: -5px;
    margin-right: -5px;
  }
  
  header > * {
    padding: 0 5px;
  }
`;
