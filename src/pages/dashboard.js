import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

export default function DashboardTab() {
  const [metrics, setMetrics] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch summary & chart data via Supabase RPC or queries
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="card">Total Loans: $... </div>
        <div className="card">Outstanding: $... </div>
        {/* etc */}
      </div>
      <div className="card">
        <PieChart width={200} height={200}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {data.map((entry, idx) => (
              <Cell key={idx} fill={['#4a90e2','#9013fe','#50e3c2'][idx]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}