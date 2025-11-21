import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Truck, Clock, Zap } from 'lucide-react';

const FinalCTA = () => {
  const handleCTAClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const guarantees = [
    { icon: Shield, text: "Ironclad 60-Day Money-Back Guarantee" },
    { icon: Truck, text: "FREE & Fast Shipping on All Orders" },
    { icon: Clock, text: "Today's Exclusive Limited-Time Pricing" },
    { icon: CheckCircle2, text: "100% All-Natural & Verified Safe" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-red via-dark-red to-dark-red text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* ATTENTION */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Future Self Will Thank You.</h2>
          <p className="text-xl md:text-2xl mb-8 text-red-100">Stop waiting, start living. The path to balanced blood sugar and renewed energy is one click away.</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            {/* INTEREST */}
            <p className="text-lg mb-6 leading-relaxed">
              Imagine waking up every day feeling energized, focused, and in control. No more midday crashes or sugar cravings dictating your life. That’s not a dream—it’s the reality for thousands who chose GlucoSense.
            </p>

            {/* DESIRE */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 p-4 rounded-lg"
                >
                  <guarantee.icon className="w-6 h-6 text-red-300 flex-shrink-0" />
                  <span className="font-semibold">{guarantee.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-xl mb-8 font-semibold text-red-100">You're not just buying a supplement; you're investing in a vibrant, healthier life. You deserve this.</p>

            {/* ACTION */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-6"
            >
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="bg-white text-dark-red hover:bg-red-50 px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 w-full md:w-auto"
              >
                <Zap className="w-6 h-6 mr-3 animate-pulse" />
                Transform My Health NOW!
              </Button>
            </motion.div>

            <p className="text-red-100 text-sm">
              This special offer is ending soon. Secure your supply before it's gone!
            </p>
          </div>

          <div className="mt-12 p-6 bg-amber-500/20 border border-amber-400/30 rounded-xl">
            <p className="text-lg font-semibold mb-2">⚠️ URGENT: Inventory Alert</p>
            <p className="text-red-100">
              Due to overwhelming demand, our inventory is critically low. This might be your last chance to get GlucoSense at this discounted price. Act now to avoid disappointment and price increases.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;