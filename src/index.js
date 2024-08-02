import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Aluguel from './routes/Aluguel';
import Sobre from './routes/Sobre';
import TelaPerfil from './routes/TelaPerfil';
import FormLoginProprietario from './routes/FormLoginProprietario';
import ThemeProvider from './routes/Components/ThemeContext';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/Aluguel',
        element: <Aluguel/>
      },
      {
        path: '/LoginProprietario',
        element: <FormLoginProprietario/>
      },
      {
        path: '/Sobre',
        element: <Sobre/>
      },
      {
        path: '/TelaPerfil',
        element: <TelaPerfil/>
      } 
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={routes}/>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
