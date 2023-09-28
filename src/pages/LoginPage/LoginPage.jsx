import { Background, Header, LoginForm } from '../../components';
import { BtnDN } from '../../components/Buttons/ButtonDayNight/ButtonDayNight.styled';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import styled from 'styled-components';

const LoginPage = ({toggleDarkMode, isdarkMode}) => {
  const themeToggle =()=>{
    toggleDarkMode();
  }
  const MoonIcon = styled.div`
  font-size: 1.5em;
  filter:  invert(100%); /* Color de la luna */
`;

const SunIcon = styled.div`
  font-size: 1.5em;
  
`;
  
  return (
    <Background>
      <LanguageSwitcher/>
      
      <BtnDN onClick={themeToggle}> {isdarkMode ? <SunIcon>☀️</SunIcon> : <MoonIcon>🌙</MoonIcon>}</BtnDN>
      <Header localPage="LoginPage"/>

      <LoginForm />
    </Background>
  );
};
export default LoginPage;
