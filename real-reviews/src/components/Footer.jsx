import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-red-400" />
            <span className="text-xl font-bold text-white">GlucoSense</span>
          </div>

          <p className="text-sm leading-relaxed mb-6">
            This is an independent review of GlucoSense. The information provided is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before starting any new supplement regimen.
          </p>

          <p className="text-sm leading-relaxed mb-6">
            Individual results may vary. The testimonials and examples provided are not typical results and your results may differ. These statements have not been evaluated by the Food and Drug Administration.
          </p>
          
          <div className="flex justify-center gap-6 mb-6">
            <Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="text-sm text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-sm">Copyright© 2025. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;