import React from 'react';
import Layout from './Layout.jsx';
// Corrigindo o caminho para apontar para DENTRO da pasta de cada página
import Dashboard from './pages/Dashboard/Dashboard.jsx'; 
import Pipeline from './pages/Pipeline/Pipeline.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/pipeline',
        element: <Pipeline />
      },
      // Adicionaremos mais rotas aqui no futuro
    ]
  }
];

export default routes;
