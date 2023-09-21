import { NavLinkStyled, Thumb } from './NavMenuModal.styled';

export const NavMenuModal = ({ handleMenuOpen }) => {
  return (
    <Thumb>
      <NavLinkStyled to="/diary" onClick={() => handleMenuOpen(false)}>
        Agenda
      </NavLinkStyled>

      <NavLinkStyled to="/calculator" onClick={() => handleMenuOpen(false)}>
        Calculadora
      </NavLinkStyled>
    </Thumb>
  );
};
