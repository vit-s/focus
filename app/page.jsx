'use client'

//components
import Hero         from "/components/Hero.jsx"
import Brands       from "/components/Brands.jsx"
import Features     from "/components/Features.jsx"
import Integrations from "/components/Integrations.jsx"
import Testimonial  from "/components/Testimonial.jsx"
import Trial        from "/components/Trial.jsx"
import Footer       from "/components/Footer.jsx"

// implement Lenis smooth scroll
import { ReactLenis } from 'lenis/dist/lenis-react'

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero/>
        <Brands/>
        <Features/>
        <Integrations/>
        <Testimonial/>
        <Trial/>
        <Footer/>
      </ReactLenis>
    </>
  )
}

export default Home
