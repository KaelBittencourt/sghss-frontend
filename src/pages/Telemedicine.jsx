import { useState } from 'react'
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff,
  Calendar,
  Clock,
  Users,
  FileText,
  Share,
  MessageCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const activeConsultations = [
  {
    id: 1,
    patient: 'Maria Santos Silva',
    doctor: 'Dr. Ana Silva',
    startTime: '14:30',
    duration: '00:15:32',
    status: 'Em andamento',
    type: 'Consulta de rotina'
  },
  {
    id: 2,
    patient: 'João Carlos Oliveira',
    doctor: 'Dr. Pedro Costa',
    startTime: '14:45',
    duration: '00:08:15',
    status: 'Em andamento',
    type: 'Retorno'
  }
]

const scheduledConsultations = [
  {
    id: 1,
    patient: 'Ana Paula Costa',
    doctor: 'Dra. Maria Fernanda',
    time: '15:00',
    type: 'Primeira consulta',
    status: 'Agendada'
  },
  {
    id: 2,
    patient: 'Carlos Eduardo Lima',
    doctor: 'Dr. João Santos',
    time: '15:30',
    type: 'Consulta de retorno',
    status: 'Agendada'
  },
  {
    id: 3,
    patient: 'Fernanda Silva',
    doctor: 'Dr. Ana Silva',
    time: '16:00',
    type: 'Exame de rotina',
    status: 'Confirmada'
  }
]

export function Telemedicine() {
  const [isInCall, setIsInCall] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Telemedicina</h1>
          <p className="text-gray-600">Consultas e atendimentos online</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Agendar Consulta
          </Button>
          <Button>
            <Video className="h-4 w-4 mr-2" />
            Nova Consulta
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">2</p>
          <p className="text-sm text-gray-600">Consultas Ativas</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">12</p>
          <p className="text-sm text-gray-600">Consultas Hoje</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">8</p>
          <p className="text-sm text-gray-600">Agendadas</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">156</p>
          <p className="text-sm text-gray-600">Este Mês</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Video Call Interface */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Interface de Videochamada</h3>
          
          {!isInCall ? (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Nenhuma consulta ativa</p>
              <Button onClick={() => setIsInCall(true)}>
                <Video className="h-4 w-4 mr-2" />
                Iniciar Consulta
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Video Area */}
              <div className="bg-gray-900 rounded-lg aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="h-12 w-12 mx-auto mb-2" />
                    <p>Consulta em andamento</p>
                    <p className="text-sm opacity-75">Dr. Ana Silva - Maria Santos</p>
                  </div>
                </div>
                
                {/* Small video preview */}
                <div className="absolute top-4 right-4 w-24 h-18 bg-gray-700 rounded border-2 border-white">
                  <div className="flex items-center justify-center h-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Call Controls */}
              <div className="flex justify-center space-x-4">
                <Button
                  variant={isMuted ? "destructive" : "outline"}
                  size="lg"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </Button>
                
                <Button
                  variant={!isVideoOn ? "destructive" : "outline"}
                  size="lg"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                >
                  {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </Button>
                
                <Button variant="outline" size="lg">
                  <Share className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                
                <Button 
                  variant="destructive" 
                  size="lg"
                  onClick={() => setIsInCall(false)}
                >
                  <PhoneOff className="h-5 w-5" />
                </Button>
              </div>

              {/* Call Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Maria Santos Silva</p>
                    <p className="text-sm text-gray-600">Consulta de rotina</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">00:15:32</p>
                    <p className="text-sm text-gray-600">Duração</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Active Consultations */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultas Ativas</h3>
          <div className="space-y-3">
            {activeConsultations.map((consultation) => (
              <div key={consultation.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{consultation.patient}</p>
                    <p className="text-sm text-gray-600">{consultation.doctor}</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {consultation.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Início: {consultation.startTime}
                  </span>
                  <span>Duração: {consultation.duration}</span>
                </div>
                <div className="mt-2 flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Video className="h-3 w-3 mr-1" />
                    Entrar
                  </Button>
                  <Button size="sm" variant="ghost">
                    <FileText className="h-3 w-3 mr-1" />
                    Prontuário
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Scheduled Consultations */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Consultas Agendadas</h3>
          <Button variant="ghost" size="sm">Ver todas</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scheduledConsultations.map((consultation) => (
            <div key={consultation.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">{consultation.patient}</p>
                  <p className="text-sm text-gray-600">{consultation.doctor}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  consultation.status === 'Confirmada' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {consultation.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{consultation.type}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {consultation.time}
                </span>
                <Button size="sm">
                  <Video className="h-3 w-3 mr-1" />
                  Iniciar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col">
            <Video className="h-6 w-6 mb-2" />
            Nova Consulta
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Calendar className="h-6 w-6 mb-2" />
            Agendar
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <FileText className="h-6 w-6 mb-2" />
            Prontuários
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Users className="h-6 w-6 mb-2" />
            Sala de Espera
          </Button>
        </div>
      </Card>
    </div>
  )
}

