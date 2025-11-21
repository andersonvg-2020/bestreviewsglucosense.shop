import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
const Header = () => {
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6
  }} className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary-red" />
            <span className="text-xl font-bold text-slate-800">GlucoSense Reviews</span>
          </div>
          <div className="text-sm text-slate-600">
            Updated: November 2025
          </div>
        </div>
      </div>
    </motion.header>;
};
export default Header;