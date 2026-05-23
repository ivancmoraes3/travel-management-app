import { useState, useEffect } from 'react';
import { Passenger, CreatePassengerDTO } from '../models/Passenger';
import { passengerService } from '../services/passengerService';

export const usePassengers = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPassengers = async () => {
    try {
      setLoading(true);
      const data = await passengerService.getAll();
      setPassengers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar passageiros');
    } finally {
      setLoading(false);
    }
  };

  const addPassenger = async (passenger: CreatePassengerDTO) => {
    try {
      const newPassenger = await passengerService.create(passenger);
      setPassengers([...passengers, newPassenger]);
      return newPassenger;
    } catch (err) {
      throw err;
    }
  };

  const updatePassenger = async (id: string, passenger: Partial<CreatePassengerDTO>) => {
    try {
      const updated = await passengerService.update(id, passenger);
      setPassengers(passengers.map(p => p.id === id ? updated : p));
      return updated;
    } catch (err) {
      throw err;
    }
  };

  const deletePassenger = async (id: string) => {
    try {
      await passengerService.delete(id);
      setPassengers(passengers.filter(p => p.id !== id));
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchPassengers();
  }, []);

  return {
    passengers,
    loading,
    error,
    addPassenger,
    updatePassenger,
    deletePassenger,
    refetch: fetchPassengers
  };
};
