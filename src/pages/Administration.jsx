import { 
  Bed, 
  Package, 
  DollarSign, 
  FileText, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const bedStatus = [
  { department: 'UTI', total: 20, occupied: 18, available: 2, maintenance: 0 },
  { department: 'Enfermaria', total: 80, occupied: 65, available: 12, maintenance: 3 },
  { department: 'Pediatria', total: 30, occupied: 22, available: 7, maintenance: 1 },
  { department: 'Maternidade', total: 25, occupied: 15, available: 9, maintenance: 1 }
]

const supplies = [
  { item: 'Luvas Descartáveis', current: 2500, minimum: 1000, status: 'ok' },
  { item: 'Máscaras N95', current: 450, minimum: 500, status: 'low' },
  { item: 'Seringas 10ml', current: 800, minimum: 300, status: 'ok' },
  { item: 'Medicamento A', current: 50, minimum: 100, status: 'critical' },
  { item: 'Álcool 70%', current: 150, minimum: 80, status: 'ok' }
]

const financialData = [
  { category: 'Receita Mensal', value: 'R$ 2.847.500', change: '+12%', trend: 'up' },
  { category: 'Despesas Operacionais', value: 'R$ 1.234.800', change: '+5%', trend: 'up' },
  { category: 'Margem de Lucro', value: '56.6%', change: '+3%', trend: 'up' },
  { category: 'Inadimplência', value: '2.3%', change: '-1%', trend: 'down' }
]

const getStatusColor = (status) => {
  switch (status) {
    case 'ok': return 'text-green-600 bg-green-100'
    case 'low': return 'text-yellow-600 bg-yellow-100'
    case 'critical': return 'text-red-600 bg-red-100'
    default: return 'text-gray-600 bg-gray-100'
  }
}

export function Administration() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Administração Hospitalar</h1>
          <p className="text-gray-600">Gestão de leitos, suprimentos e finanças</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Relatórios
          </Button>
          <Button>
            <TrendingUp className="h-4 w-4 mr-2" />
            Dashboard Financeiro
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {financialData.map((item, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{item.category}</p>
                <p className="text-xl font-bold text-gray-900">{item.value}</p>
                <p className={`text-sm font-medium ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bed Management */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Gestão de Leitos</h3>
            <Button variant="ghost" size="sm">Ver detalhes</Button>
          </div>
          <div className="space-y-4">
            {bedStatus.map((dept, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{dept.department}</h4>
                  <span className="text-sm text-gray-500">
                    {dept.occupied}/{dept.total} ocupados
                  </span>
                </div>
                <div className="flex space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Ocupados: {dept.occupied}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Disponíveis: {dept.available}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Manutenção: {dept.maintenance}</span>
                  </div>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${(dept.occupied / dept.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Supply Management */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Controle de Suprimentos</h3>
            <Button variant="ghost" size="sm">Gerenciar estoque</Button>
          </div>
          <div className="space-y-3">
            {supplies.map((supply, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Package className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{supply.item}</p>
                    <p className="text-sm text-gray-500">
                      Estoque atual: {supply.current} | Mínimo: {supply.minimum}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(supply.status)}`}>
                  {supply.status === 'ok' && 'OK'}
                  {supply.status === 'low' && 'Baixo'}
                  {supply.status === 'critical' && 'Crítico'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-100 rounded-full">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Compra de suprimentos aprovada - R$ 25.000
              </p>
              <p className="text-xs text-gray-500">2 horas atrás</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-yellow-100 rounded-full">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Alerta de estoque baixo - Máscaras N95
              </p>
              <p className="text-xs text-gray-500">4 horas atrás</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Bed className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Leito 205 liberado - Enfermaria Geral
              </p>
              <p className="text-xs text-gray-500">6 horas atrás</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col">
            <Bed className="h-6 w-6 mb-2" />
            Gerenciar Leitos
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Package className="h-6 w-6 mb-2" />
            Controle de Estoque
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <DollarSign className="h-6 w-6 mb-2" />
            Relatório Financeiro
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <FileText className="h-6 w-6 mb-2" />
            Gerar Relatório
          </Button>
        </div>
      </Card>
    </div>
  )
}

