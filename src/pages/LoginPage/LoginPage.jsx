import { Background, Header, LoginForm } from '../../components';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

const LoginPage = () => {
  return (
    <Background>
      <LanguageSwitcher/>
      <Header localPage="LoginPage"/>

      <LoginForm />
    </Background>
  );
};
export default LoginPage;
