import { useState } from 'react';

export default function CalculatorTab() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate]         = useState('');
  const [term, setTerm]         = useState('');
  const [result, setResult]     = useState(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(term) * 12;
    const M = (P * r) / (1 - Math.pow(1 + r, -n));
    setResult(M.toFixed(2));
  };

  return (
    <div className="space-y-4">
      <input type="number" placeholder="Amount" value={principal} onChange={e => setPrincipal(e.target.value)} />
      <input type="number" placeholder="Annual Rate (%)" value={rate} onChange={e => setRate(e.target.value)} />
      <input type="number" placeholder="Term (years)" value={term} onChange={e => setTerm(e.target.value)} />
      <button onClick={calculate} className="btn">Calculate</button>
      {result && <p>Monthly Payment: ${result}</p>}
    </div>
  );
}