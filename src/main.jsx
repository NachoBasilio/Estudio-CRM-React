import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import EditarCliente, {loader as EditarClienteLoader, action as EditarClienteAction } from './pages/EditarCliente'
import { action as clienteActionEliminar } from './components/Cliente'


import './index.css'
import ErrorPage from './components/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[ 
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: EditarClienteLoader,
        errorElement: <ErrorPage/>,
        action: EditarClienteAction
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: clienteActionEliminar
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
