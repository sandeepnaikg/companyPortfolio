import React from "react";

const TermsAndServices = () => {
  return (
    <div
      className="relative min-h-screen text-white px-6 md:px-16 lg:px-24 xl:px-32 py-20 overflow-auto"
      style={{ background: "rgb(18,14,40)" }}
    >
      {/* Particles & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[180px]" />

      <main className="relative max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-300">
            Last updated: <strong>November 26, 2025</strong>
          </p>
        </header>

        {/* Intro */}
        <section className="glass-card p-6 mb-6">
          <p className="text-gray-200 leading-relaxed">
            Welcome to Gozy. These Terms of Service ("Terms") govern your use of
            our website, mobile applications, and services (collectively, the
            "Services"). By accessing or using the Services, you agree to be
            bound by these Terms. If you do not agree, do not use the Services.
          </p>
        </section>

        {/* Sections grid */}
        <section className="space-y-6 mb-12">
          {/* 1. Services */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">1. Our Services</h2>
            <p className="text-gray-200">
              Gozy provides a unified platform that may include (but is not
              limited to) discovery, ordering, ticketing, travel, payments,
              partner integrations, and related digital services. We may add,
              modify, or remove features from time to time.
            </p>
          </div>

          {/* 2. Eligibility */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">2. Eligibility</h2>
            <p className="text-gray-200">
              You must be at least the minimum age required by local law to form
              a binding contract to use the Services. By using the Services, you
              represent and warrant that you meet these requirements and will
              comply with these Terms.
            </p>
          </div>

          {/* 3. Accounts */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">3. Accounts & Security</h2>
            <p className="text-gray-200">
              Some features require an account. Keep your credentials secure and
              notify us immediately of unauthorized use. You are responsible for
              all activity under your account.
            </p>
          </div>

          {/* 4. Payments */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">4. Payments, Fees & Refunds</h2>
            <p className="text-gray-200">
              Services that require payment will present pricing and terms at
              checkout. Payments may be processed by third-party payment
              processors. Refunds and cancellations are subject to our refund
              policy and any applicable partner terms.
            </p>
          </div>

          {/* 5. User Conduct */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">5. User Conduct</h2>
            <ul className="list-disc ml-5 text-gray-200 space-y-2">
              <li>Do not use the Services for unlawful activities.</li>
              <li>No abusive, harassing, or fraudulent behavior.</li>
              <li>
                Do not attempt to interfere with our systems or another user's
                account.
              </li>
              <li>
                Follow any additional rules or community guidelines posted on
                the Services.
              </li>
            </ul>
          </div>

          {/* 6. Content */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">
              6. Content & Intellectual Property
            </h2>
            <p className="text-gray-200">
              Gozy owns or licenses the content, UI, trademarks, and materials
              provided in the Services. You may not copy, distribute, or create
              derivative works without our permission. You retain ownership of
              content you submit, but by submitting you grant Gozy a license to
              use, display, and distribute such content as needed to provide the
              Services.
            </p>
          </div>

          {/* 7. Third Parties */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">7. Third Parties</h2>
            <p className="text-gray-200">
              The Services may link to third-party services or include
              third-party providers (e.g., payments, maps, delivery partners).
              Those providers have their own terms and privacy practices; Gozy
              is not responsible for third-party conduct or content.
            </p>
          </div>

          {/* 8. Disclaimers */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">8. Disclaimers</h2>
            <p className="text-gray-200">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW,
              GOZY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
          </div>

          {/* 9. Limitation of Liability */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">9. Limitation of Liability</h2>
            <p className="text-gray-200">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, GOZY AND ITS AFFILIATES
              WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, REVENUE,
              OR DATA ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE
              SERVICES.
            </p>
          </div>

          {/* 10. Indemnification */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">10. Indemnification</h2>
            <p className="text-gray-200">
              You agree to indemnify and hold Gozy harmless from claims arising
              out of your use of the Services, violation of these Terms, or
              infringement of third-party rights.
            </p>
          </div>

          {/* 11. Termination */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">11. Termination</h2>
            <p className="text-gray-200">
              We may suspend or terminate access to the Services for violations
              of these Terms or for operational reasons. Termination does not
              waive rights to recover damages or enforce obligations.
            </p>
          </div>

          {/* 12. Governing Law */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">12. Governing Law & Disputes</h2>
            <p className="text-gray-200">
              These Terms are governed by the laws of the jurisdiction in which
              Gozy is incorporated (unless otherwise stated). For disputes, we
              may require mediation or arbitration as described in our detailed
              legal documents.
            </p>
          </div>

          {/* 13. Changes */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">13. Changes to Terms</h2>
            <p className="text-gray-200">
              We may update these Terms periodically. We will post the updated
              Terms with a new "Last updated" date. Continued use after changes
              constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* 14. Contact */}
          <div className="glass-card p-5">
            <h2 className="section-title mb-3">14. Contact Us</h2>
            <p className="text-gray-200">
              If you have questions or concerns about these Terms, please
              contact:
            </p>
            <ul className="list-none mt-3 text-gray-200">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:legal@gozy.in"
                  className="text-purple-300 underline"
                >
                  legal@gozy.in
                </a>
              </li>
              <li>
                <strong>Address:</strong> Gozy — Legal Team (address on file)
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Inline styling */}
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 800;
          background: linear-gradient(to right, #c084fc, #60a5fa);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 8px;
        }

        /* Particles */
        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.14);
          border-radius: 50%;
          filter: blur(2px);
          animation: float 14s infinite linear;
        }
        .p1 { top: 18%; left: 12%; animation-duration: 10s; }
        .p2 { top: 60%; left: 82%; animation-duration: 14s; }
        .p3 { top: 85%; left: 30%; animation-duration: 18s; }

        @keyframes float {
          0% { transform: translate(0,0); opacity: 0.6; }
          50% { transform: translate(18px,-28px); opacity: 1; }
          100% { transform: translate(0,0); opacity: 0.6; }
        }

        @media (max-width: 768px) {
          .section-title { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default TermsAndServices;
