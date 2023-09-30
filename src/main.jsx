import React from 'react'
import ReactDOM from 'react-dom/client'

import myCreatedRoute from './router/route'

import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
