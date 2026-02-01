import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Layout from "./components/Layout";
import Features from "./components/features";

function App() {

  return (
    <Layout>
      <div className="">
        <Navbar />
        <Hero />
        <Features />
      </div>
    </Layout>
  )
}

export default App
