import React, { useState, useRef } from "react";
// background image removed from modal per request

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwjMxpiSmJ_KV50poHgHP9jde79mqAs0lruzhLfOFjvzHVHi30nStDkoExPbgjZXUrc1w/exec";

const SHEETS_SECRET =
  "AKfycbwjMxpiSmJ_KV50poHgHP9jde79mqAs0lruzhLfOFjvzHVHi30nStDkoExPbgjZXUrc1w";

const JoinWaitlist = () => {
  const [open, setOpen] = useState(false);
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
  const autoCloseRef = useRef(null);

  function reset() {
    if (autoCloseRef.current) {
      clearTimeout(autoCloseRef.current);
      autoCloseRef.current = null;
    }
    setOpen(false);
    setStep(1);
    setLoading(false);
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

    // Send to Hasura GraphQL endpoint
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
      // auto-close after a short delay so user sees the message
      autoCloseRef.current = setTimeout(() => reset(), 3500);
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
        className={`ml-4 py-4 px-8 rounded-2xl font-poppins font-semibold text-white shadow-2xl text-lg transform transition-all duration-300 hover:scale-105 focus:outline-none`}
        style={{ backgroundColor: "rgb(90,54,137)" }}
        aria-label="Join the waitlist"
      >
        <span className="inline-block mr-2 animate-pulse">✨</span>
        Join Waitlist
        <span className="inline-block ml-2 animate-spin-slow">🌪️</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          onClick={reset}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 scale-95 md:scale-100"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "modalIn .35s cubic-bezier(.2,.9,.4,1)",
              backgroundColor: "rgb(110,69,161)",
              maxHeight: "75vh",
              borderRadius: "28px",
            }}
          >
            <button
              onClick={reset}
              className="absolute z-50 right-4 top-4 text-gray-700 bg-white/30 hover:bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center"
              aria-label="Close waitlist form"
            >
              ✕
            </button>

            <div
              className="p-6 md:p-8"
              style={{ maxHeight: "65vh", overflowY: "auto" }}
            >
              {step === 1 && (
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Join waitlist
                    </h3>
                    <p className="text-sm text-indigo-100 mb-5">
                      Sign up for early access and exclusive updates — we’ll
                      keep you in the loop.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-xs text-white">Name</label>
                        <input
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${
                            errors.name
                              ? "border-red-300 focus:ring-red-200"
                              : "border-gray-200 focus:ring-indigo-200"
                          }`}
                          placeholder="Enter your name"
                        />
                        {errors.name && (
                          <div className="text-xs text-red-500 mt-1">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-xs text-indigo-100">Email</label>
                        <input
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${
                            errors.email
                              ? "border-red-300 focus:ring-red-200"
                              : "border-gray-200 focus:ring-indigo-200"
                          }`}
                          placeholder="ex@gmail.com"
                        />
                        {errors.email && (
                          <div className="text-xs text-red-200 mt-1">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="text-xs text-white">Phone</label>
                          <input
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${
                              errors.phone
                                ? "border-red-300 focus:ring-red-200"
                                : "border-gray-200 focus:ring-indigo-200"
                            }`}
                            placeholder="+91-9652297686"
                          />
                          {errors.phone && (
                            <div className="text-xs text-red-500 mt-1">
                              {errors.phone}
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="text-xs text-white">City</label>
                          <input
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                            placeholder="City"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-white">State</label>
                          <input
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                            placeholder="State / Region"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-white">Device</label>
                        <select
                          name="device"
                          value={values.device}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${
                            errors.device
                              ? "border-red-300 focus:ring-red-200"
                              : "border-gray-200 focus:ring-indigo-200"
                          }`}
                        >
                          <option value="">Select your device</option>
                          <option>iPhone</option>
                          <option>Android</option>
                          <option>iPad / Tablet</option>
                          <option>Desktop / Laptop</option>
                          <option>Other</option>
                        </select>
                        {errors.device && (
                          <div className="text-xs text-red-500 mt-1">
                            {errors.device}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-xs text-white">
                          Anything we should know? (optional)
                        </label>
                        <input
                          name="note"
                          value={values.note}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                          placeholder="e.g. interested in beta, partnership, etc."
                        />
                      </div>

                      {errors.submit && (
                        <div className="text-sm text-red-400">
                          {errors.submit}
                        </div>
                      )}

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full px-5 py-3 font-semibold shadow hover:scale-[1.02] transition-transform"
                          aria-disabled={loading}
                        >
                          {loading ? "Sending…" : "Join Waitlist"}
                        </button>

                        <button
                          type="button"
                          onClick={reset}
                          className="text-sm text-indigo-100 hover:underline"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="hidden md:flex w-60 h-40 items-center justify-center bg-gradient-to-b from-indigo-900 to-purple-700 text-white rounded-xl p-4 transform transition-all duration-700 hover:scale-105">
                    <div>
                      <div className="text-sm opacity-90">Limited spots</div>
                      <div className="text-2xl font-bold mt-2">
                        Priority Access
                      </div>
                      <div className="text-xs mt-2 opacity-80">
                        Early features & invites
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="text-center py-8">
                  <div
                    className="mx-auto w-full max-w-lg rounded-xl p-6 shadow-lg border"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="text-4xl mb-2">🎉</div>
                    <h4 className="text-xl font-semibold text-white">
                      Thanks, {values.name || "friend"}!
                    </h4>
                    <p className="text-sm text-indigo-100 mt-2">
                      You’re on the list. We’ll email{" "}
                      <span className="font-medium text-white">
                        {values.email}
                      </span>{" "}
                      with next steps.
                    </p>

                    <div className="mt-6 text-left text-indigo-100 space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-indigo-100">
                          A note from our founders
                        </div>
                        <div className="mt-2 text-sm text-white">
                          "Gozy is built to simplify everyday life — we’re
                          excited to have you with us on this journey." —{" "}
                          <span className="font-medium">Sandeep Naik</span>,
                          Founder & CEO
                        </div>
                        <div className="mt-2 text-sm text-white">
                          "We’re designing Gozy to bring convenience to millions
                          — thank you for your support." —{" "}
                          <span className="font-medium">V Nikshitha</span>,
                          Founder & CEO
                        </div>
                      </div>

                      <div className="text-sm text-indigo-200">
                        This window will close automatically.
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={reset}
                        className="px-4 py-2 rounded-full bg-indigo-200 text-indigo-900"
                      >
                        Close
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
        @keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        .animate-spin-slow{animation:spin 4s linear infinite}

        @keyframes modalIn { from { opacity: 0; transform: translateY(10px) scale(.98) } to { opacity: 1; transform: translateY(0) scale(1) } }
      `}</style>
    </>
  );
};

export default JoinWaitlist;
