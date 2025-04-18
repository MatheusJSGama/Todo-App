# 📝 ToDo App

Uma aplicação simples de lista de tarefas desenvolvida com **React**, **TypeScript** e **Phosphor React Icons**. Ideal para organizar suas tarefas diárias de forma prática e intuitiva.

## 🖼️ Preview

![Preview da aplicação](./public/preview.png) <!-- Atualize com a imagem real se tiver -->

## 🚀 Tecnologias Utilizadas

### ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

O **React** é uma biblioteca JavaScript para construção de interfaces de usuário de forma declarativa e baseada em componentes. Nesta aplicação, ele foi utilizado para:
 - Estruturar toda a interface da aplicação de tarefas, dividindo a UI em componentes reutilizáveis como Header, Task, TasksCreate, etc.

### ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

O **TypeScript** adiciona tipagem estática ao JavaScript, prevenindo erros comuns e melhorando o autocompletion e a manutenção. Ele foi utilizado para:

- Tipar as props dos componentes (TaskProps, etc)

- Garantir segurança na manipulação de eventos (ChangeEvent, FormEvent)

- Melhorar a legibilidade do código e reduzir bugs

### ![CSS Modules](https://img.shields.io/badge/CSS%20Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

O **CSS Modules** permite escrever CSS de forma modular e com escopo local.
- Utilizado para estilizar os componentes sem risco de conflito de classes globais, com arquivos como Task.module.css, Header.module.css, etc.

### ![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-3F3F46?style=for-the-badge&logo=iconify&logoColor=white)
O ***Phosphor Icons** é uma biblioteca de ícones personalizáveis para React.
- Utilizado para exibir ícones de adicionar, deletar e status das tarefas de forma elegante e responsiva.

## ✨ Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Contador de tarefas pendentes
- Interface responsiva
- Ícones estilizados com **Phosphor Icons**

## 📁 Estrutura de Pastas

```bash
    src/
├── assets/
├── components/
│   ├── header/
│   ├── task/
│   ├── tasks-create/
│   └── tasks-empty/
├── App.tsx
├── main.tsx
├── global.css
└── App.module.css
```

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/matheusjsgama/todo-react-ts.git
cd social-feed-app
```

2. Instale as dependências:
```bash
npm install
npm i @phosphor-icons/react
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

📝 Licença
[MIT](https://choosealicense.com/licenses/mit/)