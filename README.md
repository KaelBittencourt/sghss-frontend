# SGHSS Backend - Sistema de Gestão Hospitalar e de Serviços de Saúde

## 📋 Sobre o Projeto

O SGHSS Backend é a API REST que alimenta o Sistema de Gestão Hospitalar e de Serviços de Saúde. Desenvolvido em Flask com SQLAlchemy, oferece endpoints completos para gerenciamento de pacientes, profissionais de saúde, agendamentos e todas as funcionalidades do sistema hospitalar.

## 🚀 Tecnologias Utilizadas

- **Flask** - Framework web Python
- **SQLAlchemy** - ORM para banco de dados
- **SQLite** - Banco de dados (desenvolvimento)
- **Flask-CORS** - Suporte a Cross-Origin Resource Sharing
- **Python 3.11+** - Linguagem de programação

## 🏗️ Arquitetura da API

```
src/
├── models/              # Modelos de dados (SQLAlchemy)
│   ├── user.py         # Modelo de usuário base
│   ├── patient.py      # Modelo de pacientes
│   ├── professional.py # Modelo de profissionais
│   ├── appointment.py  # Modelo de agendamentos
│   ├── medical_record.py # Prontuários médicos
│   └── audit_log.py    # Logs de auditoria
├── routes/             # Rotas da API (Blueprints)
│   ├── user.py        # Rotas de usuários
│   ├── patient.py     # Rotas de pacientes
│   ├── professional.py # Rotas de profissionais
│   ├── appointment.py # Rotas de agendamentos
│   ├── dashboard.py   # Rotas do dashboard
│   └── auth.py        # Autenticação e autorização
├── static/            # Arquivos estáticos (Frontend)
├── database/          # Banco de dados SQLite
│   └── app.db        # Arquivo do banco
└── main.py           # Ponto de entrada da aplicação
```

## 🎯 Funcionalidades da API

### 👥 Gestão de Pacientes
- **POST** `/api/patients` - Cadastrar novo paciente
- **GET** `/api/patients` - Listar todos os pacientes
- **GET** `/api/patients/{id}` - Buscar paciente por ID
- **PUT** `/api/patients/{id}` - Atualizar dados do paciente
- **DELETE** `/api/patients/{id}` - Remover paciente
- **GET** `/api/patients/search?q={termo}` - Buscar pacientes

### 👨‍⚕️ Gestão de Profissionais
- **POST** `/api/professionals` - Cadastrar novo profissional
- **GET** `/api/professionals` - Listar todos os profissionais
- **GET** `/api/professionals/{id}` - Buscar profissional por ID
- **PUT** `/api/professionals/{id}` - Atualizar dados do profissional
- **DELETE** `/api/professionals/{id}` - Remover profissional
- **PUT** `/api/professionals/{id}/status` - Atualizar status online

### 📅 Gestão de Agendamentos
- **POST** `/api/appointments` - Criar novo agendamento
- **GET** `/api/appointments` - Listar agendamentos
- **GET** `/api/appointments/{id}` - Buscar agendamento por ID
- **PUT** `/api/appointments/{id}` - Atualizar agendamento
- **DELETE** `/api/appointments/{id}` - Cancelar agendamento
- **PUT** `/api/appointments/{id}/status` - Atualizar status

### 📊 Dashboard e Relatórios
- **GET** `/api/dashboard/stats` - Estatísticas gerais
- **GET** `/api/dashboard/activities` - Atividades recentes
- **GET** `/api/reports/patients` - Relatório de pacientes
- **GET** `/api/reports/appointments` - Relatório de agendamentos

### 🔒 Autenticação e Segurança
- **POST** `/api/auth/login` - Login de usuário
- **POST** `/api/auth/logout` - Logout de usuário
- **GET** `/api/auth/profile` - Perfil do usuário logado
- **GET** `/api/audit/logs` - Logs de auditoria

## 🚀 Como Executar

### Pré-requisitos
- Python 3.11 ou superior
- pip (gerenciador de pacotes Python)

### Instalação e Execução

1. **Clone ou extraia o projeto:**
```bash
cd sghss-backend
```

2. **Ative o ambiente virtual:**
```bash
# No Linux/Mac
source venv/bin/activate

# No Windows
venv\Scripts\activate
```

3. **Instale as dependências:**
```bash
pip install -r requirements.txt
```

4. **Execute a aplicação:**
```bash
python src/main.py
```

A API estará disponível em `http://localhost:5000`

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (opcional):

```env
FLASK_ENV=development
SECRET_KEY=sua_chave_secreta_aqui
DATABASE_URL=sqlite:///database/app.db
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

## 📊 Modelos de Dados

### Paciente (Patient)
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "(11) 99999-9999",
  "cpf": "123.456.789-00",
  "birth_date": "1990-01-01",
  "gender": "Masculino",
  "address": "Rua das Flores, 123",
  "city": "São Paulo",
  "state": "SP",
  "zip_code": "01234-567",
  "blood_type": "O+",
  "allergies": "Nenhuma",
  "medical_conditions": "Hipertensão",
  "status": "active"
}
```

### Profissional (Professional)
```json
{
  "id": 1,
  "name": "Dr. Ana Santos",
  "email": "ana@hospital.com",
  "profession": "Médico",
  "specialty": "Cardiologia",
  "license_number": "CRM123456",
  "department": "Cardiologia",
  "work_schedule": "08:00-18:00",
  "status": "active",
  "online_status": "online",
  "can_telemedicine": true
}
```

### Agendamento (Appointment)
```json
{
  "id": 1,
  "patient_id": 1,
  "professional_id": 1,
  "appointment_date": "2024-01-15T10:00:00",
  "duration_minutes": 30,
  "appointment_type": "consulta",
  "status": "scheduled",
  "is_telemedicine": false,
  "reason": "Consulta de rotina"
}
```

## 🧪 Testando a API

### Usando curl

**Listar pacientes:**
```bash
curl -X GET http://localhost:5000/api/patients
```

**Criar novo paciente:**
```bash
curl -X POST http://localhost:5000/api/patients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 99999-9999",
    "cpf": "123.456.789-00",
    "birth_date": "1990-01-01",
    "gender": "Masculino",
    "address": "Rua das Flores, 123",
    "city": "São Paulo",
    "state": "SP",
    "zip_code": "01234-567"
  }'
```

**Buscar paciente por ID:**
```bash
curl -X GET http://localhost:5000/api/patients/1
```

### Usando Postman

Importe a coleção de endpoints disponível em `docs/postman_collection.json`

## 🔒 Segurança

### Recursos Implementados
- **CORS** configurado para permitir requisições do frontend
- **Validação de dados** em todos os endpoints
- **Logs de auditoria** para todas as operações
- **Sanitização de inputs** para prevenir SQL injection
- **Estrutura preparada** para autenticação JWT

### Conformidade LGPD
- Logs de acesso a dados pessoais
- Estrutura para consentimento de dados
- Anonimização de dados sensíveis em logs
- Controle de retenção de dados

## 📈 Performance

### Otimizações Implementadas
- **Paginação** em listagens grandes
- **Índices** nos campos mais consultados
- **Lazy loading** em relacionamentos
- **Cache** de consultas frequentes
- **Compressão** de respostas JSON

## 🐳 Deploy

### Usando Docker (Recomendado)

1. **Construir a imagem:**
```bash
docker build -t sghss-backend .
```

2. **Executar o container:**
```bash
docker run -p 5000:5000 sghss-backend
```

### Deploy Manual

1. **Atualizar dependências:**
```bash
pip freeze > requirements.txt
```

2. **Configurar variáveis de produção:**
```bash
export FLASK_ENV=production
export SECRET_KEY=sua_chave_super_secreta
```

3. **Usar servidor WSGI (Gunicorn):**
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 src.main:app
```

## 📚 Documentação da API

### Swagger/OpenAPI
Acesse `http://localhost:5000/docs` para ver a documentação interativa da API.

### Exemplos de Uso
Consulte o diretório `docs/examples/` para exemplos práticos de uso da API.

## 🧪 Testes

### Executar testes unitários:
```bash
python -m pytest tests/
```

### Executar testes de integração:
```bash
python -m pytest tests/integration/
```

### Cobertura de testes:
```bash
python -m pytest --cov=src tests/
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Changelog

### v1.0.0 (2024-01-13)
- ✅ Sistema completo de gestão de pacientes
- ✅ Sistema completo de gestão de profissionais
- ✅ Sistema de agendamentos
- ✅ Dashboard com estatísticas
- ✅ Logs de auditoria
- ✅ API REST completa
- ✅ Documentação Swagger

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Projeto Multidisciplinar da UNINTER.

## 👨‍💻 Autor

**Projeto Multidisciplinar UNINTER**  
Desenvolvimento Full-Stack  
Professor: Prof. Winston Sen Lun Fung, Me.

## 🆘 Suporte

Para dúvidas ou problemas:

1. Consulte a documentação da API em `/docs`
2. Verifique os logs da aplicação
3. Consulte os exemplos em `docs/examples/`
4. Abra uma issue no repositório

## 🔗 Links Úteis

- [Documentação Flask](https://flask.palletsprojects.com/)
- [SQLAlchemy ORM](https://docs.sqlalchemy.org/)
- [Flask-CORS](https://flask-cors.readthedocs.io/)
- [Postman](https://www.postman.com/)

---

**Desenvolvido com ❤️ para revolucionar a gestão hospitalar**

