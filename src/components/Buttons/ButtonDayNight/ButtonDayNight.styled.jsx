import styled, { css } from 'styled-components';

export const ButtonStyleDayNight = css`
    display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  outline: none;
  position: absolute;
  bottom:100px;
  right:32px
`;

export const BtnDN = styled.button`
  ${ButtonStyleDayNight}
`;
