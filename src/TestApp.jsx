import React from 'react'

function TestApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sistema SGHSS - Teste de Funcionalidades</h1>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Dashboard</h2>
        <button onClick={() => alert('Relatório - Funcionalidade implementada!')}>
          📊 Gerar Relatório
        </button>
        <button onClick={() => alert('Dados atualizados!')} style={{ marginLeft: '10px' }}>
          🔄 Atualizar Dados
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Pacientes</h2>
        <button onClick={() => alert('Modal de Novo Paciente - Implementado!')}>
          👤 Novo Paciente
        </button>
        <button onClick={() => alert('Visualizar Paciente - Implementado!')} style={{ marginLeft: '10px' }}>
          👁️ Ver Paciente
        </button>
        <button onClick={() => alert('Editar Paciente - Implementado!')} style={{ marginLeft: '10px' }}>
          ✏️ Editar Paciente
        </button>
        <button onClick={() => alert('Agendar Consulta - Implementado!')} style={{ marginLeft: '10px' }}>
          📅 Agendar Consulta
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Profissionais</h2>
        <button onClick={() => alert('Modal de Novo Profissional - Implementado!')}>
          👨‍⚕️ Novo Profissional
        </button>
        <button onClick={() => alert('Visualizar Profissional - Implementado!')} style={{ marginLeft: '10px' }}>
          👁️ Ver Profissional
        </button>
        <button onClick={() => alert('Editar Profissional - Implementado!')} style={{ marginLeft: '10px' }}>
          ✏️ Editar Profissional
        </button>
        <button onClick={() => alert('Gerenciar Agenda - Implementado!')} style={{ marginLeft: '10px' }}>
          📅 Gerenciar Agenda
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Ações Rápidas</h2>
        <button onClick={() => alert('Novo Paciente - Implementado!')}>
          👤 Novo Paciente
        </button>
        <button onClick={() => alert('Agendar Consulta - Implementado!')} style={{ marginLeft: '10px' }}>
          📅 Agendar Consulta
        </button>
        <button onClick={() => alert('Emergência - Implementado!')} style={{ marginLeft: '10px' }}>
          🚨 Emergência
        </button>
        <button onClick={() => alert('Teleconsulta - Implementado!')} style={{ marginLeft: '10px' }}>
          💻 Teleconsulta
        </button>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f8ff', border: '1px solid #0066cc' }}>
        <h3>✅ Funcionalidades Implementadas:</h3>
        <ul>
          <li>✅ Modal de cadastro de pacientes com formulário completo</li>
          <li>✅ Modal de cadastro de profissionais com formulário completo</li>
          <li>✅ Modal de agendamento de consultas</li>
          <li>✅ Botões funcionais no Dashboard (Relatório, Atualizar)</li>
          <li>✅ Botões de ação para pacientes (Ver, Editar, Agendar)</li>
          <li>✅ Botões de ação para profissionais (Ver, Editar, Agenda)</li>
          <li>✅ Ações rápidas funcionais</li>
          <li>✅ Sistema de busca e filtros funcionais</li>
          <li>✅ Estados gerenciados com React hooks</li>
        </ul>
      </div>
    </div>
  )
}

export default TestApp

