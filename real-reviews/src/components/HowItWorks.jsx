import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Heart, TrendingDown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Targets Insulin Sensitivity",
      description: "GlucoSense's powerful ingredients work to enhance your body's natural insulin response, helping cells absorb glucose more efficiently."
    },
    {
      icon: Zap,
      title: "Boosts Metabolism",
      description: "The formula activates metabolic pathways that support healthy glucose metabolism and energy production at the cellular level."
    },
    {
      icon: TrendingDown,
      title: "Reduces Sugar Absorption",
      description: "Natural compounds help slow down the absorption of sugars in the digestive tract, preventing dangerous blood sugar spikes."
    },
    {
      icon: Heart,
      title: "Supports Overall Health",
      description: "Beyond blood sugar, GlucoSense provides antioxidant protection and supports cardiovascular health for comprehensive wellness."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            How Does GlucoSense Work?
          </h2>
          
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            GlucoSense employs a multi-targeted approach to support healthy blood sugar levels through four key mechanisms:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-light-red p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-red p-3 rounded-xl">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl">
            <p className="text-lg leading-relaxed text-center">
              <span className="font-semibold text-red-400">The Science:</span> Clinical studies have shown that the synergistic combination of ingredients in GlucoSense can help maintain blood sugar levels already within the normal range while supporting long-term metabolic health.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;