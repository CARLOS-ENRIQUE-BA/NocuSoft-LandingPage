import type React from "react"
import Hero from "../components/organisms/Hero"
import Features from "../components/organisms/Features"
import About from "../components/organisms/About"
import Services from "../components/organisms/Services"
import CallToAction from "../components/organisms/CallToAction"
import FAQ from "../components/organisms/FAQ"
import Contact from "../components/organisms/Contact"

const HomeContainer: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <CallToAction />
      <FAQ />
      <Contact />
    </>
  )
}

export default HomeContainer
