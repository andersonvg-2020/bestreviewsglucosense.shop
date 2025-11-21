import React from 'react';
import { Helmet } from 'react-helmet';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - GlucoSense Review</title>
        <meta name="description" content="Read the disclaimers and affiliate disclosures for our GlucoSense review website." />
      </Helmet>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Disclaimer</h1>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-sm text-slate-500 mb-4">Updated: November 19, 2025</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">General Information</h2>
            <p>The information provided on this website is for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Medical Disclaimer</h2>
            <p>This site does not contain medical advice. The health information is provided for general informational and educational purposes only and is not a substitute for professional medical advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate medical professionals. We do not provide any kind of medical advice. The use or reliance of any information contained on this site is solely at your own risk.</p>
            <p>The statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Affiliate Disclaimer</h2>
            <p>This website contains affiliate links. If you use these links to buy something, we may earn a commission. This comes at no additional cost to you. We are an independent review site and the opinions expressed here are our own. The commissions we earn help us to continue providing high-quality, unbiased reviews and content.</p>
            <p>We are a participant in various affiliate programs, which are affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to merchant sites. When you click on a link that we recommend, you will be taken to a third-party website. We are not responsible for the content or practices of these third-party sites.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Testimonials Disclaimer</h2>
            <p>The testimonials on this website are from actual users of the product and/or service and have been submitted to us in various forms. They are individual experiences, reflecting real-life experiences of those who have used our products and/or services in some way or another. However, they are individual results and results do vary. We do not claim that they are typical results that consumers will generally achieve. The testimonials are not necessarily representative of all of those who will use our products and/or services.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;