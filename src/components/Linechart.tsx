import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useHistoricalData } from '../api';

const Linechart: React.FC = () => {
  const { data, isLoading } = useHistoricalData();

  if (isLoading) return <div>Loading...</div>;

  const formattedData = Object.keys(data.cases).map((date) => ({
    date,
    cases: data.cases[date],
  }));

  return (
    <ResponsiveContainer width="100%" height={400} className={'p-4'}>
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Linechart;
