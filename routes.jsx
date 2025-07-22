import React from 'react';
import Layout from './Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Pipeline from './pages/Pipeline.jsx';

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
