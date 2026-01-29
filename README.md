# app-login

## Sobre o Projeto
Este projeto é uma aplicação web Angular simples que demonstra um fluxo básico de autenticação (cadastro, login e dashboard protegido) usando `localStorage` para simular o armazenamento de estado de usuário.

## Funcionalidades
*   **Cadastro de Usuário**: Permite que novos usuários criem uma conta.
*   **Login de Usuário**: Permite que usuários existentes façam login.
*   **Dashboard Protegido**: Uma página acessível apenas após o login.
*   **Logout**: Permite que o usuário saia da sessão.
*   **Gerenciamento de Estado Simplificado**: Utiliza `localStorage` do navegador para simular a persistência do estado de autenticação.

## Tecnologias Utilizadas
*   Angular (v17.x)
*   TypeScript
*   SCSS (para estilização)

## Primeiros Passos

### Pré-requisitos
Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.
*   Node.js: `https://nodejs.org/`
*   Angular CLI: `npm install -g @angular/cli`

### Instalação

1.  Clone este repositório:
    ```bash
    git clone <https://github.com/Juholiver/appLogin>
    cd app-login
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento:
```bash
ng serve
```
Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos fonte.

### Executando Testes

Para executar os testes unitários:
```bash
ng test
```

## Estrutura do Projeto
```
.
├── src/
│   ├── app/
│   │   ├── auth/            # Serviço e guarda de autenticação
│   │   ├── pages/           # Componentes de página (login, register, dashboard)
│   │   ├── app.component.ts # Componente raiz
│   │   ├── app.routes.ts    # Definição das rotas
│   │   └── ...
│   ├── assets/              # Ativos estáticos
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts              # Ponto de entrada da aplicação
│   └── styles.scss          # Estilos globais
├── angular.json             # Configuração do Angular CLI
├── package.json             # Dependências e scripts do projeto
├── README.md                # Este arquivo
└── tsconfig.json            # Configurações do TypeScript
```

## Como a Autenticação Funciona (Simulada)

Este projeto utiliza `localStorage` para simular o processo de autenticação.
*   Ao **cadastrar**, as credenciais (email e senha) são armazenadas no `localStorage` do navegador.
*   Ao **fazer login**, as credenciais fornecidas são verificadas em relação às credenciais armazenadas no `localStorage`. Se corresponderem, um sinalizador `isLoggedIn` é definido no `localStorage`.
*   O `AuthGuard` verifica a existência do sinalizador `isLoggedIn` no `localStorage` para proteger a rota do `dashboard`.
*   Ao **fazer logout**, o sinalizador `isLoggedIn` é removido do `localStorage`.

**Importante**: Esta abordagem é apenas para fins de demonstração e **não é segura** para aplicações em produção. Em uma aplicação real, você usaria um backend para autenticação, tokens JWT e sessões seguras (ex: cookies HttpOnly).