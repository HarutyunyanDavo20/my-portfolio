import { Route } from "react-router-dom"
import { Routes } from "react-router"
import AdminPage from "./pages/admin/AdminPage"
import HomePage from "./pages/home/HomePage"
import "./global.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

export default App
