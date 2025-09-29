import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <nav className="space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            안녕하세요! 개발자 포트폴리오입니다
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            React, Tailwind CSS, Vite를 사용한 현대적인 웹 개발
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
              프로젝트 보기
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-200">
              연락하기
            </button>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">기술 스택</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-semibold text-gray-900">React</h4>
              <p className="text-gray-600 mt-2">v19.1.1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-semibold text-gray-900">Vite</h4>
              <p className="text-gray-600 mt-2">v7.1.7</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-semibold text-gray-900">Tailwind CSS</h4>
              <p className="text-gray-600 mt-2">v4.1.13</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-semibold text-gray-900">pnpm</h4>
              <p className="text-gray-600 mt-2">v10.11.0</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
