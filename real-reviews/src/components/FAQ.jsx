import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to see results with GlucoSense?",
      answer: "Most users report noticing improvements in energy levels and reduced cravings within the first 1-2 weeks. For optimal blood sugar support, we recommend consistent use for at least 60-90 days, as natural ingredients work gradually to support your body's metabolic processes."
    },
    {
      question: "Is GlucoSense safe to take with my current medications?",
      answer: "GlucoSense is made with natural ingredients and is generally safe for most people. However, if you're currently taking medications, especially for blood sugar management, we strongly recommend consulting with your healthcare provider before starting any new supplement to avoid potential interactions."
    },
    {
      question: "How should I take GlucoSense?",
      answer: "The recommended dosage is 2 capsules daily, preferably taken with meals. For best results, take GlucoSense consistently at the same time each day with a full glass of water. Consistency is key to experiencing the full benefits."
    },
    {
      question: "Are there any side effects?",
      answer: "GlucoSense is formulated with natural, well-tolerated ingredients. Most users experience no side effects. However, as with any supplement, some individuals may experience mild digestive discomfort when first starting. If you experience any adverse reactions, discontinue use and consult your healthcare provider."
    },
    {
      question: "What if GlucoSense doesn't work for me?",
      answer: "We offer a 60-day money-back guarantee. If you're not completely satisfied with your results, simply contact our customer service team within 60 days of purchase for a full refund—no questions asked. We stand behind our product 100%."
    },
    {
      question: "Can I take GlucoSense if I'm not diabetic?",
      answer: "Absolutely! GlucoSense is designed to support healthy blood sugar levels for anyone looking to maintain metabolic wellness, manage weight, reduce sugar cravings, or simply support overall health. You don't need to have blood sugar issues to benefit from GlucoSense."
    },
    {
      question: "Where is GlucoSense manufactured?",
      answer: "GlucoSense is proudly manufactured in the USA in an FDA-registered, GMP-certified facility. We adhere to the highest quality standards and conduct rigorous third-party testing to ensure purity, potency, and safety."
    },
    {
      question: "How many bottles should I order?",
      answer: "For optimal results, we recommend ordering at least a 3-month supply (3 bottles). Many of our customers choose the 6-bottle package to take advantage of maximum savings and ensure they have enough for the full recommended period to experience comprehensive benefits."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-slate-600 text-center mb-12">
            Got questions? We've got answers. Here are the most common questions about GlucoSense:
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary-red transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;