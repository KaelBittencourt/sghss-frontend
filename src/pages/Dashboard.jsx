import { 
  Users, 
  UserCheck, 
  Calendar, 
  Activity,
  TrendingUp,
  TrendingDown,
  Clock,
  AlertCircle
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const stats = [
  {
    title: 'Pacientes Ativos',
    value: '2,847',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Consultas Hoje',
    value: '156',
    change: '+5%',
    trend: 'up',
    icon: Calendar,
    color: 'text-green-600'
  },
  {
    title: 'Profissionais Online',
    value: '89',
    change: '-2%',
    trend: 'down',
    icon: UserCheck,
    color: 'text-purple-600'
  },
  {
    title: 'Leitos Ocupados',
    value: '234/280',
    change: '83.5%',
    trend: 'up',
    icon: Activity,
    color: 'text-orange-600'
  }
]

const recentActivities = [
  {
    id: 1,
    type: 'consultation',
    message: 'Nova consulta agendada - Maria Santos',
    time: '2 min atrás',
    priority: 'normal'
  },
  {
    id: 2,
    type: 'emergency',
    message: 'Paciente em emergência - João Silva',
    time: '5 min atrás',
    priority: 'high'
  },
  {
    id: 3,
    type: 'discharge',
    message: 'Alta médica - Ana Costa',
    time: '10 min atrás',
    priority: 'normal'
  },
  {
    id: 4,
    type: 'telemedicine',
    message: 'Teleconsulta iniciada - Dr. Pedro',
    time: '15 min atrás',
    priority: 'normal'
  }
]

const upcomingAppointments = [
  {
    id: 1,
    patient: 'Carlos Oliveira',
    doctor: 'Dr. Ana Silva',
    time: '09:00',
    type: 'Consulta'
  },
  {
    id: 2,
    patient: 'Fernanda Lima',
    doctor: 'Dr. João Santos',
    time: '09:30',
    type: 'Exame'
  },
  {
    id: 3,
    patient: 'Roberto Costa',
    doctor: 'Dra. Maria Ferreira',
    time: '10:00',
    type: 'Retorno'
  }
]

export function Dashboard() {
  const [lastUpdate, setLastUpdate] = useState(new Date())

  const handleGenerateReport = () => {
    alert('Gerando relatório do sistema...')
  }

  const handleRefreshData = () => {
    setLastUpdate(new Date())
    alert('Dados atualizados!')
  }

  const handleViewAllActivities = () => {
    alert('Visualizar todas as atividades - Em desenvolvimento')
  }

  const handleViewSchedule = () => {
    alert('Visualizar agenda completa - Em desenvolvimento')
  }

  const handleQuickAction = (action) => {
    alert(`${action} - Em desenvolvimento`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Visão geral do sistema hospitalar</p>
          <p className="text-xs text-gray-500">Última atualização: {lastUpdate.toLocaleTimeString()}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleGenerateReport}>
            <Clock className="h-4 w-4 mr-2" />
            Relatório
          </Button>
          <Button onClick={handleRefreshData}>
            <Activity className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown
          
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendIcon className={`h-4 w-4 mr-1 ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`} />
                    <span className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Atividades Recentes</h3>
            <Button variant="ghost" size="sm" onClick={handleViewAllActivities}>Ver todas</Button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`p-2 rounded-full ${
                  activity.priority === 'high' 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Appointments */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Próximas Consultas</h3>
            <Button variant="ghost" size="sm" onClick={handleViewSchedule}>Ver agenda</Button>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                  <p className="text-xs text-gray-500">{appointment.doctor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                  <p className="text-xs text-gray-500">{appointment.type}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col" onClick={() => handleQuickAction('Novo Paciente')}>
            <Users className="h-6 w-6 mb-2" />
            Novo Paciente
          </Button>
          <Button variant="outline" className="h-20 flex-col" onClick={() => handleQuickAction('Agendar Consulta')}>
            <Calendar className="h-6 w-6 mb-2" />
            Agendar Consulta
          </Button>
          <Button variant="outline" className="h-20 flex-col" onClick={() => handleQuickAction('Emergência')}>
            <Activity className="h-6 w-6 mb-2" />
            Emergência
          </Button>
          <Button variant="outline" className="h-20 flex-col" onClick={() => handleQuickAction('Teleconsulta')}>
            <UserCheck className="h-6 w-6 mb-2" />
            Teleconsulta
          </Button>
        </div>
      </Card>
    </div>
  )
}

