import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - GlucoSense Review</title>
        <meta name="description" content="Learn about how we handle your data in our Privacy Policy." />
      </Helmet>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-sm text-slate-500 mb-4">Updated: November 19, 2025</p>
            <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <p>We may collect information like your name and email address if you subscribe to a newsletter, and we collect non-personally identifiable information through cookies and analytics to understand how our site is used.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to operate and maintain our website, to understand and analyze how you use our website, to develop new products, services, features, and functionality, and to communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Log Files and Cookies</h2>
            <p>Our website follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            <p>Like any other website, we use 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Third-Party Privacy Policies</h2>
            <p>Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
            <p>This site contains affiliate links to products. We may receive a commission for purchases made through these links. The third-party merchant sites have their own privacy policies, and we are not responsible for their practices.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Your Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;