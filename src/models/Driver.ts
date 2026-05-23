// Modelo de Motorista
export interface Driver {
  id: string;
  name: string;
  model: string;
  plate: string;
  phone: string;
  created_at?: string;
}

export interface CreateDriverDTO {
  name: string;
  model: string;
  plate: string;
  phone: string;
}
