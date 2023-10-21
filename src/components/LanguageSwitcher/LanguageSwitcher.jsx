// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Button, LanContainer } from './LanguageStyled';


// function LanguageSwitcher({lng}) {
//   const { i18n } = useTranslation();
 
//   // const [buttonEN, setbuttonEN] = useState(null);
//   // const [buttonES, setbuttonES] = useState(null);

//   const [buttonEN, setButtonEN] = useState('En');
//   const [buttonES, setButtonES] = useState('Es');

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };
  
//   useEffect(() => {
//     if (lng === 'en') {
//       setButtonEN('En');
//       setButtonES('Es');
//     } else if (lng === 'es') {
//       setButtonEN('English');
//       setButtonES('Español');
//     }
//   }, [lng]);

  
    // useEffect(() => {
    //   function handleResize() {
        
    //     if (window.innerWidth <= 600) {
    //       setbuttonEN('En') ;
    //       setbuttonES('Es') ;
    //     } else{
    //       setbuttonEN('English') ;
    //       setbuttonES('Español') ;
    //     }
    //   }
  
    //   window.addEventListener('resize', handleResize);
    //   handleResize(); // Llama a la función al cargar la página
  
    //   return () => {
    //     window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar el componente
    //   };
    // }, []);
//   return (
//     <LanContainer id="lang-container">
//       <Button id='myButton' onClick={() => changeLanguage('en')}>{buttonEN}</Button>
//       <Button onClick={() => changeLanguage('es')}>{buttonES}</Button>
//     </LanContainer>
//   );
// }

// export default LanguageSwitcher;
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonLan,
  LanContainer,
  LanContainerAuth,
  LanContainerAuthCalculator,
} from './LanguageStyled';

function LanguageSwitcher({ currentPage, page }) {
  const { i18n } = useTranslation();
  const [buttonEN, setbuttonEN] = useState(null);
  const [buttonES, setbuttonES] = useState(null);

  const changeLang = async lng => {
    console.log('lng is ', lng);
    i18n.changeLanguage(lng);
        try {
      const response = await fetch(`https://localhost:9000/api/v1/products?lang=${lng}`);
      if (response.ok) {
        // Cambiar el idioma en el frontend solo si la solicitud fue exitosa
        i18n.changeLanguage(lng);
      } else {
        console.error('Error al cambiar el idioma en el backend.');
      }
    } catch (error) {
      console.error('Error al cambiar el idioma:', error);
    }
}

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setbuttonEN('En');
        setbuttonES('Es');
      } else {
        setbuttonEN('English');
        setbuttonES('Español');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar el componente
    };
  }, []);
  return currentPage === 'authenticated' ? (
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
