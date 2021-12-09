import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media  (max-width: 675px) {
      ${props}
    }
  `;
};

export const mobiles = (props) => {
  return css`
    @media  (max-width: 376px) {
      ${props}
    }
  `;
};