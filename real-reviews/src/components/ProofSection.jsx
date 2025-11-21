import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
const ProofSection = () => {
  const stats = [{
    icon: Users,
    number: "50,000+",
    label: "Satisfied Customers"
  }, {
    icon: TrendingUp,
    number: "94%",
    label: "Success Rate"
  }, {
    icon: Award,
    number: "4.8/5",
    label: "Average Rating"
  }, {
    icon: Shield,
    number: "60-Day",
    label: "Money-Back Guarantee"
  }];
  return <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
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
      }} className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The Proof Is in the Results
          </h2>

          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Thousands of people have already transformed their health with GlucoSense. Here's what the numbers say:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="text-center">
                <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>)}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <img alt="Clinical study results for GlucoSense" className="rounded-xl shadow-2xl w-full" src="https://horizons-cdn.hostinger.com/4cac2747-5d8c-4acf-b7e7-dd1343da4cae/da052437-fc6d-40f0-b9fb-41c67a9c93e7-CwG1z.webp" />
            </motion.div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">Clinical Validation</h3>
                <p className="text-slate-300 leading-relaxed">
                  Independent clinical studies have demonstrated that the key ingredients in GlucoSense can help support healthy blood sugar levels when combined with a balanced diet and regular exercise.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">Real Results</h3>
                <p className="text-slate-300 leading-relaxed">
                  94% of users report noticeable improvements in their energy levels, reduced sugar cravings, and better overall well-being within the first 30 days of consistent use.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">Risk-Free Guarantee</h3>
                <p className="text-slate-300 leading-relaxed">
                  We're so confident in GlucoSense that we offer a full 60-day money-back guarantee. If you're not completely satisfied, simply return it for a full refund—no questions asked.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ProofSection;