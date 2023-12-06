import Time from "../../components/time/Time"
import Header from "../../components/header/Header"
import Nav from "../../components/nav/Nav"
import About from "../../components/about/About"
import Experience from "../../components/experience/Experience"
import Services from "../../components/Services/Services"
import Portfolio from "../../components/portfolio/Portfolio"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"

const HomePage = () => {
  return (
    <div>
      <Time />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
