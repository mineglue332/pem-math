import { useState } from 'react';
import { chapters, Chapter, QuizQuestion } from './data/chapters';

type View = 'home' | 'chapter' | 'quiz' | 'results';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [activeSubTopic, setActiveSubTopic] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const startQuiz = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setCurrentView('quiz');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setUserAnswers([]);
  };

  const openChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setCurrentView('chapter');
    setActiveSubTopic(0);
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    const isCorrect = answerIndex === selectedChapter!.quiz[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);
    setAnswers([...answers, isCorrect]);
    setUserAnswers([...userAnswers, answerIndex]);
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedChapter!.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCurrentView('results');
    }
  };

  const getGrade = () => {
    const percentage = (score / selectedChapter!.quiz.length) * 100;
    if (percentage >= 90) return { grade: 'A', emoji: '🌟', message: 'Luar Biasa!' };
    if (percentage >= 80) return { grade: 'B', emoji: '😊', message: 'Hebat!' };
    if (percentage >= 70) return { grade: 'C', emoji: '👍', message: 'Bagus!' };
    if (percentage >= 60) return { grade: 'D', emoji: '💪', message: 'Terus Belajar!' };
    return { grade: 'E', emoji: '📚', message: 'Ayo Belajar Lagi!' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-lg rounded-lg p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Modul Matematika</h1>
              <p className="text-xs text-gray-500">Fase B - Kelas 4</p>
            </div>
          </div>
        </div>
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100%-100px)]">
          <button
            onClick={() => { setCurrentView('home'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${currentView === 'home' ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-gray-50 text-gray-600'}`}
          >
            <span className="text-xl">🏠</span>
            <span>Beranda</span>
          </button>
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => { openChapter(chapter); setSidebarOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${selectedChapter?.id === chapter.id && currentView === 'chapter' ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-gray-50 text-gray-600'}`}
            >
              <span className="text-xl">{chapter.icon}</span>
              <span className="text-sm">BAB {chapter.id}: {chapter.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {/* Home View */}
        {currentView === 'home' && (
          <div className="p-6 lg:p-10">
            <div className="max-w-5xl mx-auto">
              {/* Hero */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-white mb-10 shadow-xl">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Selamat Datang di Modul Matematika Interaktif! 🎓
                </h1>
                <p className="text-blue-100 text-lg mb-6">
                  Belajar matematika menjadi lebih menyenangkan dengan materi yang lengkap, contoh soal, dan latihan interaktif.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">📚 5 Bab Materi</span>
                  <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">✏️ 42+ Soal Latihan</span>
                  <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">🎯 Interaktif</span>
                </div>
              </div>

              {/* Chapter Cards */}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Pilih Bab Pembelajaran</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                    onClick={() => openChapter(chapter)}
                  >
                    <div className={`bg-gradient-to-r ${chapter.color} p-6 text-white`}>
                      <span className="text-4xl mb-3 block">{chapter.icon}</span>
                      <h3 className="font-bold text-lg">BAB {chapter.id}</h3>
                      <p className="text-white/90 text-sm">{chapter.title}</p>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                          {chapter.subTopics.length} Sub Materi
                        </span>
                        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                          {chapter.quiz.length} Soal
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); openChapter(chapter); }}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded-lg transition-colors"
                        >
                          📖 Baca Materi
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); startQuiz(chapter); }}
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition-colors"
                        >
                          ✏️ Latihan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learning Objectives */}
              <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Capaian Pembelajaran Fase B</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-5">
                    <h4 className="font-semibold text-blue-800 mb-2">🔢 Bilangan</h4>
                    <p className="text-sm text-blue-700">Memahami bilangan cacah sampai 999.999, operasi hitung, pecahan, dan desimal</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-5">
                    <h4 className="font-semibold text-purple-800 mb-2">🔤 Aljabar</h4>
                    <p className="text-sm text-purple-700">Persamaan sederhana, hubungan perkalian-pembagian, dan pola bilangan</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5">
                    <h4 className="font-semibold text-green-800 mb-2">📏 Pengukuran</h4>
                    <p className="text-sm text-green-700">Mengukur panjang, berat, keliling, luas, dan volume</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-5">
                    <h4 className="font-semibold text-orange-800 mb-2">📐 Geometri</h4>
                    <p className="text-sm text-orange-700">Bangun datar, bangun ruang, sudut, keliling, dan luas</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-5 md:col-span-2">
                    <h4 className="font-semibold text-red-800 mb-2">📊 Analisa Data dan Peluang</h4>
                    <p className="text-sm text-red-700">Menyajikan dan menganalisis data dalam berbagai bentuk diagram, serta memahami peluang kejadian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chapter View */}
        {currentView === 'chapter' && selectedChapter && (
          <div className="p-6 lg:p-10">
            <div className="max-w-4xl mx-auto">
              {/* Chapter Header */}
              <div className={`bg-gradient-to-r ${selectedChapter.color} rounded-2xl p-8 text-white mb-8 shadow-lg`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{selectedChapter.icon}</span>
                  <div>
                    <p className="text-white/80 text-sm font-medium">BAB {selectedChapter.id}</p>
                    <h1 className="text-2xl lg:text-3xl font-bold">{selectedChapter.title}</h1>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveSubTopic(-1)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSubTopic === -1 ? 'bg-blue-500 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 shadow'}`}
                >
                  📋 CP & TP
                </button>
                {selectedChapter.subTopics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubTopic(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSubTopic === index ? 'bg-blue-500 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 shadow'}`}
                  >
                    {index + 1}. {topic.title}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="bg-white rounded-2xl shadow-md p-8">
                {activeSubTopic === -1 ? (
                  <div className="space-y-8">
                    {/* CP Section */}
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">📌</span>
                        Capaian Pembelajaran (CP)
                      </h2>
                      <ul className="space-y-3">
                        {selectedChapter.cp.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{index + 1}</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* TP Section */}
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">🎯</span>
                        Tujuan Pembelajaran (TP)
                      </h2>
                      <ul className="space-y-3">
                        {selectedChapter.tp.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{index + 1}</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ATP Section */}
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">📝</span>
                        Alur Tujuan Pembelajaran (ATP)
                      </h2>
                      <ul className="space-y-3">
                        {selectedChapter.atp.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{index + 1}</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      {selectedChapter.subTopics[activeSubTopic].title}
                    </h2>
                    <div className="prose prose-sm max-w-none">
                      <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {selectedChapter.subTopics[activeSubTopic].content}
                        </p>
                      </div>
                      {selectedChapter.subTopics[activeSubTopic].example && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6">
                          <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                            💡 Contoh:
                          </h4>
                          <p className="text-yellow-900 whitespace-pre-line font-mono text-sm">
                            {selectedChapter.subTopics[activeSubTopic].example}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                      <button
                        onClick={() => setActiveSubTopic(Math.max(0, activeSubTopic - 1))}
                        disabled={activeSubTopic === 0}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        ← Sebelumnya
                      </button>
                      {activeSubTopic < selectedChapter.subTopics.length - 1 ? (
                        <button
                          onClick={() => setActiveSubTopic(activeSubTopic + 1)}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                          Selanjutnya →
                        </button>
                      ) : (
                        <button
                          onClick={() => startQuiz(selectedChapter)}
                          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                        >
                          🎯 Mulai Latihan →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Start Quiz Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => startQuiz(selectedChapter)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  ✏️ Kerjakan Latihan Soal ({selectedChapter.quiz.length} Soal)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quiz View */}
        {currentView === 'quiz' && selectedChapter && (
          <div className="p-6 lg:p-10">
            <div className="max-w-3xl mx-auto">
              {/* Quiz Header */}
              <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedChapter.icon}</span>
                    <div>
                      <h2 className="font-bold text-gray-800">Latihan - BAB {selectedChapter.id}</h2>
                      <p className="text-sm text-gray-500">{selectedChapter.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentView('chapter')}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Soal {currentQuestion + 1} dari {selectedChapter.quiz.length}</span>
                    <span>Skor: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / selectedChapter.quiz.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-2xl shadow-md p-8">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Pertanyaan {currentQuestion + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 leading-relaxed">
                    {selectedChapter.quiz[currentQuestion].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {selectedChapter.quiz[currentQuestion].options.map((option, index) => {
                    let optionStyle = 'bg-gray-50 hover:bg-blue-50 border-gray-200 hover:border-blue-300';
                    if (selectedAnswer !== null) {
                      if (index === selectedChapter.quiz[currentQuestion].correctAnswer) {
                        optionStyle = 'bg-green-50 border-green-400 ring-2 ring-green-200';
                      } else if (index === selectedAnswer && index !== selectedChapter.quiz[currentQuestion].correctAnswer) {
                        optionStyle = 'bg-red-50 border-red-400 ring-2 ring-red-200';
                      } else {
                        optionStyle = 'bg-gray-50 border-gray-200 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${optionStyle} ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            selectedAnswer !== null && index === selectedChapter.quiz[currentQuestion].correctAnswer
                              ? 'bg-green-500 text-white'
                              : selectedAnswer === index && index !== selectedChapter.quiz[currentQuestion].correctAnswer
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {selectedAnswer !== null && index === selectedChapter.quiz[currentQuestion].correctAnswer ? '✓' :
                             selectedAnswer === index && index !== selectedChapter.quiz[currentQuestion].correctAnswer ? '✗' :
                             String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <div className={`mt-6 p-5 rounded-xl ${selectedAnswer === selectedChapter.quiz[currentQuestion].correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                    <h4 className={`font-bold mb-2 ${selectedAnswer === selectedChapter.quiz[currentQuestion].correctAnswer ? 'text-green-700' : 'text-orange-700'}`}>
                      {selectedAnswer === selectedChapter.quiz[currentQuestion].correctAnswer ? '🎉 Benar!' : '💡 Pembahasan:'}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedChapter.quiz[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                {/* Next Button */}
                {selectedAnswer !== null && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={nextQuestion}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-md"
                    >
                      {currentQuestion < selectedChapter.quiz.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil 🎯'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results View */}
        {currentView === 'results' && selectedChapter && (
          <div className="p-6 lg:p-10">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="mb-6">
                  <span className="text-6xl block mb-4">{getGrade().emoji}</span>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{getGrade().message}</h2>
                  <p className="text-gray-500">Latihan BAB {selectedChapter.id}: {selectedChapter.title}</p>
                </div>

                {/* Score Circle */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="40" fill="none"
                      stroke={score / selectedChapter.quiz.length >= 0.7 ? '#10b981' : score / selectedChapter.quiz.length >= 0.5 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="8"
                      strokeDasharray={`${(score / selectedChapter.quiz.length) * 251.2} 251.2`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">{score}</span>
                    <span className="text-gray-500 text-sm">dari {selectedChapter.quiz.length}</span>
                  </div>
                </div>

                {/* Grade */}
                <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl mb-8">
                  <span className="text-2xl font-bold">Nilai: {getGrade().grade}</span>
                  <span className="ml-2 text-white/80">({Math.round((score / selectedChapter.quiz.length) * 100)}%)</span>
                </div>

                {/* Answer Summary */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-700 mb-3">Ringkasan Jawaban:</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {answers.map((correct, index) => (
                      <div
                        key={index}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm ${correct ? 'bg-green-500' : 'bg-red-500'}`}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    ✅ Benar: {score} | ❌ Salah: {selectedChapter.quiz.length - score}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => startQuiz(selectedChapter)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105"
                  >
                    🔄 Ulangi Latihan
                  </button>
                  <button
                    onClick={() => openChapter(selectedChapter)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all"
                  >
                    📖 Baca Materi
                  </button>
                  <button
                    onClick={() => setCurrentView('home')}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all"
                  >
                    🏠 Beranda
                  </button>
                </div>
              </div>

              {/* Review Answers */}
              <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">📝 Pembahasan Soal</h3>
                <div className="space-y-6">
                  {selectedChapter.quiz.map((q: QuizQuestion, index: number) => (
                    <div key={q.id} className={`p-5 rounded-xl border-l-4 ${answers[index] ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
                      <div className="flex items-start gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${answers[index] ? 'bg-green-500' : 'bg-red-500'}`}>
                          {answers[index] ? '✓' : '✗'}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 mb-2">{index + 1}. {q.question}</p>
                          <p className="text-sm text-gray-600 mb-1">
                            Jawaban kamu: <span className={answers[index] ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{q.options[userAnswers[index]]}</span>
                          </p>
                          {!answers[index] && (
                            <p className="text-sm text-green-600 font-bold mb-1">
                              Jawaban benar: {q.options[q.correctAnswer]}
                            </p>
                          )}
                          <p className="text-sm text-gray-500 italic">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
