import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Ingredients = () => {
  const ingredients = [
    {
      name: "Berberine",
      description: "A powerful plant compound that has been shown to support healthy blood sugar levels and improve insulin sensitivity. Clinical studies demonstrate its effectiveness in glucose metabolism."
    },
    {
      name: "Cinnamon Bark Extract",
      description: "Rich in antioxidants and known for its ability to enhance insulin function and slow the breakdown of carbohydrates in the digestive tract, helping to prevent blood sugar spikes."
    },
    {
      name: "Chromium Picolinate",
      description: "An essential trace mineral that plays a crucial role in carbohydrate and lipid metabolism, helping to improve insulin action and glucose tolerance."
    },
    {
      name: "Bitter Melon",
      description: "Contains compounds that act similarly to insulin, helping to transport glucose into cells for energy and supporting healthy blood sugar balance."
    },
    {
      name: "Gymnema Sylvestre",
      description: "Known as the 'sugar destroyer,' this herb helps reduce sugar absorption in the intestines and may help reduce sugar cravings."
    },
    {
      name: "Alpha Lipoic Acid",
      description: "A powerful antioxidant that supports healthy nerve function and helps improve insulin sensitivity while protecting cells from oxidative stress."
    },
    {
      name: "Banaba Leaf Extract",
      description: "Contains corosolic acid, which has been shown to support healthy glucose transport and may help lower blood sugar levels naturally."
    },
    {
      name: "Magnesium",
      description: "Essential for over 300 enzymatic reactions in the body, including those involved in glucose metabolism and insulin action."
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
            GlucoSense Ingredients: The Science-Backed Formula
          </h2>

          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Each ingredient in GlucoSense has been carefully selected based on clinical research and traditional use for blood sugar support:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-red p-2 rounded-lg">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{ingredient.name}</h3>
                    <p className="text-slate-700 leading-relaxed text-sm">{ingredient.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <p className="text-blue-900 leading-relaxed">
              <span className="font-semibold">Quality Assurance:</span> All ingredients are sourced from trusted suppliers and undergo rigorous third-party testing to ensure purity, potency, and safety. GlucoSense contains no artificial fillers, binders, or harmful additives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;