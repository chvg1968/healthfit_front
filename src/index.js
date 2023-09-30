import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';
import setupInterceptors from './service/setupInterceptors';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';



i18next
.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'es', // Idioma predeterminado
  resources: {
    en: { translation: require('./language/en/global.json') },
    es: { translation: require('./language/es/global.json') }
  },
});
const Root = () => {


 

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
        
            <App/>
          </I18nextProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
setupInterceptors(store);
