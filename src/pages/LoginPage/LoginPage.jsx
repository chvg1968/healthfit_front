import { Background, Header, LoginForm } from '../../components';
import { BtnDN } from '../../components/Buttons/ButtonDayNight/ButtonDayNight.styled';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

import { themeSelector } from '../../redux/app/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MoonIcon, SunIcon } from './LoginPage.styled';


const LoginPage = () => {
  const {isDark} = useSelector(state => state.theme)
  const dispatch = useDispatch();
  const themeToggle =()=>{
    dispatch(themeSelector());
  }

  
  return (
    <Background>
      <LanguageSwitcher/>
      
      <BtnDN onClick={themeToggle}> {isDark ? <SunIcon>☀️</SunIcon> : <MoonIcon>🌙</MoonIcon>}</BtnDN>
      <Header localPage="LoginPage"/>

      <LoginForm />
    </Background>
  );
};
export default LoginPage;
