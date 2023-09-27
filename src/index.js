import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle from './GlobalStyles';
import App from './App';
import setupInterceptors from './service/setupInterceptors';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import useLocalStorage from 'use-local-storage';


i18n.init({
  resources: {
    en: { translation: require('./language/en/global.json') },
    es: { translation: require('./language/es/global.json') }
  },
  lng: 'es', // Idioma predeterminado
  interpolation: {
    escapeValue: false
  }
});
const Root = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle darkMode={darkMode} />
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <App isdarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </I18nextProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
setupInterceptors(store);
