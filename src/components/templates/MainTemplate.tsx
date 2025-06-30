import type React from "react"
import Navbar from "../organisms/Navbar"
import Footer from "../organisms/Footer"

interface MainTemplateProps {
  children: React.ReactNode
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-nucusoft-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainTemplate
