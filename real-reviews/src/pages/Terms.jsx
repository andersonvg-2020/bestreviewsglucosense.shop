import React from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - GlucoSense Review</title>
        <meta name="description" content="Read the Terms of Service for using our GlucoSense review website." />
      </Helmet>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-sm text-slate-500 mb-4">Updated: November 19, 2025</p>
            <p>Welcome to our GlucoSense review website. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on this website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Disclaimer</h2>
            <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on this website or otherwise relating to such materials or on any sites linked to this site.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Affiliate Disclosure</h2>
            <p>This site is an independent professional review website. We may receive a commission for purchases made through the links on our site. This helps support our research and work, allowing us to continue providing valuable information to our readers. Our reviews are based on our own research and opinions, and the affiliate commissions do not influence the content of our reviews.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Limitations</h2>
            <p>In no event shall our website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Revisions and Errata</h2>
            <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on this website at any time without notice.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">6. Links</h2>
            <p>We have not reviewed all of the sites linked to this website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">7. Site Terms of Use Modifications</h2>
            <p>We may revise these terms of use for this website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these Terms of Service.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;