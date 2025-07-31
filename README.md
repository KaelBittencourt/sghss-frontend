SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde

📋 Sobre o Projeto

O SGHSS é um sistema web moderno desenvolvido para a gestão integrada de hospitais, clínicas e serviços de saúde. Este projeto foi desenvolvido como parte do Projeto Multidisciplinar da UNINTER, com ênfase em desenvolvimento Front-end.

🚀 Tecnologias Utilizadas

•
React 18 - Biblioteca JavaScript para interfaces de usuário

•
TypeScript - Superset do JavaScript com tipagem estática

•
Tailwind CSS - Framework CSS utilitário

•
Vite - Build tool e servidor de desenvolvimento

•
React Router - Roteamento para aplicações React

•
Lucide Icons - Biblioteca de ícones

•
Shadcn/UI - Componentes de interface acessíveis

🏗️ Arquitetura

Plain Text


src/
├── components/
│   ├── layout/          # Componentes de layout (Sidebar, Header)
│   └── ui/              # Componentes reutilizáveis
├── pages/               # Páginas da aplicação
│   ├── Dashboard.jsx    # Dashboard principal
│   ├── Patients.jsx     # Gestão de pacientes
│   ├── Professionals.jsx # Gestão de profissionais
│   ├── Administration.jsx # Administração hospitalar
│   ├── Telemedicine.jsx # Interface de telemedicina
│   └── Security.jsx     # Controle de segurança
├── hooks/               # Hooks customizados
├── services/           # Serviços de API
└── utils/              # Utilitários


🎯 Funcionalidades Principais

📊 Dashboard

•
Visão geral do sistema hospitalar

•
Métricas em tempo real

•
Atividades recentes

•
Ações rápidas

👥 Gestão de Pacientes

•
Cadastro e edição de pacientes

•
Busca e filtros avançados

•
Histórico médico

•
Agendamentos

👨‍⚕️ Gestão de Profissionais

•
Controle de equipe médica

•
Gerenciamento de escalas

•
Especialidades e departamentos

•
Status online/offline

🏥 Administração Hospitalar

•
Controle de leitos

•
Gestão de suprimentos

•
Relatórios financeiros

•
Indicadores operacionais

💻 Telemedicina

•
Interface de videochamada

•
Consultas online

•
Agendamentos remotos

•
Prontuários digitais

🔒 Segurança e Compliance

•
Controle de acesso por perfil

•
Logs de auditoria

•
Conformidade LGPD

•
Criptografia de dados

🚀 Como Executar

Pré-requisitos

•
Node.js 18+

•
npm ou pnpm

Instalação

Bash


# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd sghss-frontend

# Instale as dependências
npm install
# ou
pnpm install

# Execute o servidor de desenvolvimento
npm run dev
# ou
pnpm run dev


A aplicação estará disponível em http://localhost:5173

📱 Responsividade

O sistema foi desenvolvido com design responsivo, adaptando-se a diferentes dispositivos:

•
Desktop (1024px+): Layout completo com sidebar expandida

•
Tablet (768px-1023px): Sidebar colapsível

•
Mobile (320px-767px): Menu hambúrguer e layout otimizado

♿ Acessibilidade

O projeto segue as diretrizes WCAG 2.1, incluindo:

•
Navegação por teclado

•
Contraste adequado de cores

•
Suporte a leitores de tela

•
Atributos ARIA apropriados

🧪 Testes

Bash


# Executar testes unitários
npm run test

# Executar testes com cobertura
npm run test:coverage

# Executar testes de acessibilidade
npm run test:a11y


📚 Documentação

•
Documento Principal: docs/projeto_final.pdf

•
Estrutura do Projeto: sghss_estrutura.md

•
Screenshots: docs/screenshots/

•
Referências de Design: docs/references/

🎨 Design System

Cores Principais

•
Primária: Azul (#2563eb) - Confiança médica

•
Secundária: Verde (#16a34a) - Saúde e bem-estar

•
Alerta: Vermelho (#dc2626) - Emergências

•
Aviso: Amarelo (#ca8a04) - Atenção

Tipografia

•
Fonte: Inter

•
Hierarquia: H1 (32px), H2 (24px), H3 (20px), Body (16px)

📋 Status do Projeto

✅ Concluído - Todas as funcionalidades principais implementadas

Módulos Implementados




Dashboard interativo




Gestão de Pacientes




Gestão de Profissionais




Administração Hospitalar




Interface de Telemedicina




Controle de Segurança

Características Técnicas




Design responsivo




Acessibilidade WCAG 2.1




Performance otimizada




Componentes reutilizáveis




Navegação fluida

👨‍💻 Autor

Projeto Multidisciplinar UNINTER


Ênfase: Desenvolvimento Front-end


Professor: Prof. Winston Sen Lun Fung, Me.

📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Análise e Desenvolvimento de Sistemas da UNINTER.





Desenvolvido com ❤️ para o setor de saúde

