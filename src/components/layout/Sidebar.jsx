import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Settings, 
  Video, 
  Shield,
  Activity,
  Calendar,
  FileText,
  BarChart3
} from 'lucide-react'

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  {
    title: 'Pacientes',
    icon: Users,
    path: '/patients'
  },
  {
    title: 'Profissionais',
    icon: UserCheck,
    path: '/professionals'
  },
  {
    title: 'Administração',
    icon: Settings,
    path: '/administration'
  },
  {
    title: 'Telemedicina',
    icon: Video,
    path: '/telemedicine'
  },
  {
    title: 'Segurança',
    icon: Shield,
    path: '/security'
  }
]

export function Sidebar({ isOpen }) {
  const location = useLocation()

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-blue-600" />
            {isOpen && (
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">SGHSS</span>
                <span className="text-xs text-gray-500">VidaPlus</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span className="ml-3">{item.title}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">VP</span>
            </div>
            {isOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">VidaPlus</p>
                <p className="text-xs text-gray-500">Sistema Hospitalar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

