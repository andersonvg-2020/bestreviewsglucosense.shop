import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Award, CheckCircle2 } from 'lucide-react';
const WhatIsSection = () => {
  const features = [{
    icon: Leaf,
    text: "100% Natural Ingredients"
  }, {
    icon: Shield,
    text: "FDA-Registered Facility"
  }, {
    icon: Award,
    text: "GMP Certified"
  }, {
    icon: CheckCircle2,
    text: "Non-GMO Formula"
  }];
  return <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            What Is GlucoSense?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img alt="GlucoSense natural supplement formula" className="rounded-xl shadow-lg w-full" src="https://horizons-cdn.hostinger.com/4cac2747-5d8c-4acf-b7e7-dd1343da4cae/gluco4-tintC.png" />
            </div>

            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                GlucoSense is a premium, all-natural dietary supplement specifically formulated to support healthy blood sugar levels and promote overall metabolic wellness.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Unlike synthetic alternatives, GlucoSense harnesses the power of clinically-studied botanical extracts and essential nutrients that work synergistically to address the root causes of blood sugar imbalance.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Manufactured in an FDA-registered, GMP-certified facility in the USA, each capsule is crafted with the highest quality standards to ensure purity, potency, and safety.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="w-8 h-8 text-primary-red mx-auto mb-3" />
                <p className="text-sm font-semibold text-slate-800">{feature.text}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default WhatIsSection;