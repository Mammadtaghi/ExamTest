import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProProvider } from './Context/proContext.jsx'
import { WishlistProvider } from './Context/wishlist Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WishlistProvider>
      <ProProvider>
        <App />
      </ProProvider>
    </WishlistProvider>
  </BrowserRouter>,
)
