import { useState } from 'react'
import { 
  Search, 
  Plus, 
  Filter, 
  Eye, 
  Edit, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Clock,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ProfessionalModal } from '@/components/modals/ProfessionalModal'

const professionals = [
  {
    id: 1,
    name: 'Dr. Ana Silva Santos',
    specialty: 'Cardiologia',
    crm: 'CRM/SP 123456',
    phone: '(11) 99999-9999',
    email: 'ana.silva@vidaplus.com',
    department: 'Cardiologia',
    status: 'Online',
    schedule: '08:00 - 18:00',
    patients: 45,
    consultations: 12
  },
  {
    id: 2,
    name: 'Dr. João Carlos Oliveira',
    specialty: 'Neurologia',
    crm: 'CRM/RJ 789012',
    phone: '(21) 88888-8888',
    email: 'joao.oliveira@vidaplus.com',
    department: 'Neurologia',
    status: 'Ocupado',
    schedule: '07:00 - 15:00',
    patients: 38,
    consultations: 8
  },
  {
    id: 3,
    name: 'Dra. Maria Fernanda Costa',
    specialty: 'Pediatria',
    crm: 'CRM/MG 345678',
    phone: '(31) 77777-7777',
    email: 'maria.costa@vidaplus.com',
    department: 'Pediatria',
    status: 'Online',
    schedule: '13:00 - 21:00',
    patients: 52,
    consultations: 15
  },
  {
    id: 4,
    name: 'Enf. Carlos Eduardo Lima',
    specialty: 'Enfermagem',
    coren: 'COREN/BA 567890',
    phone: '(71) 66666-6666',
    email: 'carlos.lima@vidaplus.com',
    department: 'UTI',
    status: 'Offline',
    schedule: '19:00 - 07:00',
    patients: 28,
    consultations: 0
  }
]

const statusColors = {
  'Online': 'bg-green-100 text-green-800',
  'Ocupado': 'bg-yellow-100 text-yellow-800',
  'Offline': 'bg-gray-100 text-gray-800'
}

export function Professionals() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [isProfessionalModalOpen, setIsProfessionalModalOpen] = useState(false)
  const [selectedProfessional, setSelectedProfessional] = useState(null)
  const [professionalsList, setProfessionalsList] = useState(professionals)

  const filteredProfessionals = professionalsList.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.department.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (selectedFilter === 'all') return matchesSearch
    return matchesSearch && professional.status.toLowerCase() === selectedFilter.toLowerCase()
  })

  const handleNewProfessional = () => {
    setSelectedProfessional(null)
    setIsProfessionalModalOpen(true)
  }

  const handleEditProfessional = (professional) => {
    setSelectedProfessional(professional)
    setIsProfessionalModalOpen(true)
  }

  const handleViewProfessional = (professional) => {
    alert(`Visualizar detalhes de: ${professional.name}`)
  }

  const handleManageSchedule = (professional) => {
    alert(`Gerenciar agenda de: ${professional.name}`)
  }

  const handleSaveProfessional = (professionalData) => {
    if (selectedProfessional) {
      setProfessionalsList(prev => prev.map(p => 
        p.id === selectedProfessional.id 
          ? { ...p, ...professionalData }
          : p
      ))
    } else {
      const newProfessional = {
        id: Date.now(),
        ...professionalData,
        patients: 0,
        consultations: 0
      }
      setProfessionalsList(prev => [...prev, newProfessional])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profissionais de Saúde</h1>
          <p className="text-gray-600">Gerenciar equipe médica e de enfermagem</p>
        </div>
        <Button onClick={handleNewProfessional}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Profissional
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nome, especialidade ou departamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todos</option>
              <option value="online">Online</option>
              <option value="ocupado">Ocupado</option>
              <option value="offline">Offline</option>
            </select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </Card>

      {/* Professionals List */}
      <div className="grid gap-4">
        {filteredProfessionals.map((professional) => (
          <Card key={professional.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{professional.name}</h3>
                  <p className="text-sm font-medium text-blue-600">{professional.specialty}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span>{professional.crm || professional.coren}</span>
                    <span className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {professional.phone}
                    </span>
                    <span className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {professional.email}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">{professional.patients}</p>
                  <p className="text-xs text-gray-500">Pacientes</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">{professional.consultations}</p>
                  <p className="text-xs text-gray-500">Consultas Hoje</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{professional.department}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {professional.schedule}
                  </p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${statusColors[professional.status]}`}>
                    {professional.status}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => handleViewProfessional(professional)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleEditProfessional(professional)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleManageSchedule(professional)}>
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">89</p>
          <p className="text-sm text-gray-600">Total de Profissionais</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">67</p>
          <p className="text-sm text-gray-600">Online Agora</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">156</p>
          <p className="text-sm text-gray-600">Consultas Hoje</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">12</p>
          <p className="text-sm text-gray-600">Departamentos</p>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col" onClick={handleNewProfessional}>
            <Plus className="h-6 w-6 mb-2" />
            Novo Profissional
          </Button>
          <Button variant="outline" className="h-20 flex-col" onClick={() => alert('Gerenciar Escalas - Em desenvolvimento')}>
            <Calendar className="h-6 w-6 mb-2" />
            Gerenciar Escalas
          </Button>
          <Button variant="outline" className="h-20 flex-col" onClick={() => alert('Relatório de Atividades - Em desenvolvimento')}>
            <CheckCircle className="h-6 w-6 mb-2" />
            Relatório de Atividades
          </Button>
          <Button variant="outline" className="h-20 flex-col" onClick={() => alert('Especialidades - Em desenvolvimento')}>
            <Stethoscope className="h-6 w-6 mb-2" />
            Especialidades
          </Button>
        </div>
      </Card>

      {/* Modal */}
      <ProfessionalModal
        isOpen={isProfessionalModalOpen}
        onClose={() => setIsProfessionalModalOpen(false)}
        professional={selectedProfessional}
        onSave={handleSaveProfessional}
      />
    </div>
  )
}

