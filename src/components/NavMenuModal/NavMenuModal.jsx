import { NavLinkStyled, Thumb } from './NavMenuModal.styled';
import { useTranslation } from 'react-i18next';

export const NavMenuModal = ({ handleMenuOpen }) => {
  const {t}=useTranslation();
  return (
    <Thumb>
      <NavLinkStyled to="/diary" onClick={() => handleMenuOpen(false)}>
        {t('diary')}
      </NavLinkStyled>

      <NavLinkStyled to="/calculator" onClick={() => handleMenuOpen(false)}>
      {t('calculator')}
      </NavLinkStyled>
    </Thumb>
  );
};
