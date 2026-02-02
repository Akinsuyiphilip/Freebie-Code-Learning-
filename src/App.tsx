import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Layout from "./components/Layout";
import Features from "./components/features";
import Language from "./components/langauage";

function App() {

  return (
    <Layout>
      <div className="">
        <Navbar />
        <Hero />
        <Features />
        <Language />
      </div>
    </Layout>
  )
}

export default App
