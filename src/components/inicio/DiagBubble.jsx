import React from 'react'
import { motion } from 'framer-motion'
function DiagBubble({text}) {
  return (
    <motion.div
    className="hidden md:block relative top-7 right-[10rem] bg-gradient-to-r bg-secondary px-4 py-2 rounded-full shadow-md"
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <p className="text-white text-sm font-medium">{text}</p>
    {/* <div className="absolute -right-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-8 border-transparent border-t-indigo-500"></div> */}
  </motion.div>
  )
}

export default DiagBubble