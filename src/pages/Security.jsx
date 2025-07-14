import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  Users,
  FileText,
  Settings,
  Key,
  Activity,
  Clock,
  UserCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const securityMetrics = [
  {
    title: 'Usuários Ativos',
    value: '89',
    change: '+5%',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Tentativas de Login',
    value: '1,247',
    change: '+12%',
    icon: Key,
    color: 'text-green-600'
  },
  {
    title: 'Alertas de Segurança',
    value: '3',
    change: '-50%',
    icon: AlertTriangle,
    color: 'text-orange-600'
  },
  {
    title: 'Conformidade LGPD',
    value: '98.5%',
    change: '+2%',
    icon: Shield,
    color: 'text-purple-600'
  }
]

const recentLogs = [
  {
    id: 1,
    user: 'Dr. Ana Silva',
    action: 'Acesso ao prontuário',
    resource: 'Paciente: Maria Santos',
    timestamp: '2024-01-13 14:30:25',
    status: 'success',
    ip: '192.168.1.100'
  },
  {
    id: 2,
    user: 'Enf. João Carlos',
    action: 'Tentativa de login',
    resource: 'Sistema SGHSS',
    timestamp: '2024-01-13 14:25:10',
    status: 'failed',
    ip: '192.168.1.105'
  },
  {
    id: 3,
    user: 'Admin Sistema',
    action: 'Alteração de permissões',
    resource: 'Usuário: Carlos Lima',
    timestamp: '2024-01-13 14:20:45',
    status: 'success',
    ip: '192.168.1.10'
  },
  {
    id: 4,
    user: 'Dra. Maria Costa',
    action: 'Download de relatório',
    resource: 'Relatório Mensal',
    timestamp: '2024-01-13 14:15:30',
    status: 'success',
    ip: '192.168.1.102'
  }
]

const accessLevels = [
  {
    level: 'Administrador',
    users: 5,
    permissions: ['Acesso total', 'Gerenciar usuários', 'Configurações'],
    color: 'bg-red-100 text-red-800'
  },
  {
    level: 'Médico',
    users: 45,
    permissions: ['Prontuários', 'Prescrições', 'Telemedicina'],
    color: 'bg-blue-100 text-blue-800'
  },
  {
    level: 'Enfermeiro',
    users: 32,
    permissions: ['Prontuários básicos', 'Medicamentos', 'Agendamentos'],
    color: 'bg-green-100 text-green-800'
  },
  {
    level: 'Recepcionista',
    users: 12,
    permissions: ['Agendamentos', 'Cadastros', 'Relatórios básicos'],
    color: 'bg-yellow-100 text-yellow-800'
  }
]

const complianceItems = [
  { item: 'Criptografia de dados', status: 'compliant', description: 'AES-256 implementado' },
  { item: 'Controle de acesso', status: 'compliant', description: 'RBAC ativo' },
  { item: 'Logs de auditoria', status: 'compliant', description: 'Retenção de 5 anos' },
  { item: 'Backup de segurança', status: 'warning', description: 'Último backup: 2h atrás' },
  { item: 'Treinamento LGPD', status: 'compliant', description: '95% dos usuários treinados' }
]

export function Security() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Segurança e Compliance</h1>
          <p className="text-gray-600">Controle de acesso, auditoria e conformidade LGPD</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Relatório de Auditoria
          </Button>
          <Button>
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {securityMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className="text-sm font-medium text-green-600">{metric.change}</p>
                </div>
                <Icon className={`h-8 w-8 ${metric.color}`} />
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Access Control */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Controle de Acesso</h3>
            <Button variant="ghost" size="sm">Gerenciar</Button>
          </div>
          <div className="space-y-4">
            {accessLevels.map((level, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <UserCheck className="h-5 w-5 text-gray-400" />
                    <div>
                      <h4 className="font-medium text-gray-900">{level.level}</h4>
                      <p className="text-sm text-gray-500">{level.users} usuários</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${level.color}`}>
                    Ativo
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-1">Permissões:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {level.permissions.map((permission, idx) => (
                      <li key={idx}>{permission}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* LGPD Compliance */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Conformidade LGPD</h3>
            <Button variant="ghost" size="sm">Ver detalhes</Button>
          </div>
          <div className="space-y-3">
            {complianceItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {item.status === 'compliant' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{item.item}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'compliant' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status === 'compliant' ? 'Conforme' : 'Atenção'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Audit Logs */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Logs de Auditoria</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
            <Button variant="ghost" size="sm">Ver todos</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-900">Usuário</th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">Ação</th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">Recurso</th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">Timestamp</th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">Status</th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-900">{log.user}</td>
                  <td className="px-4 py-2 text-gray-600">{log.action}</td>
                  <td className="px-4 py-2 text-gray-600">{log.resource}</td>
                  <td className="px-4 py-2 text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {log.timestamp}
                  </td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      log.status === 'success' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {log.status === 'success' ? 'Sucesso' : 'Falha'}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-500">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col">
            <Users className="h-6 w-6 mb-2" />
            Gerenciar Usuários
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Lock className="h-6 w-6 mb-2" />
            Políticas de Senha
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Activity className="h-6 w-6 mb-2" />
            Monitor de Atividade
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <FileText className="h-6 w-6 mb-2" />
            Relatório LGPD
          </Button>
        </div>
      </Card>
    </div>
  )
}

