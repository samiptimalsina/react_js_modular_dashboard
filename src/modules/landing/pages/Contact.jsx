import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded"
          rows="4"
        ></textarea>
        <button className="w-full px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
