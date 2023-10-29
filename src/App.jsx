import { Route, Routes } from "react-router-dom"

import { TopBar } from "@/components/topbar"

// pages
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"

function App() {
  return (
    <>
      <TopBar />
      <main className="">

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:projectId" element={<Project />} />
        </Routes>
        
      </main>
    </>
  )
}

export default App
