import Carousel from "./components/Carousel"
import Commitment from "./components/Commitment"
import Header from "./components/Header"
import Testimonials from "./components/Testimonials"
import Welcome from "./components/Welcome"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Welcome />
      <Commitment />
      <Testimonials />
      
      <a href="# " id="toTopBtn" title="Về đầu trang">
        <i className="fa fa-arrow-circle-up"></i>
      </a>
    </div>
  )
}

export default App