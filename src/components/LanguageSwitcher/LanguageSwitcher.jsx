import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLan, LanContainer } from './LanguageStyled';



function LanguageSwitcher() {
  const { i18n } = useTranslation();
 
  const [buttonEN, setbuttonEN] = useState(null);
  const [buttonES, setbuttonES] = useState(null);
  

  const changeLanguage = (lng) => {
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
    <LanContainer id="lang-container">
      <ButtonLan id='myButton' onClick={() => changeLanguage('en')}>{buttonEN}</ButtonLan>
      <ButtonLan onClick={() => changeLanguage('es')}>{buttonES}</ButtonLan>
    </LanContainer>
  );
}

export default LanguageSwitcher;