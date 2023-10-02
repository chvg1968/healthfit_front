import { createGlobalStyle } from 'styled-components';
import Verdana from './assets/fonts/verdana.ttf';
import VerdanaBold from './assets/fonts/verdanab.ttf';



const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Verdana';
  src: url(${Verdana}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Verdana';
  src: url(${VerdanaBold}) format('truetype');
  font-weight: 700;
}


//(props.darkMode ? '#DARKMODECOLORS' : '#NODARKMODECOLORS')
:root {
  --main-text-color:${(props) => (props.darkMode ? '#ffffff' : '#212121')}; 
  --secondary-text-color:  ${(props) => (props.darkMode ? '#ffffff' : '#9B9FAA')};
  --white: ${(props) => (props.darkMode ? '#ffffff' : '#ffffff')};
  --blue-txt-color: ${(props) => (props.darkMode ? '#9B9FAA' : '#264061')};
  --accent-color: ${(props) => (props.darkMode ? '#FC842D' : '#FC842D')}; 
  --accent-shadow:${(props) => (props.darkMode ? '#9B9FAA' : 'rgba(252, 132, 45, 0.5)')};
  --secondary-background-color:${(props) => (props.darkMode ? '#9B9FAA' : '#F0F1F3')}; 
  --border-color: ${(props) => (props.darkMode ? '#9B9FAA' : '#e0e0e0')};
  --logobackground-color: ${(props) => (props.darkMode ? '#ffffff' : '#ffffff')};
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms;
  --transition-params: var(--timing-function) var(--trans-duration); 
  --moon-color:#ffffff;
  --background-color-input:${(props) => (props.darkMode ? '#212121' : '#ffffff')};
<<<<<<< HEAD
  --background-color-menu:${(props) => (props.darkMode ? '#ffffff' : '#ffffff')};
  --input-text-color:${(props) => (props.darkMode ? '#ffffff' : '#212121')}; 
  --input-text-color2:${(props) => (props.darkMode ? '#9B9FAA' : '#212121')}; 
  --input-text-color3:${(props) => (props.darkMode ? '#212121' : '#212121')}; 
  --background-color-calendar:${(props) => (props.darkMode ? '#212121' : '#ffffff')};
=======
  --background-color-menu:${(props) => (props.darkMode ? '#9B9FAA' : '#ffffff')};
  --input-text-color:${(props) => (props.darkMode ? '#ffffff' : '#9B9FAA')}; 
  --input-text-color2:${(props) => (props.darkMode ? '#9B9FAA' : '#212121')}; 
>>>>>>> DarkMode
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  width: 100%;
height: 100vh;
  scroll-behavior: smooth;
  background-color: ${(props) => (props.darkMode ? '#212121' : '#ffffff')};
  font-family: 'Verdana';
  font-style: normal;  
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: var(--main-text-color);
}

#root{
  width:100%;
  height: 100%;

  display: flex;
flex-direction: column;
justify-content: space-between;
}


body,
h1,
h2,
h3,
p,
ul,
li
 {
  margin: 0;
}


ul{
  list-style: none;
    padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

input,
button {
  font: inherit;
  background-color: inherit;
  padding: 0;
  margin: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}`;

export default GlobalStyle;
