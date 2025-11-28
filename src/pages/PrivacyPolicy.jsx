import React from "react";

const PrivacyPolicy = () => {
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
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Last updated: <strong>November 26, 2025</strong>. This Privacy
            Policy explains how Gozy ("we", "our", "us") collects, uses, and
            shares information when you use our website, mobile app, and
            services.
          </p>
        </header>

        {/* Intro card */}
        <section className="glass-card p-6 mb-8">
          <p className="text-gray-200 leading-relaxed">
            We respect your privacy and are committed to protecting your
            personal information. By using Gozy, you agree to the collection and
            use of information in accordance with this policy. This document
            covers: what we collect, why we collect it, how we use it, sharing
            and retention, your choices, and how to contact us.
          </p>
        </section>

        {/* What we collect */}
        <section className="mb-6">
          <h2 className="section-title mb-4">1. Information We Collect</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-5">
              <h3 className="font-bold mb-2">Personal Information</h3>
              <p className="text-gray-200">
                Information that identifies you directly, such as name, email,
                phone number, postal address, payment details when you choose to
                provide them (for orders or payouts), and identity verification
                information for certain services.
              </p>
            </div>

            <div className="glass-card p-5">
              <h3 className="font-bold mb-2">Non-Personal & Usage Data</h3>
              <p className="text-gray-200">
                Device information, IP address, browser type, operating system,
                app usage logs, analytics events, crash reports, and anonymized
                or aggregated usage statistics.
              </p>
            </div>
          </div>
        </section>

        {/* How we use */}
        <section className="mb-6">
          <h2 className="section-title mb-4">2. How We Use Your Information</h2>

          <div className="glass-card p-5">
            <ul className="list-disc ml-5 text-gray-200 space-y-2">
              <li>
                Provide, improve, and personalize our services and features.
              </li>
              <li>
                Process transactions, fulfill orders, and send confirmations.
              </li>
              <li>
                Communicate updates, offers, and account-related messages.
              </li>
              <li>
                Analyze usage to improve performance, security, and reliability.
              </li>
              <li>
                Detect, prevent, and respond to fraud, abuse, and security
                risks.
              </li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-6">
          <h2 className="section-title mb-4">3. Cookies & Tracking</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">
              We and our partners use cookies, local storage, and similar
              technologies to provide and improve the service, remember your
              preferences, and show relevant content. You can manage cookie
              preferences through your browser settings; note that disabling
              cookies may limit certain features.
            </p>
          </div>
        </section>

        {/* Sharing */}
        <section className="mb-6">
          <h2 className="section-title mb-4">4. Sharing & Third Parties</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">We may share information with:</p>
            <ul className="list-disc ml-5 text-gray-200 space-y-2 mt-3">
              <li>
                Service providers who support our operations (payments, hosting,
                analytics).
              </li>
              <li>
                Business partners for integrated services (merchants, delivery
                partners, API providers).
              </li>
              <li>
                When required by law, to respond to legal requests, or to
                prevent harm.
              </li>
              <li>
                In connection with a merger, acquisition, or sale of assets (you
                will be notified where applicable).
              </li>
            </ul>
          </div>
        </section>

        {/* Retention */}
        <section className="mb-6">
          <h2 className="section-title mb-4">5. Data Retention</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">
              We retain personal information for as long as needed to provide
              services, comply with legal obligations, resolve disputes, and
              enforce agreements. Retention periods vary depending on the data
              type and legal requirements.
            </p>
          </div>
        </section>

        {/* Security */}
        <section className="mb-6">
          <h2 className="section-title mb-4">6. Security</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">
              We apply industry-standard technical and organizational measures
              to protect data (encryption in transit, access controls, secure
              infrastructure). No system is 100% secure — if a security incident
              affecting your data occurs, we will follow applicable laws and
              notify you when required.
            </p>
          </div>
        </section>

        {/* Your choices */}
        <section className="mb-6">
          <h2 className="section-title mb-4">7. Your Rights & Choices</h2>

          <div className="glass-card p-5">
            <ul className="list-disc ml-5 text-gray-200 space-y-2">
              <li>Access: You can request access to data we hold about you.</li>
              <li>
                Correction: You may request corrections to inaccurate
                information.
              </li>
              <li>
                Deletion: You can request deletion subject to legal/operational
                limits.
              </li>
              <li>
                Opt-out: You may opt out of marketing communications at any
                time.
              </li>
              <li>Cookies: Manage or disable cookies via browser settings.</li>
            </ul>

            <p className="text-gray-400 mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@gozy.in"
                className="text-purple-300 underline"
              >
                privacy@gozy.in
              </a>
              .
            </p>
          </div>
        </section>

        {/* Children */}
        <section className="mb-6">
          <h2 className="section-title mb-4">8. Children</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">
              Our services are not intended for children under 13 (or higher age
              where required). We do not knowingly collect personal information
              from children. If you believe we have collected child data,
              contact us to request deletion.
            </p>
          </div>
        </section>

        {/* International transfers */}
        <section className="mb-6">
          <h2 className="section-title mb-4">9. International Transfers</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">
              Gozy operates globally. Data may be processed or stored in
              jurisdictions outside your country. We take steps to ensure an
              adequate level of protection in line with applicable laws.
            </p>
          </div>
        </section>

        {/* Changes */}
        <section className="mb-6">
          <h2 className="section-title mb-4">10. Changes to This Policy</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">
              We may update this Privacy Policy from time to time. We will post
              the updated policy here with a revised "Last updated" date.
              Significant changes will be communicated through email or app
              notifications when required.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="section-title mb-4">11. Contact Us</h2>

          <div className="glass-card p-5">
            <p className="text-gray-200">
              If you have questions, requests, or privacy concerns, please reach
              out to us:
            </p>

            <ul className="list-none mt-4 text-gray-200">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@gozy.in"
                  className="text-purple-300 underline"
                >
                  privacy@gozy.in
                </a>
              </li>
              <li>
                <strong>Mail:</strong> Gozy — Privacy Team (address on file)
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
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        }

        .section-title {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(to right, #c084fc, #60a5fa);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 12px;
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

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .section-title { font-size: 1.1rem; }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
