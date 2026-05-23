# 🚗 Sistema de Gerenciamento de Viagens

Aplicação completa para gerenciar viagens realizadas com controle de motoristas, passageiros, clientes e administradores.

## ✨ Funcionalidades

### 👨‍💼 Administração
- **Autenticação**: Login com email e senha
- **Gestão de Administradores**: Cadastro de novos administradores
- **Dashboard**: Visão geral do sistema

### 🚗 Cadastros
- **Motoristas**: Nome, modelo veículo, placa, telefone
- **Passageiros**: Nome, endereço, telefone
- **Clientes**: CNPJ, endereço

### 🛣️ Viagens
- **Lançamento de Viagens**: 
  - Seleção de motorista
  - Seleção de cliente
  - Adição de 1-4 passageiros (com preenchimento automático de nome e bairro)
  - Preço da viagem
  - Data e hora
- **Relatório de Viagens**: Visualização de todas as viagens com valores

## 🏗️ Estrutura do Projeto

```
travel-management-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Cards/
│   │   │   ├── DriverCard.tsx
│   │   │   ├── PassengerCard.tsx
│   │   │   └── ClientCard.tsx
│   │   ├── Forms/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── DriverForm.tsx
│   │   │   ├── PassengerForm.tsx
│   │   │   ├── ClientForm.tsx
│   │   │   ├── AdminForm.tsx
│   │   │   └── TripForm.tsx
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── MainLayout.tsx
│   │   └── Tables/
│   │       ├── TripsTable.tsx
│   │       └── AdminsTable.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   ├── useDrivers.ts
│   │   ├── usePassengers.ts
│   │   ├── useClients.ts
│   │   ├── useAdmins.ts
│   │   ├── useTrips.ts
│   │   └── useAuth.ts
│   ├── models/
│   │   ├── Driver.ts
│   │   ├── Passenger.ts
│   │   ├── Client.ts
│   │   ├── Admin.ts
│   │   └── Trip.ts
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── AdminPanel.tsx
│   │   ├── DriverManagement.tsx
│   │   ├── PassengerManagement.tsx
│   │   ├── ClientManagement.tsx
│   │   ├── TripRegistration.tsx
│   │   ├── TripReport.tsx
│   │   └── NotFound.tsx
│   ├── services/
│   │   ├── supabase.ts
│   │   ├── driverService.ts
│   │   ├── passengerService.ts
│   │   ├── clientService.ts
│   │   ├── adminService.ts
│   │   └── tripService.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Instalação e Setup

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Supabase

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/ivancmoraes3/travel-management-app.git
cd travel-management-app
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Adicione suas credenciais do Supabase:
```
VITE_SUPABASE_URL=sua_url_aqui
VITE_SUPABASE_ANON_KEY=sua_chave_aqui
```

4. **Execute o projeto**
```bash
npm run dev
```

5. **Build para produção**
```bash
npm run build
```

## 🗄️ Banco de Dados (Supabase)

### Tabelas Necessárias

#### `admins`
- `id` (UUID, Primary Key)
- `email` (Text, Unique)
- `created_at` (Timestamp)
- `created_by` (UUID, FK admins.id)

#### `drivers`
- `id` (UUID, Primary Key)
- `name` (Text)
- `model` (Text)
- `plate` (Text, Unique)
- `phone` (Text)
- `created_at` (Timestamp)

#### `passengers`
- `id` (UUID, Primary Key)
- `name` (Text)
- `address` (Text)
- `neighborhood` (Text)
- `phone` (Text)
- `created_at` (Timestamp)

#### `clients`
- `id` (UUID, Primary Key)
- `cnpj` (Text, Unique)
- `address` (Text)
- `neighborhood` (Text)
- `created_at` (Timestamp)

#### `trips`
- `id` (UUID, Primary Key)
- `driver_id` (UUID, FK drivers.id)
- `client_id` (UUID, FK clients.id)
- `passengers` (JSON Array)
- `price` (Numeric)
- `trip_date` (Timestamp)
- `created_at` (Timestamp)

## 🔐 Segurança

- Autenticação com email/senha do Supabase Auth
- Row Level Security (RLS) habilitado
- Variáveis de ambiente para credenciais
- Validação de entrada em todos os formulários

## 📱 Fluxo de Uso

1. **Admin faz login** → Dashboard
2. **Cadastra motoristas, passageiros e clientes** → Cards de cadastro
3. **Registra viagens** → Formulário com preenchimento automático
4. **Visualiza relatório** → Tabela com todas as viagens e valores

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS
- **Backend**: Supabase (PostgreSQL)
- **Estado**: Context API + Custom Hooks
- **HTTP Client**: Fetch API
- **Roteamento**: React Router v6

## 📄 Licença

MIT

## 👤 Autor

ivancmoraes3
