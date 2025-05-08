import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashborder from "./components/Dashborder"
import Login from "./components/Login"


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashborder />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
