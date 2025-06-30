import type React from "react"
import MainTemplate from "../components/templates/MainTemplate"
import HomeContainer from "../container/HomeContainer"

const Landing: React.FC = () => {
  return (
    <MainTemplate>
      <HomeContainer />
    </MainTemplate>
  )
}

export default Landing
