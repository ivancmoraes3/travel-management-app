import { MainLayout } from '../../components/Layout/MainLayout';
import { Sidebar } from '../../components/Layout/Sidebar';

export const Dashboard = () => {
  return (
    <MainLayout>
      <Sidebar>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Bem-vindo ao Sistema</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card: Motoristas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-2">🚗</div>
              <h3 className="text-xl font-bold text-gray-800">Motoristas</h3>
              <p className="text-gray-600 mt-2">Gerencie motoristas e veículos</p>
            </div>

            {/* Card: Passageiros */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-2">👥</div>
              <h3 className="text-xl font-bold text-gray-800">Passageiros</h3>
              <p className="text-gray-600 mt-2">Cadastre passageiros</p>
            </div>

            {/* Card: Clientes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-2">🏢</div>
              <h3 className="text-xl font-bold text-gray-800">Clientes</h3>
              <p className="text-gray-600 mt-2">Gerencie clientes</p>
            </div>

            {/* Card: Viagens */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-2">🛣️</div>
              <h3 className="text-xl font-bold text-gray-800">Viagens</h3>
              <p className="text-gray-600 mt-2">Registre viagens</p>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ℹ️ Informações do Sistema</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Cadastre motoristas com modelo, placa e telefone</li>
              <li>✅ Registre passageiros com endereço e bairro</li>
              <li>✅ Crie clientes com CNPJ e endereço</li>
              <li>✅ Lance viagens selecionando 1-4 passageiros automaticamente</li>
              <li>✅ Visualize relatórios com totalizações de valores</li>
              <li>✅ Crie novos administradores para o sistema</li>
            </ul>
          </div>
        </div>
      </Sidebar>
    </MainLayout>
  );
};
