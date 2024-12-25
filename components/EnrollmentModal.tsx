'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface EnrollmentModalProps {
  isOpen: boolean
  onClose: () => void
  courseTitle: string
  courseDuration: string
}

const EnrollmentModal = ({ isOpen, onClose, courseTitle, courseDuration }: EnrollmentModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Course Enrollment: ${courseTitle}`
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone Number (WhatsApp): ${formData.phone}
      Course: ${courseTitle}
      Duration: ${courseDuration}
    `
    window.location.href = `mailto:work.shakib.ah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Enroll in Course</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Course</label>
                <input
                  type="text"
                  value={courseTitle}
                  disabled
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  value={courseDuration}
                  disabled
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-canada-red focus:border-canada-red"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-canada-red focus:border-canada-red"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (WhatsApp)</label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-canada-red focus:border-canada-red"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-canada-red text-white rounded-md py-2 px-4 hover:bg-red-700 transition-colors"
              >
                Submit Enrollment
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default EnrollmentModal

