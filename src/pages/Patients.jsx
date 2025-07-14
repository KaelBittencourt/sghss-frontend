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
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PatientModal } from '@/components/modals/PatientModal'
import { AppointmentModal } from '@/components/modals/AppointmentModal'

const patients = [
  {
    id: 1,
    name: 'Maria Santos Silva',
    age: 45,
    gender: 'Feminino',
    phone: '(11) 99999-9999',
    email: 'maria.santos@email.com',
    address: 'São Paulo, SP',
    lastVisit: '2024-01-10',
    condition: 'Hipertensão',
    status: 'Ativo'
  },
  {
    id: 2,
    name: 'João Carlos Oliveira',
    age: 32,
    gender: 'Masculino',
    phone: '(11) 88888-8888',
    email: 'joao.carlos@email.com',
    address: 'Rio de Janeiro, RJ',
    lastVisit: '2024-01-08',
    condition: 'Diabetes',
    status: 'Ativo'
  },
  {
    id: 3,
    name: 'Ana Paula Costa',
    age: 28,
    gender: 'Feminino',
    phone: '(11) 77777-7777',
    email: 'ana.paula@email.com',
    address: 'Belo Horizonte, MG',
    lastVisit: '2024-01-05',
    condition: 'Asma',
    status: 'Inativo'
  },
  {
    id: 4,
    name: 'Carlos Eduardo Lima',
    age: 55,
    gender: 'Masculino',
    phone: '(11) 66666-6666',
    email: 'carlos.lima@email.com',
    address: 'Salvador, BA',
    lastVisit: '2024-01-12',
    condition: 'Cardiopatia',
    status: 'Ativo'
  }
]

export function Patients() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [patientsList, setPatientsList] = useState(patients)

  const filteredPatients = patientsList.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (selectedFilter === 'all') return matchesSearch
    return matchesSearch && patient.status.toLowerCase() === selectedFilter
  })

  const handleNewPatient = () => {
    setSelectedPatient(null)
    setIsPatientModalOpen(true)
  }

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient)
    setIsPatientModalOpen(true)
  }

  const handleViewPatient = (patient) => {
    // Implementar visualização detalhada do paciente
    alert(`Visualizar detalhes de: ${patient.name}`)
  }

  const handleScheduleAppointment = (patient) => {
    setSelectedPatient(patient)
    setIsAppointmentModalOpen(true)
  }

  const handleSavePatient = (patientData) => {
    if (selectedPatient) {
      // Editar paciente existente
      setPatientsList(prev => prev.map(p => 
        p.id === selectedPatient.id 
          ? { ...p, ...patientData }
          : p
      ))
    } else {
      // Adicionar novo paciente
      const newPatient = {
        id: Date.now(),
        ...patientData,
        lastVisit: new Date().toISOString().split('T')[0]
      }
      setPatientsList(prev => [...prev, newPatient])
    }
  }

  const handleSaveAppointment = (appointmentData) => {
    // Implementar salvamento de agendamento
    alert(`Consulta agendada para: ${selectedPatient?.name}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pacientes</h1>
          <p className="text-gray-600">Gerenciar cadastro e histórico de pacientes</p>
        </div>
        <Button onClick={handleNewPatient}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Paciente
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nome ou email..."
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
              <option value="ativo">Ativos</option>
              <option value="inativo">Inativos</option>
            </select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </Card>

      {/* Patients List */}
      <div className="grid gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {patient.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{patient.age} anos • {patient.gender}</span>
                    <span className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {patient.phone}
                    </span>
                    <span className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {patient.email}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {patient.address}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Última consulta</p>
                  <p className="text-sm text-gray-500">{patient.lastVisit}</p>
                  <p className="text-sm text-gray-600">{patient.condition}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    patient.status === 'Ativo' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {patient.status}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => handleViewPatient(patient)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleEditPatient(patient)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleScheduleAppointment(patient)}>
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
          <p className="text-2xl font-bold text-blue-600">2,847</p>
          <p className="text-sm text-gray-600">Total de Pacientes</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">2,234</p>
          <p className="text-sm text-gray-600">Pacientes Ativos</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">156</p>
          <p className="text-sm text-gray-600">Consultas Hoje</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">89</p>
          <p className="text-sm text-gray-600">Novos este mês</p>
        </Card>
      </div>

      {/* Modals */}
      <PatientModal
        isOpen={isPatientModalOpen}
        onClose={() => setIsPatientModalOpen(false)}
        patient={selectedPatient}
        onSave={handleSavePatient}
      />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        onSave={handleSaveAppointment}
        patients={patientsList}
        professionals={[]} // Será preenchido quando implementarmos a integração
      />
    </div>
  )
}

