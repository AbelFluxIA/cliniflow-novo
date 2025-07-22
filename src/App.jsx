import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes.jsx'; // Importa sua configuração de rotas

function App() {
  // A função useRoutes vai ler seu arquivo de configuração
  // e montar a aplicação inteira para nós, com o Layout e as páginas filhas.
  const element = useRoutes(routes);

  return element;
}

export default App;
