import styled from 'styled-components';
import { FormBtnBase } from '../../components/DiaryAddProductForm/DiaryAddProductForm.styled';
import { breakpoints } from '../../assets/sizes';
import { ContainerStyledPlh } from '../../components';

export const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakpoints.desktop} {
    flex-direction: row;
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
export const ContainerDiary = styled.div`
  ${ContainerStyledPlh};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding-top: 40px;
  padding-bottom: 60px;

  @media ${breakpoints.minTablet} {
    align-items: flex-start;
    gap: 60px;
    padding-top: 100px;
    padding-bottom: 55px;
  }
  @media ${breakpoints.desktop} {
    padding-top: 147px;
    margin-left: 0;
  }
`;

export const AddBtnMobile = styled(FormBtnBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  
`;

export const SidebarWrap = styled.div`
  @media ${breakpoints.desktop} {
    height: 100%;
    background-color: var(--secondary-background-color);
  }
`;
