import React, { useState, useEffect } from 'react';

// Pega a URL da nossa API a partir das variáveis de ambiente que configuramos na Vercel
const API_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Por enquanto, não temos login, então não enviaremos token.
      // Quando o login estiver pronto, adicionaremos o token aqui.
      // const token = localStorage.getItem('authToken'); 

      try {
        setLoading(true);
        
        const response = await fetch(`${API_URL}/api/v1/leads`, {
          // headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
          throw new Error(`Falha ao buscar os dados: ${response.statusText}`);
        }

        const leadsData = await response.json();
        setLeads(leadsData);

      } catch (err) {
        console.error("Falha ao buscar dados do dashboard:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-6">Carregando dados do Dashboard...</div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Analítico</h1>
        <p className="text-gray-600">Visão geral do desempenho da sua clínica.</p>
      </div>
      
      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Leads Recebidos ({leads.length})</h2>
        <p className="text-sm text-gray-500 mt-2">
          Esta é uma lista dos seus leads reais, vinda diretamente do seu banco de dados!
        </p>
        <ul className="mt-4 list-disc pl-5">
          {leads.map(lead => (
            <li key={lead.id}>{lead.full_name} - {lead.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
