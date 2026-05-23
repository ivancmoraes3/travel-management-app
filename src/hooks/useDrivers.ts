import { useState, useEffect } from 'react';
import { Driver, CreateDriverDTO } from '../models/Driver';
import { driverService } from '../services/driverService';

export const useDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDrivers = async () => {
    try {
      setLoading(true);
      const data = await driverService.getAll();
      setDrivers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar motoristas');
    } finally {
      setLoading(false);
    }
  };

  const addDriver = async (driver: CreateDriverDTO) => {
    try {
      const newDriver = await driverService.create(driver);
      setDrivers([...drivers, newDriver]);
      return newDriver;
    } catch (err) {
      throw err;
    }
  };

  const updateDriver = async (id: string, driver: Partial<CreateDriverDTO>) => {
    try {
      const updated = await driverService.update(id, driver);
      setDrivers(drivers.map(d => d.id === id ? updated : d));
      return updated;
    } catch (err) {
      throw err;
    }
  };

  const deleteDriver = async (id: string) => {
    try {
      await driverService.delete(id);
      setDrivers(drivers.filter(d => d.id !== id));
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return {
    drivers,
    loading,
    error,
    addDriver,
    updateDriver,
    deleteDriver,
    refetch: fetchDrivers
  };
};
