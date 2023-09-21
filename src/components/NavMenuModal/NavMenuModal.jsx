import { NavLinkStyled, Thumb } from './NavMenuModal.styled';

export const NavMenuModal = ({ handleMenuOpen }) => {
  return (
    <Thumb>
      <NavLinkStyled to="/diary" onClick={() => handleMenuOpen(false)}>
        Diario
      </NavLinkStyled>

      <NavLinkStyled to="/calculator" onClick={() => handleMenuOpen(false)}>
        Calculadora
      </NavLinkStyled>
    </Thumb>
  );
};
