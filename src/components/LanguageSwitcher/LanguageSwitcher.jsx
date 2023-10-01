import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLan, LanContainer, LanContainerAuth, LanContainerAuthCalculator } from './LanguageStyled';



function LanguageSwitcher({currentPage, page}) {
  const { i18n } = useTranslation();
 
  const [buttonEN, setbuttonEN] = useState(null);
  const [buttonES, setbuttonES] = useState(null);
  

  const changeLang = (lng) => {
    
    i18n.changeLanguage(lng);
    
  };
  


  
    useEffect(() => {
      function handleResize() {
        
        if (window.innerWidth <= 600) {
          setbuttonEN('En') ;
          setbuttonES('Es') ;
        } else{
          setbuttonEN('English') ;
          setbuttonES('Español') ;
        }
      }
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Llama a la función al cargar la página
  
      return () => {
        window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar el componente
      };
    }, []);
  return (
    currentPage==='authenticated' ? page=== "calcularor"?
    <LanContainerAuthCalculator id="lang-container">
      <ButtonLan id='myButton' onClick={() => changeLang('en')}>{buttonEN}</ButtonLan>
      <ButtonLan onClick={() => changeLang('es')}>{buttonES}</ButtonLan>
    </LanContainerAuthCalculator>
    :
    <LanContainerAuth id="lang-container">
      <ButtonLan id='myButton' onClick={() => changeLang('en')}>{buttonEN}</ButtonLan>
      <ButtonLan onClick={() => changeLang('es')}>{buttonES}</ButtonLan>
    </LanContainerAuth>
    :
    <LanContainer id="lang-container">
    <ButtonLan id='myButton' onClick={() => changeLang('en')}>{buttonEN}</ButtonLan>
    <ButtonLan onClick={() => changeLang('es')}>{buttonES}</ButtonLan>
  </LanContainer>
  );
}

export default LanguageSwitcher;