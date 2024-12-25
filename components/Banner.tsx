'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

const Banner = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:5872086769'
  }

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/15872086769'
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 text-white py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={handlePhoneClick}
          className="flex items-center cursor-pointer"
        >
          <Phone className="h-4 w-4 mr-2" />
          <span>Call Us on: 587 208 6769</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={handleWhatsAppClick}
          className="flex items-center cursor-pointer mt-1 sm:mt-0"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          <span>We are on WhatsApp for international students</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Banner

