import Home from "./Components/Home"
import Footer from "./Layout/Footer"
import Header from "./Layout/Header"


function App() {
  return (
    <div>
      <Header/>
        <div className="s py-20 px-3 bg-indigo-950">
          <h1 className="text-center font-bold text-5xl text-white pb-14 font-mono">React Project</h1>
          <div className="flex justify-center items-center gap-10">
            <Home/>
            <Home/>
            <Home/>
            <Home/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default App
