import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function useLoans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // fetch initial data
    supabase
      .from('loans')
      .select('*')
      .then(({ data }) => setLoans(data));

    // subscribe to changes
    const subscription = supabase
      .from('loans')
      .on('*', payload => {
        console.log('Change received!', payload);
        supabase
          .from('loans')
          .select('*')
          .then(({ data }) => setLoans(data));
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  return loans;
}