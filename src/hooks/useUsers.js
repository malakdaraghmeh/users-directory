
import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        setLoading(true);
        setError('');

        const data = await fetchUsers(controller.signal);

        setUsers(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return { users, loading, error };
}
