import React from 'react';
import MetricCard from './MetricCard';
import QuickAccessLinks from './QuickAccessLinks';

function Dashboard() {
  return (
    <div className="dashboard">
      <p className="overview">This week you recycled 5 kg of waste and saved 2 kg of CO2!</p>
      <div className="metrics">
        <MetricCard title="Total Waste Recycled" value="50" unit="kg" />
        <MetricCard title="CO2 Saved" value="20" unit="kg" />
        <MetricCard title="Completed Orders" value="10" unit="" />
      </div>
      <QuickAccessLinks />
    </div>
  );
}

export default Dashboard;