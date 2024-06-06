import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonLan,
  LanContainer,
  LanContainerAuth,
  LanContainerAuthCalculator,
} from './LanguageStyled';


function LanguageSwitcher({ currentPage, page, onLanguageChange }) {
  const { i18n } = useTranslation();
  const [buttonEN, setButtonEN] = useState(null);
  const [buttonES, setButtonES] = useState(null);

  const changeLang = async lang => {
    console.log('lng is ', lang);
    i18n.changeLanguage(lang);
    onLanguageChange(lang);


    try {
      const response = await fetch(
        // `http://localhost:9000/api/v1/products/language/${lang}`,
        `http://localhost:9000/api/v1/products/language/es`,
      );
      console.log('esta se la respuesta del back::::', response);
      if (response.ok) {
        // Cambiar el idioma en el frontend solo si la solicitud fue exitosa
      } else {
        console.error('Error al cambiar el idioma en el backend.');
      }
    } catch (error) {
      console.error('Error al cambiar el idioma:', error);
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setButtonEN('En');
        setButtonES('Es');
      } else {
        setButtonEN('English');
        setButtonES('Español');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar el componente
    };
  }, []);

  return  currentPage === 'authenticated' ? (
    page === 'calculator' ? (
      <LanContainerAuthCalculator id="lang-container">
        <ButtonLan id="myButton" onClick={() => changeLang('en')}>
          {buttonEN}
        </ButtonLan>
        <ButtonLan onClick={() => changeLang('es')}>{buttonES}</ButtonLan>
      </LanContainerAuthCalculator>
    ) : (
      <LanContainerAuth id="lang-container">
        <ButtonLan id="myButton" onClick={() => changeLang('en')}>
          {buttonEN}
        </ButtonLan>
        <ButtonLan onClick={() => changeLang('es')}>{buttonES}</ButtonLan>
      </LanContainerAuth>
    )
  ) : (
    <LanContainer id="lang-container">
      <ButtonLan id="myButton" onClick={() => changeLang('en')}>
        {buttonEN}
      </ButtonLan>
      <ButtonLan onClick={() => changeLang('es')}>{buttonES}</ButtonLan>
    </LanContainer>
  );
  
}



export default LanguageSwitcher;