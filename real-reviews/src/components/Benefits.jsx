import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const benefits = [
    "Supports healthy blood sugar levels already within normal range",
    "Enhances natural insulin sensitivity and glucose metabolism",
    "Reduces sugar cravings and helps control appetite",
    "Boosts energy levels throughout the day",
    "Supports healthy weight management",
    "Promotes cardiovascular health and circulation",
    "Provides powerful antioxidant protection",
    "Improves mental clarity and focus",
    "Supports healthy inflammatory response",
    "Enhances overall metabolic function",
    "100% natural with no harmful side effects",
    "Easy-to-take daily capsules"
  ];

  const handleCTAClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            GlucoSense Benefits: What You Can Expect
          </h2>

          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Users of GlucoSense report experiencing a wide range of health benefits that go beyond just blood sugar support:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-primary-red flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="bg-primary-red hover:bg-dark-red text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Experience These Benefits Today →
              </Button>
            </motion.div>
            <p className="text-sm text-slate-600 mt-4">Limited Time Offer • 60-Day Guarantee</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;