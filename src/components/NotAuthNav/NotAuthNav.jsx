import { size } from '../../assets/sizes';
import useViewportDimensions from '../../hooks/useViewportDimensions';

import { Logo } from '../../components/Logo';
import { Thumb, NavThumb, NavLinkStyled, LogoThumb } from './NotAuthNav.styled';
import { useTranslation } from 'react-i18next';

export const NotAuthNav = ({ localPage }) => {
  const { t } = useTranslation();
  const viewportDimensions = useViewportDimensions();
  const isStartPage = localPage === 'MainPage';
  const isDesktopView = viewportDimensions.width > parseInt(size.maxTablet, 10);

  return (
    <Thumb>
      {!isStartPage & isDesktopView ? (
        <>
        <LogoThumb showVerticalLine={isStartPage & isDesktopView}>
            <Logo />
          </LogoThumb>
        <NavThumb>
        <NavLinkStyled to="/login">{t('login')}</NavLinkStyled>
        <NavLinkStyled to="/register">{t('registration')}</NavLinkStyled>
        </NavThumb>
        </>
      ) : (
        <>
          <LogoThumb showVerticalLine={isStartPage & isDesktopView}>
            <Logo />
          </LogoThumb>

          <NavThumb>
            <NavLinkStyled to="/login">{t('login')}</NavLinkStyled>
            <NavLinkStyled to="/register">{t('registration')}</NavLinkStyled>
          </NavThumb>
        </>
      )}
    </Thumb>
  );
};
