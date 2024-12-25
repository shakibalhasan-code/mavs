import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Mavs Academy of Canada</h1>
          <div className="prose prose-lg text-gray-500">
            <p>
              Mavs Academy of Canada is a federally incorporated Calgary-based training institute. We offer a wide range of courses designed to enhance your skills and knowledge. Our dedicated team is committed to providing exceptional training and support to help you succeed in your chosen field.
            </p>
            <p>
              Founded with the vision of bridging the gap between traditional education and industry demands, Mavs Academy has quickly become a leading name in professional training and development in Canada.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to empower individuals with the skills and knowledge needed to excel in today's rapidly evolving job market. We strive to provide high-quality, industry-relevant training that prepares our students for successful careers.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Mavs Academy?</h2>
            <ul>
              <li>Expert Instructors: Learn from industry professionals with years of practical experience.</li>
              <li>Flexible Learning: Our courses are designed to fit your schedule, with options for both in-person and online learning.</li>
              <li>Hands-on Training: Gain practical skills through project-based learning and real-world scenarios.</li>
              <li>Career Support: Benefit from our career counseling and job placement assistance services.</li>
              <li>Industry Partnerships: We collaborate with leading companies to ensure our curriculum meets current industry standards.</li>
            </ul>
            <p className="mt-8">
              At Mavs Academy of Canada, we're not just educating; we're transforming careers and shaping the future workforce of Canada. Join us on this exciting journey of growth and discovery!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

