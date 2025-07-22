import React from 'react';
import StatsCard from './StatsCard.jsx';
import { Users, TrendingUp, DollarSign, Target } from 'lucide-react';

const StatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard title="Total de Leads" value={stats.totalLeads} icon={Users} />
      <StatsCard title="Receita Total" value={stats.totalRevenue} icon={DollarSign} />
      <StatsCard title="Taxa de Conversão" value={stats.conversionRate} icon={TrendingUp} />
      <StatsCard title="Ticket Médio" value={stats.avgTicket} icon={Target} />
    </div>
  );
};

export default StatsGrid;
