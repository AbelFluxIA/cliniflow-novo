import React, { useState, useEffect } from 'react';
import StatsGrid from '../../components/dashboard/StatsGrid.jsx'; // Importamos o novo componente

const API_URL = import.meta.env.VITE_API_BASE_URL;

// Lógica para calcular as estatísticas, adaptada do seu código original
const calculateStats = (leads) => {
  const totalLeads = leads.length;
  const closedLeads = leads.filter(l => l.status === 'Finalizado'); // Supondo que 'Finalizado' seja o status de ganho
  const totalRevenue = closedLeads.reduce((sum, l) => sum + (parseFloat(l.treatment_value) || 0), 0);
  const conversionRate = totalLeads > 0 ? (closedLeads.length / totalLeads) * 100 : 0;
  const avgTicket = closedLeads.length > 0 ? totalRevenue / closedLeads.length : 0;

  return {
    totalLeads,
    conversionRate: `${conversionRate.toFixed(1)}%`,
    totalRevenue: `R$ ${totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    avgTicket: `R$ ${avgTicket.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
  };
};

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const token = localStorage.getItem('authToken'); 
        const response = await fetch(`${API_URL}/api/v1/leads`, {
          // headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error(`Falha ao buscar os dados: ${response.statusText}`);
        const leadsData = await response.json();
        setLeads(leadsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-6">Carregando dados do Dashboard...</div>;
  if (error) return <div className="p-6 text-red-500">Erro: {error}</div>;

  const stats = calculateStats(leads);

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Analítico</h1>
        <p className="text-gray-600">Visão geral do desempenho da sua clínica.</p>
      </div>
      
      {/* Usando nosso novo componente de grade de estatísticas */}
      <StatsGrid stats={stats} />

      {/* No futuro, adicionaremos os outros gráficos aqui */}
    </div>
  );
};

export default Dashboard;
