import useLoans from '../hooks/useLoans';
import LoanCard from '../components/LoanCard';

export default function LoansTab() {
  const loans = useLoans();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {loans.map(l => <LoanCard key={l.id} loan={l} />)}
    </div>
  );
}