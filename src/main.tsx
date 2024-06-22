import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
      <React.StrictMode>
        <App />
        <Analytics />
      </React.StrictMode>
    </NextUIProvider>
)

export default App;