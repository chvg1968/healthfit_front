import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const ContainerBar = styled.div`
  @media ${breakpoints.desktop} {
    height: 100%;

    background-color: var(--secondary-background-color);
  }
`;
export const SunIcon = styled.div`
  font-size: 1.5em;
  :hover { font-size: 1.6em; }
  
`;
export  const MoonIcon = styled.div`
font-size: 1.5em;
filter:  invert(100%); /* Color de la luna */
:hover { font-size: 1.6em; }
`;
