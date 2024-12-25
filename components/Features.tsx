'use client'

import { motion } from 'framer-motion'
import { DollarSign, Clock, Calendar, Briefcase, Users, MapPin } from 'lucide-react'

const features = [
  {
    name: 'Affordable',
    description: 'All our courses are competitively priced',
    icon: DollarSign,
  },
  {
    name: 'Flexible Duration',
    description: 'Courses ranging from 3 to 6 months',
    icon: Clock,
  },
  {
    name: 'Convenient Schedule',
    description: 'Weekend and evening classes via Zoom',
    icon: Calendar,
  },
  {
    name: 'Project-Based',
    description: 'Hands-on training with real-world projects',
    icon: Briefcase,
  },
  {
    name: 'Expert Instructors',
    description: 'Learn from Canadian industry professionals',
    icon: Users,
  },
  {
    name: 'Based in Calgary',
    description: 'Local expertise with a global reach',
    icon: MapPin,
  },
]

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-canada-red font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Mavs Academy?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a unique learning experience tailored to your needs and schedule.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-canada-red text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features

