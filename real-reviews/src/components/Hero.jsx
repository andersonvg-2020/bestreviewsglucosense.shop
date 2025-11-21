import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp } from 'lucide-react';
const Hero = () => {
  const handleCTAClick = () => {
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100 opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-dark-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Trending Health Solution 2025</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            GlucoSense Review: The Natural Blood Sugar Solution That's Changing Lives
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
            An In-Depth Analysis of the Supplement That's Helping Thousands Maintain Healthy Blood Sugar Levels Naturally
          </p>

          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            <span className="ml-2 text-lg font-semibold text-slate-700">4.8/5 (2,847 Reviews)</span>
          </div>

          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button onClick={handleCTAClick} size="lg" className="bg-primary-red hover:bg-dark-red text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Try GlucoSense Risk-Free Today →
            </Button>
          </motion.div>

          <p className="text-sm text-slate-600 mt-4">60-Day Money-Back Guarantee • Free Shipping</p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="mt-12 max-w-3xl mx-auto">
          <img alt="GlucoSense supplement bottle with natural ingredients" className="rounded-2xl shadow-2xl w-full" src="https://horizons-cdn.hostinger.com/4cac2747-5d8c-4acf-b7e7-dd1343da4cae/gluco3-ImS5L.png" />
        </motion.div>
      </div>
    </section>;
};
export default Hero;