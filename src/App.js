import Home from './routes/home/home.component'
import { Routes, Route, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Main Navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return (
    <div>
      <div>
        <h1>Shop Page</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
