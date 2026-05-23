import { useState, useEffect } from 'react';
import { useAdmins } from '../../hooks/useAdmins';

export const useAdmins = () => {
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createNewAdmin = async (email: string, password: string) => {
    try {
      setLoading(true);
      // Implementação será feita com Supabase Admin API
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar administrador');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    admins,
    loading,
    error,
    createNewAdmin
  };
};
