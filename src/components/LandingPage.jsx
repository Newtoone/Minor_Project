import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <header className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 p-8 text-center">
        <h1 className="text-5xl font-bold">Welcome to Codeify</h1>
        <p className="text-xl mt-4">
          Your lightweight, browser-based code editor for HTML, CSS, and JavaScript.
        </p>
        <button
          className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg text-lg" onClick={() => navigate('/Minor_Project/editor')} // Navigate to the code editor
        >
          Start Coding Now
        </button>
      </header>

      {/* Features Section */}
      <section className="w-full py-16 px-8">
        <h2 className="text-3xl font-bold text-center">Why Choose Codeify?</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Real-time Preview</h3>
            <p className="mt-4">
              Instantly see the results of your code as you type with our live preview feature.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Download Code</h3>
            <p className="mt-4">
              Download your code files individually or as a ZIP archive directly from the editor.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Responsive Design</h3>
            <p className="mt-4">
              Use Codeify on any device, thanks to its fully responsive and modern design.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">What Developers Say</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p>
              "Codeify has transformed the way I prototype my projects. It's fast, intuitive, and just
              works!"
            </p>
            <p className="mt-4 text-purple-400">- John Doe, Frontend Developer</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p>
              "Finally, an online editor that doesn't require a backend! Codeify is a game-changer for
              teaching coding."
            </p>
            <p className="mt-4 text-purple-400">- Jane Smith, Educator</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2024 Codeify. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;