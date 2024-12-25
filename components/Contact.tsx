'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Facebook } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = 'New Contact Form Submission'
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `
    window.location.href = `mailto:work.shakib.ah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div id="contact" className="bg-gray-100 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Get in touch with us for any inquiries or support.
          </p>
        </div>
        <div className="mt-12">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="py-3 px-4 block w-full shadow-sm focus:ring-canada-red focus:border-canada-red border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="py-3 px-4 block w-full shadow-sm focus:ring-canada-red focus:border-canada-red border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="py-3 px-4 block w-full shadow-sm focus:ring-canada-red focus:border-canada-red border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-canada-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-canada-red"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-canada-red mr-2" />
            <span>587 208 6769</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-canada-red mr-2" />
            <span>Calgary, Alberta, Canada</span>
          </div>
          <div className="flex items-center">
            <Facebook className="h-6 w-6 text-canada-red mr-2" />
            <a href="https://www.facebook.com/mavsacademyofcanada" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook Page
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

