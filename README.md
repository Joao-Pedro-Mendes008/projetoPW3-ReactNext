# 🔐 Sistema de Autenticação com Next.js

Projeto desenvolvido com foco em autenticação, troca de tema claro/escuro, gerenciamento de estado com Context API, navegação protegida e animação de carregamento entre páginas.

---

## 🚀 Funcionalidades Implementadas

- ✅ Sistema de login com validação de credenciais
- ✅ Persistência de autenticação via cookies (`js-cookie`)
- ✅ Opção "Lembrar-me" para manter login
- ✅ Tema claro/escuro com Tailwind CSS e Context API
- ✅ Componente `<ThemeToggleButton />` para alternar tema
- ✅ Componentes reutilizáveis: `Header`, `Footer`, `LoadingSpinner`, `ThemeToggleButton`
- ✅ Exibição de `<LoadingSpinner />` entre troca de rotas
- ✅ Página principal com conteúdo dividido em seções
- ✅ Navegação protegida após login
- ✅ Estilização moderna e responsiva com Tailwind CSS

---

## 🧪 Tecnologias Utilizadas

- [Next.js 13+ App Router](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [js-cookie](https://www.npmjs.com/package/js-cookie) para persistência do login

---

## 💻 Como Executar Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```bash
http://localhost:3000
```

**Credenciais de Teste:**

Usuário: admin

Senha: admin123

**Estrutura do Diretórios:**

src/
├── app/

│   ├── login/

│   │   └── page.js       # Página de login

│   ├── default/

│   │   └── page.js       # Página protegida após login

│   └── layout.js         # Aplica tema e loading entre páginas

│

├── components/

│   ├── Header.js

│   ├── Footer.js

│   ├── LoadingSpinner.js

│   ├── ThemeToggleButton.js

│   └── RouteLoader.js

│

├── context/

│   └── ThemeContext.js

│

├── styles/

│   └── globals.css   

│

├── utils/

│   └── auth.js     

**Dependências:**

"dependencies": {
  "next": "^13 || ^14",
  "react": "^18",
  "js-cookie": "^3.0.5",
  "tailwindcss": "^3.3"
}

## Decisões Técnicas

- Utilizamos Context API para gerenciar tema e autenticação
- Implementamos validação simples no front-end (idealmente seria no back-end)
- Adotamos Tailwind CSS para estilização consistente
