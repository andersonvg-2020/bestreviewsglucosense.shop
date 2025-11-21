import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const PaymentIcons = () => (
  <div className="flex justify-center items-center space-x-2">
    <img className="h-6" alt="Visa" src="https://images.unsplash.com/photo-1654714009937-acf4ffba1202" />
    <img className="h-6" alt="Mastercard" src="https://images.unsplash.com/photo-1611416811039-e326d73a68d3" />
    <img className="h-6" alt="Discover" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
    <img className="h-6" alt="American Express" src="https://images.unsplash.com/photo-1649251855096-f8beda8f6b24" />
  </div>
);


const PricingCard = ({ plan, isBestOffer = false }) => {
  const handleCTAClick = () => {
    window.open(plan.checkoutUrl, '_blank');
  };

  return (
    <div className={cn(
      "relative border-2 rounded-xl text-center p-0 flex flex-col",
      isBestOffer ? "border-primary-red bg-dark-red text-white scale-105" : "border-primary-red bg-white text-slate-800"
    )}>
      {isBestOffer && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-red text-white px-4 py-1 text-sm font-bold rounded-md">
          BEST OFFER!
        </div>
      )}
      <div className={cn("py-3 font-bold text-lg rounded-t-lg", isBestOffer ? "bg-primary-red" : "bg-primary-red text-white")}>
        {plan.title}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold">{plan.package}</h3>
        <p className="text-sm font-semibold mb-4">{plan.supply}</p>
        <div className="my-4 h-24 flex items-center justify-center">
            <img className="max-h-full" alt={plan.alt} src={plan.imageUrl} />
        </div>
        <div className="my-4">
          <span className="text-6xl font-bold">${plan.price}</span>
          <span className="font-semibold"> PER<br />BOTTLE</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm font-semibold mb-4">
          <Check className="w-5 h-5 text-green-500" />
          <span>60 DAYS GUARANTEE</span>
        </div>
        
        <Button
          onClick={handleCTAClick}
          className={cn(
            "w-full py-6 text-lg font-bold rounded-lg shadow-md hover:opacity-90 transition-opacity flex items-center gap-2",
            isBestOffer ? "bg-best-offer-yellow text-dark-red" : "bg-gray-200 text-slate-700 hover:bg-gray-300"
          )}
        >
          <ShoppingCart className="w-5 h-5" />
          BUY NOW
        </Button>
        <div className="mt-4">
          <PaymentIcons />
        </div>
        <div className="mt-4 text-sm font-semibold flex-grow flex items-end justify-center">
          <div>
            <p>Total: ${plan.total}</p>
            <p className={isBestOffer ? "text-best-offer-yellow" : "text-primary-red"}>{plan.shipping}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const Pricing = () => {
    const plans = [
        { 
            title: 'Basic Offer',
            package: '2 BOTTLES', 
            supply: '60 DAY SUPPLY',
            price: '79',
            total: '158',
            shipping: '+ 9.99 SHIPPING',
            alt: 'Two bottles of GlucoSense supplement',
            imageUrl: 'https://horizons-cdn.hostinger.com/4cac2747-5d8c-4acf-b7e7-dd1343da4cae/544dbdb7280cef999bfa50d84b9ce439.webp',
            checkoutUrl: 'https://glucosense.mycartpanda.com/checkout/200531921:1?afid=eZ6wEXUDGb'
        },
        { 
            title: 'Most Popular', 
            package: '2 + 1 BOTTLES', 
            supply: '90 DAY SUPPLY',
            price: '69',
            total: '207',
            shipping: '+ FREE SHIPPING',
            alt: 'Three bottles of GlucoSense supplement',
            imageUrl: 'https://horizons-cdn.hostinger.com/4cac2747-5d8c-4acf-b7e7-dd1343da4cae/6f65cd86205ea6dee0997ac3bb46279f.webp',
            checkoutUrl: 'https://glucosense.mycartpanda.com/checkout/200531922:1?afid=eZ6wEXUDGb' // Swapped URL
        },
    ];

    const bestOfferPlan = {
        title: '3 + 3 BOTTLES',
        package: '3 + 3 BOTTLES',
        supply: '180 DAY SUPPLY',
        price: '49',
        total: '294',
        shipping: '+ FREE SHIPPING',
        alt: 'Six bottles of GlucoSense supplement',
        imageUrl: 'https://horizons-cdn.hostinger.com/4cac2747-5d8c-4acf-b7e7-dd1343da4cae/db0bdf147d040ef26ccf8489660fd1d3.webp',
        checkoutUrl: 'https://glucosense.mycartpanda.com/checkout/200531923:1?afid=eZ6wEXUDGb' // Swapped URL
    };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-red mb-2">Claim Your Discounted GlucoSense</h2>
          <p className="text-2xl font-semibold text-dark-red">Now While Supplies Last!</p>
          <div className="mt-4 flex justify-center">
            <div className="w-12 h-2 bg-primary-red rounded-full"></div>
          </div>
           <div
            className="mx-auto -mt-1.5"
            style={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '15px solid #da3d3a',
            }}
          />
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          <PricingCard plan={plans[0]} />
          <PricingCard plan={bestOfferPlan} isBestOffer={true} />
          <PricingCard plan={plans[1]} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;