
import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';
import { ContainerStyledPlh } from '../../components/MainContainer';


export const Thumb = styled.div`
  ${ContainerStyledPlh};
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${breakpoints.minTablet} {
    padding-top: 160px;
  }

  @media ${breakpoints.desktop} {
    margin-left: 0;
  }
`;
export const LanContainer = styled.div`
  display: flex;
  justify-content: right;
  //position: absolute;
  margin-top: 25px;
  margin-right: 25px;
  gap:15px;
  @media ${breakpoints.minTablet} {
    padding-top: 160px;
  }

  @media ${breakpoints.desktop} {
    margin-left: 0;
  }
`;


export const Button = styled.button`
display: flex;
text-align: center;
justify-content: center;


padding: 13px 25px;
background: var(--accent-color);
box-shadow: 0px 4px 10px var(--accent-shadow);
border-radius: 30px;
border: 2px solid var(--accent-color);

color: var(--white);
cursor: pointer;
transition: color var(--transition-params);
transition: background var(--transition-params);

&:hover,
&:focus {
  color: var(--accent-color);
  background: transparent;
}

&:disabled {
  background: var(--secondary-text-color);
  box-shadow: 0px 4px 10px var(--secondary-text-color);
}
`;

