// File: src/hooks/useLoans.js
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
export default function useLoans() {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    supabase.from('loans').select('*').then(({ data }) => setLoans(data || []));
    const channel = supabase
      .channel('public:loans')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'loans' }, () => {
        supabase.from('loans').select('*').then(({ data }) => setLoans(data || []));
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);
  return loans;
}