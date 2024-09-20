import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage, updateProductPresentation, setProducts } from '../../redux/app/diaryPerDay';
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
  const dispatch = useDispatch();

  const loadProducts = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/products`);
      if (response.ok) {
        const products = await response.json();
        console.log("Test1: ",products); // Agrega esto después de cargar los productos

        const formattedProducts = products.map(product => ({
          ...product,
          displayTitle: product.titles ? (product.titles[i18n.language] || product.titles.en) : product.titles?.en
        }));
        dispatch(setProducts(formattedProducts));
      } else {
        throw new Error('Error al cargar los productos');
      }
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      alert(t('productLoadError'));
    }
  }, [dispatch, i18n.language, t]); // Añade las dependencias necesarias
  
  const changeLang = useCallback(async (lang) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/products/language/${lang}`);
      if (response.ok) {
        i18n.changeLanguage(lang);
        dispatch(setLanguage(lang)); 
        dispatch(updateProductPresentation(lang));
        
        // Llama a loadProducts después de cambiar el idioma
        await loadProducts();
  
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
  }, [i18n, onLanguageChange, dispatch, t, loadProducts]); // Incluye dispatch en las dependencias

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
