import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App.tsx'

import './index.css'

const routes = [
  {
    path: '/',
    element: <App />,
  },
];

const router = createBrowserRouter(routes, {
  basename: '/reseeder/'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
