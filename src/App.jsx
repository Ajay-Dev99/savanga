import { useEffect } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Aos from "aos"
import Features from "./components/Features"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"


function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div >
      <Header />
      <Banner />
      <div className="space-y-2 md:space-y-5">
        <Features />
        <Feedback />
        <Footer />
      </div>
    </div>
  )
}

export default App
