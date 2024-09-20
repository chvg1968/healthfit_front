import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'; // Importa useDispatch
import { setLanguage } from '../../redux/app/diaryPerDay'; // Importa la acción setLanguage
import {
  ButtonLan,
  LanContainer,
  LanContainerAuth,
  LanContainerAuthCalculator,
} from './LanguageStyled';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:9000';

function LanguageSwitcher({ currentPage, page, onLanguageChange }) {
  const { i18n, t } = useTranslation();
  const [buttonTexts, setButtonTexts] = useState({ en: 'English', es: 'Español' });
  const dispatch = useDispatch(); // Inicializa dispatch

  const changeLang = useCallback(async (lang) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/products/language/${lang}`);
      if (response.ok) {
        i18n.changeLanguage(lang);

        // Despacha la acción para actualizar el idioma en el store de Redux
        dispatch(setLanguage(lang)); 

        if (typeof onLanguageChange === 'function') {
          onLanguageChange(lang);
        }
      } else {
        throw new Error('Error al cambiar el idioma en el backend.');
      }
    } catch (error) {
      console.error('Error al cambiar el idioma:', error);
      alert(t('languageChangeError'));
    }
  }, [i18n, onLanguageChange, dispatch, t]); // Incluye dispatch en las dependencias

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 600;
      setButtonTexts({
        en: isSmallScreen ? 'En' : 'English',
        es: isSmallScreen ? 'Es' : 'Español',
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderButtons = () => (
    <>
      <ButtonLan onClick={() => changeLang('en')}>{buttonTexts.en}</ButtonLan>
      <ButtonLan onClick={() => changeLang('es')}>{buttonTexts.es}</ButtonLan>
    </>
  );

  let Container;
  if (currentPage === 'authenticated') {
    Container = page === 'calculator' ? LanContainerAuthCalculator : LanContainerAuth;
  } else {
    Container = LanContainer;
  }

  return <Container data-testid="lang-container">{renderButtons()}</Container>;
}

export default LanguageSwitcher;
