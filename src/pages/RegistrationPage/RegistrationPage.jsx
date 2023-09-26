import { Background, Header, RegistrationForm } from '../../components';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

const RegistrationPage = () => {
  return (
    <Background>
      <LanguageSwitcher/>
      <Header localPage="RegistrationPage" />
      <RegistrationForm />
    </Background>
  );
};
export default RegistrationPage;
