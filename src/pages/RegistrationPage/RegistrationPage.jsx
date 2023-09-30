import { Background, Header, RegistrationForm } from '../../components';
import { BtnDN } from '../../components/Buttons/ButtonDayNight/ButtonDayNight.styled';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { themeSelector } from '../../redux/app/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MoonIcon, SunIcon } from './RegistrationPage.styled';

const RegistrationPage = () => {
  const {isDark} = useSelector(state => state.theme)
  const dispatch = useDispatch();
  const themeToggle =()=>{
    dispatch(themeSelector());
  }

  return (
    <Background>
      <LanguageSwitcher/>
      <Header localPage="RegistrationPage" />
      <BtnDN onClick={themeToggle}> {isDark ? <SunIcon>☀️</SunIcon> : <MoonIcon>🌙</MoonIcon>}</BtnDN>
      <RegistrationForm />
    </Background>
  );
};
export default RegistrationPage;
