import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layouts/Layout'
import Add from './Pages/Add Page'
import Home from './Pages/Home Page'
import WishlistPage from './Pages/Wishlist Page'
import { HelmetProvider } from "react-helmet-async";
import DetailPage from './Pages/Detail Page'

function App() {

  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App
