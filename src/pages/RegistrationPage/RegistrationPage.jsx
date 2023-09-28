import { Background, Header, RegistrationForm } from '../../components';
import { BtnDN } from '../../components/Buttons/ButtonDayNight/ButtonDayNight.styled';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import styled from 'styled-components';
const RegistrationPage = ({isdarkMode, toggleDarkMode}) => {
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
      <Header localPage="RegistrationPage" />
      <BtnDN onClick={themeToggle}> {isdarkMode ? <SunIcon>☀️</SunIcon> : <MoonIcon>🌙</MoonIcon>}</BtnDN>
      <RegistrationForm />
    </Background>
  );
};
export default RegistrationPage;
