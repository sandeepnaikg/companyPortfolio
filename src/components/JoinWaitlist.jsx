
import React, { useState, useRef } from "react";

import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCity, 
  FaMapMarkerAlt, 
  FaMobileAlt, 
  FaCommentDots, 
  FaArrowRight, 
  FaCheckCircle, 
  FaTimes,       // For close button
  FaMagic,       // Replaces ✨
  FaRocket,      // Replaces 🚀
  FaStar,        // Replaces 🌟
  FaBullseye,    // Replaces 🎯
  FaCheck,       // Replaces ✓ text
  FaGlassCheers, // Replaces 🎉
  FaHeart        // Replaces 💜
} from "react-icons/fa";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const JoinWaitlist = ({ open, setOpen }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    device: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const autoCloseRef = useRef(null);

  function reset() {
    if (autoCloseRef.current) {
      clearTimeout(autoCloseRef.current);
      autoCloseRef.current = null;
    }
    setOpen(false);
    setStep(1);
    setLoading(false);
    setShowConfetti(false);
    setValues({
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      device: "",
      note: "",
    });
    setErrors({});
  }

  function validate() {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!values.email.trim()) e.email = "Please enter your email";
    else if (!EMAIL_REGEX.test(values.email.trim()))
      e.email = "Enter a valid email";
    if (!values.device || !values.device.trim())
      e.device = "Please select your device";
    if (values.phone && !/^\+?[0-9\-\s()]{7,20}$/.test(values.phone.trim()))
      e.phone = "Enter a valid phone";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e?.preventDefault?.();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setLoading(true);

    try {
      const mutation = `mutation MyQuery {
        insert_early_access_users_one(object: {
          city: "${values.city}",
          comment: "${values.note}",
          device: "${values.device}",
          email: "${values.email}",
          name: "${values.name}",
          phone: "${values.phone}",
          state: "${values.state}"
        }) { id }
      }`;
      const resp = await fetch("https://db.gozy.online/v1/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: mutation }),
      });
      const data = await resp.json();
      if (!resp.ok || data.errors)
        throw new Error("Network response was not ok");
      
      setStep(2);
      setShowConfetti(true);
      
      autoCloseRef.current = setTimeout(() => reset(), 4500);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Submission failed — please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="waitlist-trigger-btn"
        aria-label="Join the waitlist"
      >
        <span className="btn-shine" />
        {/* Replaced Emoji with Icon */}
        <span className="btn-icon pulse-icon"><FaMagic /></span>
        <span className="btn-text">Join Waitlist</span>
        {/* Replaced Emoji with Icon */}
        <span className="btn-icon spin-icon"><FaRocket /></span>
      </button>

      {open && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={reset}
        >
          {/* Background particles */}
          <div className="modal-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated gradient border */}
            <div className="modal-gradient-border" />

            {/* Close button - Replaced SVG with Icon */}
            <button
              onClick={reset}
              className="modal-close-btn"
              aria-label="Close waitlist form"
            >
              <FaTimes className="close-icon-svg" />
            </button>

            <div className="modal-content">
              {step === 1 && (
                <div className="form-container">
                  {/* Left side - Form */}
                  <div className="form-section">
                    <div className="form-header">
                      <div className="header-badge">
                        {/* Replaced Emoji with Icon */}
                        <span className="badge-icon"><FaStar /></span>
                        <span>Early Access</span>
                      </div>
                      <h3 className="form-title">Join the Waitlist</h3>
                      <p className="form-subtitle">
                        Sign up for early access and exclusive updates — we'll keep you in the loop.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="waitlist-form">
                      {/* Name field */}
                      <div className="form-group">
                        <label className="form-label">Name *</label>
                        <div className="input-wrapper">
                          <span className="input-icon"><FaUser /></span>
                          <input
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                            placeholder="Enter your name"
                          />
                        </div>
                        {errors.name && (
                          <div className="error-message">{errors.name}</div>
                        )}
                      </div>

                      {/* Email field */}
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <div className="input-wrapper">
                          <span className="input-icon"><FaEnvelope /></span>
                          <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="ex@gmail.com"
                          />
                        </div>
                        {errors.email && (
                          <div className="error-message">{errors.email}</div>
                        )}
                      </div>

                      {/* Phone field */}
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <div className="input-wrapper">
                          <span className="input-icon"><FaPhone /></span>
                          <input
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            className={`form-input ${errors.phone ? 'input-error' : ''}`}
                            placeholder="+91-9652297686"
                          />
                        </div>
                        {errors.phone && (
                          <div className="error-message">{errors.phone}</div>
                        )}
                      </div>

                      {/* City & State */}
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">City</label>
                          <div className="input-wrapper">
                            <span className="input-icon"><FaCity /></span>
                            <input
                              name="city"
                              value={values.city}
                              onChange={handleChange}
                              className="form-input"
                              placeholder="Your city"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">State</label>
                          <div className="input-wrapper">
                            <span className="input-icon"><FaMapMarkerAlt /></span>
                            <input
                              name="state"
                              value={values.state}
                              onChange={handleChange}
                              className="form-input"
                              placeholder="Your state"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Device field */}
                      <div className="form-group">
                        <label className="form-label">Device *</label>
                        <div className="input-wrapper">
                          <span className="input-icon"><FaMobileAlt /></span>
                          <select
                            name="device"
                            value={values.device}
                            onChange={handleChange}
                            className={`form-input ${errors.device ? 'input-error' : ''}`}
                          >
                            <option value="">Select your device</option>
                            <option>iPhone</option>
                            <option>Android</option>
                            <option>iPad / Tablet</option>
                            <option>Desktop / Laptop</option>
                            <option>Other</option>
                          </select>
                        </div>
                        {errors.device && (
                          <div className="error-message">{errors.device}</div>
                        )}
                      </div>

                      {/* Note field */}
                      <div className="form-group">
                        <label className="form-label">Anything we should know? (optional)</label>
                        <div className="input-wrapper">
                          <span className="input-icon"><FaCommentDots /></span>
                          <input
                            name="note"
                            value={values.note}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="e.g. interested in beta, partnership, etc."
                          />
                        </div>
                      </div>

                      {errors.submit && (
                        <div className="submit-error">{errors.submit}</div>
                      )}

                      <div className="form-actions">
                        <button
                          type="submit"
                          className="submit-btn"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="loading-spinner" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Join Waitlist</span>
                              <span className="btn-arrow"><FaArrowRight /></span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={reset}
                          className="cancel-btn"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right side - Priority card */}
                  <div className="priority-card">
                    <div className="priority-glow" />
                    {/* Replaced Emoji with Icon */}
                    <div className="priority-icon"><FaBullseye /></div>
                    <div className="priority-badge">Limited Spots</div>
                    <h4 className="priority-title">Priority Access</h4>
                    <p className="priority-text">Get early features, exclusive invites, and be part of shaping Gozy's future</p>
                    
                    <div className="priority-features">
                      <div className="priority-feature">
                        <span className="feature-check"><FaCheckCircle /></span>
                        <span>Early beta access</span>
                      </div>
                      <div className="priority-feature">
                        {/* Replaced Text Check with Icon */}
                        <span className="feature-check"><FaCheck /></span>
                        <span>Exclusive updates</span>
                      </div>
                      <div className="priority-feature">
                        {/* Replaced Text Check with Icon */}
                        <span className="feature-check"><FaCheck /></span>
                        <span>VIP support</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="success-container">
                  {/* Confetti effect */}
                  {showConfetti && (
                    <div className="confetti-container">
                      {[...Array(50)].map((_, i) => (
                        <div
                          key={i}
                          className="confetti"
                          style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 0.5}s`,
                            backgroundColor: ['#8b5cf6', '#3b82f6', '#ec4899', '#f59e0b'][Math.floor(Math.random() * 4)],
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="success-card">
                    <div className="success-icon-wrapper">
                      <div className="success-pulse" />
                      {/* Replaced Emoji with Icon */}
                      <div className="success-icon"><FaGlassCheers /></div>
                    </div>
                    
                    <h4 className="success-title">
                      Welcome aboard, {values.name || "friend"}!
                    </h4>
                    
                    <p className="success-message">
                      You're on the list! We'll send updates to{" "}
                      <span className="success-email">{values.email}</span>
                    </p>

                    <div className="founders-section">
                      <div className="founders-badge">
                        {/* Replaced Emoji with Icon */}
                        <span><FaHeart /></span>
                        <span>A note from our founders</span>
                      </div>
                      
                      <div className="founder-quote">
                        <div className="quote-mark">"</div>
                        <p className="quote-text">
                          Gozy is built to simplify everyday life — we're excited to have you with us on this journey.
                        </p>
                        <p className="quote-author">— Sandeep Naik, Founder & CEO</p>
                      </div>

                      <div className="founder-quote">
                        <div className="quote-mark">"</div>
                        <p className="quote-text">
                          We're designing Gozy to bring convenience to millions — thank you for your support.
                        </p>
                        <p className="quote-author">— V Nikshitha, Founder & CEO</p>
                      </div>
                    </div>

                    <div className="success-footer">
                      <p className="auto-close-text">This window will close automatically</p>
                      <button onClick={reset} className="success-close-btn">
                        Close Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ========== Waitlist Trigger Button ========== */
        .waitlist-trigger-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          margin-left: 16px;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: white;
          font-family: 'Poppins', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
        }

        .waitlist-trigger-btn:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 15px 40px rgba(139, 92, 246, 0.5);
        }

        .waitlist-trigger-btn:active {
          transform: scale(0.98);
        }

        .btn-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shine 3s ease-in-out infinite;
        }

        .pulse-icon {
          animation: pulse 2s ease-in-out infinite;
          display: flex; /* Ensures react-icon centers */
          font-size: 1.2rem;
        }

        .spin-icon {
          animation: spin-slow 4s linear infinite;
          display: flex;
          font-size: 1.2rem;
        }

        .btn-text {
          position: relative;
          z-index: 1;
        }

        /* ========== Modal Overlay ========== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          padding: 16px;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 92, 246, 0.6);
          border-radius: 50%;
          animation: float-particle 4s ease-in-out infinite;
        }

        /* ========== Modal Container ========== */
        .modal-container {
          position: relative;
          width: 100%;
          max-width: 56rem;
          max-height: 90vh;
          background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(139, 92, 246, 0.3);
          animation: modalSlideUp 0.4s cubic-bezier(0.2, 0.9, 0.4, 1);
        }

        .modal-gradient-border {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            #8b5cf6,
            #3b82f6,
            #ec4899,
            #8b5cf6
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: rotate-gradient 4s linear infinite;
          pointer-events: none;
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.25rem;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(90deg);
        }
        
        .close-icon-svg {
           width: 20px;
           height: 20px;
        }

        .modal-content {
          padding: 32px;
          max-height: 90vh;
          overflow-y: auto;
        }

        /* ========== Form Container ========== */
        .form-container {
          display: flex;
          gap: 32px;
          align-items: flex-start;
        }

        .form-section {
          flex: 1;
          min-width: 0;
        }

        .form-header {
          margin-bottom: 28px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 16px;
          animation: slideInDown 0.6s ease-out;
        }

        .badge-icon {
          font-size: 1rem;
          display: flex;
          align-items: center;
          color: #fbbf24;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          animation: slideInLeft 0.6s ease-out 0.1s backwards;
        }

        .form-subtitle {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          animation: slideInLeft 0.6s ease-out 0.2s backwards;
        }

        /* ========== Form Styles ========== */
        .waitlist-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          animation: slideInLeft 0.6s ease-out backwards;
        }

        .form-group:nth-child(1) { animation-delay: 0.3s; }
        .form-group:nth-child(2) { animation-delay: 0.35s; }
        .form-group:nth-child(3) { animation-delay: 0.4s; }
        .form-group:nth-child(4) { animation-delay: 0.45s; }
        .form-group:nth-child(5) { animation-delay: 0.5s; }
        .form-group:nth-child(6) { animation-delay: 0.55s; }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
          margin-bottom: 8px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          font-size: 1.25rem;
          pointer-events: none;
          z-index: 1;
          display: flex;
          align-items: center;
          color: #8b5cf6;
        }

        .form-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid transparent;
          border-radius: 12px;
          font-size: 0.95rem;
          font-family: 'Poppins', sans-serif;
          color: #1a1a1a;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          background: white;
          border-color: #8b5cf6;
          box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .input-error {
          border-color: #ef4444;
          background: rgba(254, 226, 226, 0.95);
        }

        .error-message {
          margin-top: 6px;
          font-size: 0.8rem;
          color: #fecaca;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* ========== Form Actions ========== */
        .form-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(236, 72, 153, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-arrow {
          font-size: 1.25rem;
          transition: transform 0.3s ease;
          display: flex;
        }

        .submit-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .cancel-btn {
          padding: 8px 16px;
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cancel-btn:hover {
          color: white;
          text-decoration: underline;
        }

        .submit-error {
          padding: 12px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #fecaca;
          font-size: 0.9rem;
        }

        /* ========== Priority Card ========== */
        .priority-card {
          position: relative;
          width: 300px;
          padding: 32px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.15));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          animation: slideInRight 0.6s ease-out 0.4s backwards;
        }

        .priority-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          border-radius: 20px;
          opacity: 0.3;
          filter: blur(20px);
          z-index: -1;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .priority-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          animation: bounce 2s ease-in-out infinite;
          display: flex;
          color: #fbbf24;
        }

        .priority-badge {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(236, 72, 153, 0.2);
          border: 1px solid rgba(236, 72, 153, 0.4);
          border-radius: 12px;
          color: #fbbf24;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .priority-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .priority-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .priority-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .priority-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .feature-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
          font-size: 0.85rem;
          flex-shrink: 0;
          color: white;
        }

        /* ========== Success Screen ========== */
        .success-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          padding: 40px 20px;
        }

        .confetti-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .confetti {
          position: absolute;
          top: -10%;
          width: 10px;
          height: 10px;
          animation: confetti-fall 3s ease-out forwards;
        }

        .success-card {
          position: relative;
          max-width: 600px;
          padding: 48px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          text-align: center;
          animation: scaleIn 0.6s cubic-bezier(0.2, 0.9, 0.4, 1);
        }

        .success-icon-wrapper {
          position: relative;
          display: inline-flex;
          margin-bottom: 24px;
        }

        .success-pulse {
          position: absolute;
          inset: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
          opacity: 0.5;
          animation: pulse-glow 2s infinite;
          z-index: 0;
        }

        .success-icon {
          position: relative;
          font-size: 2.5rem;
          z-index: 1;
          display: flex;
          color: #fbbf24;
        }

        .success-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .success-message {
          font-size: 1.1rem;
          color: #d3cae8;
          margin-bottom: 24px;
        }

        .success-email {
          color: #a78bfa;
          font-weight: 600;
        }

        .founders-section {
          margin-top: 32px;
          background: rgba(139, 92, 246, 0.08);
          border-radius: 16px;
          padding: 20px;
        }

        .founders-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #a78bfa;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .founder-quote {
          margin-bottom: 16px;
          padding-left: 16px;
          border-left: 3px solid #a78bfa;
        }

        .quote-mark {
          font-size: 1.5rem;
          color: #a78bfa;
        }

        .quote-text {
          font-size: 1rem;
          color: #fff;
          margin-bottom: 4px;
        }

        .quote-author {
          font-size: 0.95rem;
          color: #d3cae8;
        }

        .success-footer {
          margin-top: 32px;
        }

        .auto-close-text {
          font-size: 0.9rem;
          color: #a78bfa;
          margin-bottom: 8px;
        }

        .success-close-btn {
          padding: 10px 24px;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .success-close-btn:hover {
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
        }

        /* Animations */
        @keyframes shine {
          0% { left: -100%; }
          60% { left: 100%; }
          100% { left: 100%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { transform: translateY(60px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes slideInDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes confetti-fall {
          to { top: 110%; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @media (max-width: 900px) {
          .form-container {
            flex-direction: column;
            gap: 24px;
          }
          .priority-card {
            width: 100%;
            margin-top: 24px;
          }
        }
        @media (max-width: 600px) {
          .modal-content {
            padding: 16px;
          }
          .success-card {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default JoinWaitlist;