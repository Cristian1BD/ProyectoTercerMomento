# Frontend React - Proyecto Integrador

Este es el frontend de una aplicación desarrollada con **React + Vite**, siguiendo una arquitectura modular y limpia. Está diseñado para conectarse a un backend RESTful construido con **Spring Boot**.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Node.js](https://nodejs.org/) v18+

## 📦 Dependencias instaladas

```bash
npm install axios react-router-dom

 📁 Estructura base del frontend (React + Clean Architecture)

src/
├── app/                  # Configuración principal (router, contextos, etc.)
│   ├── router.jsx
│   ├── App.jsx
│   └── main.jsx
├── features/             # Casos de uso agrupados por dominio (User, Auth, etc.)
│   └── user/
│       ├── components/   # Componentes UI relacionados al dominio
│       ├── pages/        # Páginas completas del dominio
│       ├── services/     # Llamadas a APIs externas (infraestructura)
│       ├── application/  # Lógica de negocio / casos de uso
│       ├── domain/       # Interfaces, modelos y entidades
│       └── index.ts      # Punto de entrada del módulo
├── shared/               # Recursos reutilizables en toda la app
│   ├── components/       # Botones, inputs, layouts, etc.
│   ├── hooks/            # Custom hooks compartidos
│   ├── utils/            # Funciones utilitarias
│   └── constants/        # Constantes globales
├── styles/               # Estilos globales
└── assets/               # Imágenes, íconos, fuentes
