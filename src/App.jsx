import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Página de Dashboard aparecerá aqui</div>} />
        <Route path="/pipeline" element={<div>Página do Pipeline aparecerá aqui</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
