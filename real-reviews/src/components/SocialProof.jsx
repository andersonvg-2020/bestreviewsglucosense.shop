import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Texas",
      rating: 5,
      text: "I've been using GlucoSense for 3 months now, and my blood sugar readings have never been more stable. I have more energy, fewer cravings, and I feel like myself again. This product is a game-changer!",
      initials: "SM"
    },
    {
      name: "Robert K.",
      location: "California",
      rating: 5,
      text: "As someone who's tried countless supplements, I was skeptical. But GlucoSense actually works! My doctor was impressed with my latest test results. I'm recommending this to everyone I know.",
      initials: "RK"
    },
    {
      name: "Jennifer L.",
      location: "Florida",
      rating: 5,
      text: "The difference is night and day. No more afternoon crashes, no more constant hunger. GlucoSense has helped me take control of my health naturally. Worth every penny!",
      initials: "JL"
    },
    {
      name: "Michael T.",
      location: "New York",
      rating: 5,
      text: "I was hesitant at first, but after just 2 weeks, I noticed significant improvements. My energy is through the roof, and I don't have those sugar cravings anymore. Highly recommend!",
      initials: "MT"
    },
    {
      name: "Linda P.",
      location: "Arizona",
      rating: 5,
      text: "GlucoSense has been a blessing. I feel healthier, more energetic, and my numbers are finally where they should be. The natural ingredients give me peace of mind too.",
      initials: "LP"
    },
    {
      name: "David R.",
      location: "Ohio",
      rating: 5,
      text: "After 6 weeks on GlucoSense, I've lost weight, have more energy, and my blood work improved dramatically. My doctor asked what I was doing differently. This stuff really works!",
      initials: "DR"
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
            What Our Customers Are Saying
          </h2>

          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Don't just take our word for it—here's what real GlucoSense users have to say about their experience:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary-red text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.location}</div>
                  </div>
                  <Quote className="w-8 h-8 text-red-200" />
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600">
              Join <span className="font-bold text-primary-red">50,000+ satisfied customers</span> who have transformed their health with GlucoSense
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;