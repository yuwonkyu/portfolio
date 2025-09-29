import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="font-bold text-purple-600 text-lg">
              🎮 원뀨의 포트폴리오
            </h1>
            <nav className="space-x-4 flex">
              <a
                href="#intro"
                className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm transition-all duration-200"
              >
                소개
              </a>
              <a
                href="#basic"
                className="bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm transition-all duration-200"
              >
                기초
              </a>
              <a
                href="#intermediate"
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm transition-all duration-200"
              >
                중급
              </a>
              <a
                href="#advanced"
                className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm transition-all duration-200"
              >
                심화
              </a>
              <a
                href="#contact"
                className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm transition-all duration-200"
              >
                연락
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section
        id="intro"
        className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 flex items-center pt-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full border-4 border-purple-300 shadow-xl mx-auto flex items-center justify-center text-7xl mb-8">
              🧙‍♂️
            </div>

            <h2 className="text-4xl font-bold text-purple-800 mb-6">
              게임 UI/UX & 프론트엔드 개발자
            </h2>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl border border-purple-200 mb-8">
              <p className="text-gray-800 text-xl mb-6 leading-relaxed">
                게임 UI/UX 및 프론트엔드, 게임 디자인에 관심이 있는
                개발자입니다.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                늦둥이지만 풍부한 경험과 뛰어난 책임감으로 프로젝트에 임합니다.
              </p>
              <p className="text-gray-600 text-base">
                사용자에게 즐거움과 편의성을 제공하는 인터페이스 구현을 목표로
                합니다.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-xl border border-purple-100">
              <h3 className="text-purple-700 font-bold mb-4 text-lg">
                기술 스택
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">
                  React
                </span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">
                  TypeScript
                </span>
                <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full font-medium">
                  JavaScript
                </span>
                <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">
                  HTML/CSS
                </span>
                <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-medium">
                  Tailwind CSS
                </span>
                <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium">
                  Vite
                </span>
                <span className="bg-red-200 text-red-800 px-4 py-2 rounded-full font-medium">
                  Git
                </span>
                <span className="bg-indigo-200 text-indigo-800 px-4 py-2 rounded-full font-medium">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Projects */}
      <section
        id="basic"
        className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            🌱 기초 프로젝트
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-6xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                프로젝트 1
              </h3>
              <p className="text-green-700 mb-4">
                프로젝트 설명이 들어갈 자리입니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Live Demo
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                  GitHub
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                프로젝트 2
              </h3>
              <p className="text-green-700 mb-4">
                프로젝트 설명이 들어갈 자리입니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Live Demo
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                  GitHub
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-6xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                프로젝트 3
              </h3>
              <p className="text-green-700 mb-4">
                프로젝트 설명이 들어갈 자리입니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Live Demo
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
