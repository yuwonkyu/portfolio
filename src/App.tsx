import React from "react";
import "./App.css";

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-red-100">
              원뀨의 포트폴리오
            </h1>
            <nav className="space-x-8">
              <a href="#about" className="text-red-600 hover:text-red-900">
                About
              </a>
              <a href="#projects" className="text-red-600 hover:text-red-900">
                Projects
              </a>
              <a href="#contact" className="text-red-600 hover:text-red-900">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-900 mb-4">
            안녕하세요! 개발자 포트폴리오입니다
          </h2>
        </div>
      </main>
    </div>
  );
}

export default App;
