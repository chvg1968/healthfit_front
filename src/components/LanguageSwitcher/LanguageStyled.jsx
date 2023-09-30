
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
  position: absolute;
  top: 80px;
  right: 32px;
  gap:5px;
  @media ${breakpoints.minTablet} {
    top: 100px;
    gap:15px;
  }

  @media ${breakpoints.desktop} {
    top: 125px;
    gap:15px;
  }
`;

export const LanContainerAuthCalculator = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  top: 125px;
  right: 20px;
  gap:5px;
  @media ${breakpoints.minTablet} {
    top: 100px;
    gap:15px;
    right: 36px;
  }

  @media ${breakpoints.desktop} {
    top: 170px;
    gap:15px;
    right: 33px;
  }
`;
export const LanContainerAuth = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  top: 165px;
  right: 36px;
  gap:5px;
  @media ${breakpoints.minTablet} {
    top: 100px;
    gap:15px;
    right: 36px;
  }

  @media ${breakpoints.desktop} {
    top: 170px;
    gap:15px;
    right: 33px;
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
`
export const ButtonLan = styled.button`
display: flex;
text-align: center;
justify-content: center;
font-size: 11px;

padding: 5px 10px;
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

