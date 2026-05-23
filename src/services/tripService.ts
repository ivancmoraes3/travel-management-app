import { supabase } from './supabase';
import { Trip, CreateTripDTO, TripWithDetails } from '../models/Trip';
import { driverService } from './driverService';
import { clientService } from './clientService';

export const tripService = {
  // Listar todas as viagens
  async getAll(): Promise<TripWithDetails[]> {
    const { data, error } = await supabase
      .from('trips')
      .select('*')
      .order('trip_date', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Obter uma viagem pelo ID
  async getById(id: string): Promise<Trip | null> {
    const { data, error } = await supabase
      .from('trips')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Criar nova viagem
  async create(trip: CreateTripDTO): Promise<Trip> {
    const { data, error } = await supabase
      .from('trips')
      .insert([trip])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Atualizar viagem
  async update(id: string, trip: Partial<CreateTripDTO>): Promise<Trip> {
    const { data, error } = await supabase
      .from('trips')
      .update(trip)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Deletar viagem
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('trips')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Obter viagens com detalhes (nome do motorista, CNPJ do cliente)
  async getWithDetails(): Promise<TripWithDetails[]> {
    const trips = await this.getAll();
    
    return Promise.all(trips.map(async (trip) => {
      const driver = await driverService.getById(trip.driver_id);
      const client = await clientService.getById(trip.client_id);
      
      return {
        ...trip,
        driver_name: driver?.name,
        client_cnpj: client?.cnpj,
        passenger_count: trip.passengers?.length || 0
      };
    }));
  },

  // Obter viagens por data (para relatório)
  async getByDateRange(startDate: string, endDate: string): Promise<TripWithDetails[]> {
    const { data, error } = await supabase
      .from('trips')
      .select('*')
      .gte('trip_date', startDate)
      .lte('trip_date', endDate)
      .order('trip_date', { ascending: false });

    if (error) throw error;
    
    return Promise.all((data || []).map(async (trip) => {
      const driver = await driverService.getById(trip.driver_id);
      const client = await clientService.getById(trip.client_id);
      
      return {
        ...trip,
        driver_name: driver?.name,
        client_cnpj: client?.cnpj,
        passenger_count: trip.passengers?.length || 0
      };
    }));
  }
};
