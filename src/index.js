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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
setupInterceptors(store);

