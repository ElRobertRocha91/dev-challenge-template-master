import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Detail from './components/Detail/Detail'
import PageNotFound from './components/pages/PageNotFound'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
