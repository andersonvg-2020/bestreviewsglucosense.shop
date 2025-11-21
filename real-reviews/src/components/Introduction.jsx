import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-900 mb-2">Editor's Note</p>
                <p className="text-amber-800 leading-relaxed">
                  This comprehensive review is based on extensive research, clinical studies, and verified customer testimonials. We've analyzed GlucoSense to provide you with an honest, unbiased assessment of its effectiveness for blood sugar support.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              If you're struggling to maintain healthy blood sugar levels, you're not alone. Millions of people worldwide face this challenge daily, often feeling frustrated by conventional approaches that don't address the root cause.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              That's where GlucoSense comes in. This natural supplement has been making waves in the health community, with thousands of users reporting significant improvements in their blood sugar management and overall well-being.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              But does it really work? In this detailed review, we'll dive deep into the science, ingredients, benefits, and real user experiences to help you make an informed decision about whether GlucoSense is right for you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;