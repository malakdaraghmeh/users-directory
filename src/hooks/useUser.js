
import { useEffect, useState } from 'react';
import { fetchUserById } from '../services/userService';

export function useUser(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUser() {
      try {
        setLoading(true);
        setError('');
        setUser(null);

        const data = await fetchUserById(id, controller.signal);

        setUser(data);
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

    loadUser();

    return () => {
      controller.abort();
    };
  }, [id, retryCount]);

  const refetch = () => {
    setRetryCount((count) => count + 1);
  };

  return { user, loading, error, refetch };
}
