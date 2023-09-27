import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, LanContainer } from './LanguageStyled';
import { DiaryDateCalendar } from '../DiaryDateCalendar';


function LanguageSwitcher() {
  const { i18n } = useTranslation();
 
  const [buttonEN, setbuttonEN] = useState(null);
  const [buttonES, setbuttonES] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(); // Estado para el idioma seleccionado

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
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
      <Button id='myButton' onClick={() => changeLanguage('en')}>{buttonEN}</Button>
      <Button onClick={() => changeLanguage('es')}>{buttonES}</Button>
      {/* Pasa el idioma seleccionado como prop */}
      <DiaryDateCalendar selectedLanguage={selectedLanguage} />
    </LanContainer>
  );
}

export default LanguageSwitcher;