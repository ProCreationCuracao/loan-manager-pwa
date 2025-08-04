import useLoans from '../hooks/useLoans';

export default function LoanList() {
  const loans = useLoans();

  return (
    <div>
      <h2>Active Loans</h2>
      <ul>
        {loans.map(loan => (
          <li key={loan.id}>{loan.borrower}: ${loan.amount} due {loan.due_date}</li>
        ))}
      </ul>
    </div>
  );
}