import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks for reaching out! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="pt-28 pb-12 px-6 text-white min-h-screen bg-black flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Contact <span className="text-yellow-500">Us</span>
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Have a question about your grocery delivery? We're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Store</h3>
              <p className="text-gray-400">UPES Dehradun, Bidholi Campus</p>
              <p className="text-gray-400">Uttarakhand, 248007</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-400">Email: harshitsinha211@gmail.com</p>
              <p className="text-gray-400">Phone: +91 9006576891</p>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 bg-black rounded-lg border border-slate-700 focus:border-yellow-500 outline-none" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 bg-black rounded-lg border border-slate-700 focus:border-yellow-500 outline-none" 
              required 
            />
            <textarea 
              placeholder="How can we help?" 
              rows="4" 
              className="w-full p-3 bg-black rounded-lg border border-slate-700 focus:border-yellow-500 outline-none" 
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Send Message
            </button>
            {status && <p className="text-green-400 text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;