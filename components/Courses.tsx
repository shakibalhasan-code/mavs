'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import EnrollmentModal from './EnrollmentModal'

const courses = [
  {
    title: 'HTML5 & CSS3',
    duration: '42 hours',
    features: [
      'Learn HTML5 fundamentals',
      'Master CSS3 styling',
      'Responsive web design',
      'Modern web layouts',
      'CSS animations and transitions',
    ],
  },
  {
    title: 'HTML5, CSS3 and BootStrap4',
    duration: '62 hours',
    features: [
      'Advanced HTML5 & CSS3',
      'Bootstrap 4 framework',
      'Responsive grid system',
      'Component libraries',
      'Custom theming',
    ],
  },
  {
    title: 'JavaScript and the DOM',
    duration: '60 hours',
    features: [
      'JavaScript fundamentals',
      'DOM manipulation',
      'Event handling',
      'AJAX and APIs',
      'Modern JS features',
    ],
  },
  {
    title: 'Front End Development / Web Design',
    duration: '125 hours',
    features: [
      'Complete web development',
      'UI/UX principles',
      'Modern frameworks',
      'Project deployment',
      'Portfolio building',
    ],
  },
]

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<{ title: string; duration: string } | null>(null)

  return (
    <div id="courses" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-canada-red font-semibold tracking-wide uppercase">Our Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Upgrade Your Skills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose from our selection of in-demand courses to boost your career.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <div className="mt-4 flex items-baseline text-canada-red">
                  <span className="text-lg font-semibold tracking-tight">Duration:</span>
                  <span className="ml-2 text-2xl font-bold tracking-tight">{course.duration}</span>
                </div>
                <p className="mt-6 text-gray-500 font-medium">By completion of this course, successful students will be able to:</p>

                <ul role="list" className="mt-6 space-y-4">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-5 h-5 text-canada-red" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCourse({ title: course.title, duration: course.duration })}
                className="mt-8 block w-full bg-canada-red text-white rounded-lg py-3 px-6 text-center font-medium hover:bg-red-700 transition-colors"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <EnrollmentModal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        courseTitle={selectedCourse?.title || ''}
        courseDuration={selectedCourse?.duration || ''}
        //Added phone prop here.  The update request did not specify a value, so I left it blank.  A value should be added here based on your needs.
        phone=""
      />
    </div>
  )
}

export default Courses

