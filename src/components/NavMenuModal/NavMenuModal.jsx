import { NavLinkStyled, Thumb } from './NavMenuModal.styled';

export const NavMenuModal = ({ handleMenuOpen }) => {
  return (
    <Thumb>
      <NavLinkStyled to="/diary" onClick={() => handleMenuOpen(false)}>
<<<<<<< HEAD
        Diario
=======
        Agenda
>>>>>>> 56f7a49 (update files)
      </NavLinkStyled>

      <NavLinkStyled to="/calculator" onClick={() => handleMenuOpen(false)}>
        Calculadora
      </NavLinkStyled>
    </Thumb>
  );
};
