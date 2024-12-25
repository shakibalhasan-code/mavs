import Banner from '../components/Banner'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Courses from '../components/Courses'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Banner />
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

