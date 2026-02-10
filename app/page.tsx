'use client';

import { useState } from 'react';
import SubjectSelector from '@/components/SubjectSelector';
import Explainer from '@/components/Explainer';
import Quiz from '@/components/Quiz';
import { Subject, SubjectBook, Chapter } from '@/lib/ncert-data';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, BrainCircuit, GraduationCap, Languages } from 'lucide-react';

type View = 'subjects' | 'learn' | 'quiz';

interface SelectedContext {
  subject: Subject;
  book: SubjectBook;
  chapter: Chapter;
}

export default function Home() {
  const [view, setView] = useState<View>('subjects');
  const [context, setContext] = useState<SelectedContext | null>(null);
  const [actionAfterSelect, setActionAfterSelect] = useState<'learn' | 'quiz'>('learn');
  const [lang, setLang] = useState<'en' | 'te'>('en');

  const handleSelectChapter = (subject: Subject, book: SubjectBook, chapter: Chapter) => {
    setContext({ subject, book, chapter });
    setView(actionAfterSelect);
  };

  const goHome = () => {
    setView('subjects');
    setContext(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 rounded-b-[3rem] shadow-2xl z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 container mx-auto px-4 py-8">

        {/* Language Toggle — Top Right */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 shadow-md text-sm font-semibold"
          >
            <Languages className="w-4 h-4" />
            {lang === 'en' ? 'తెలుగు' : 'English'}
          </button>
        </div>

        {/* Header */}
        <header className="text-center text-white mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <GraduationCap className="w-10 h-10 text-yellow-300" />
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                CBSE Ace <span className="text-yellow-300">Grade 10</span>
              </h1>
            </div>
            <p className="text-indigo-100 text-lg md:text-xl font-light">
              {lang === 'en'
                ? 'Your AI-powered NCERT study companion'
                : 'మీ AI-ఆధారిత NCERT అధ్యయన సహాయకుడు'}
            </p>
          </motion.div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          {view === 'subjects' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Quick Action Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setActionAfterSelect('learn')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md ${actionAfterSelect === 'learn'
                    ? 'bg-white text-indigo-600 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                >
                  <BookOpen className="w-5 h-5" />
                  {lang === 'en' ? 'Study' : 'అధ్యయనం'}
                </button>
                <button
                  onClick={() => setActionAfterSelect('quiz')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md ${actionAfterSelect === 'quiz'
                    ? 'bg-white text-purple-600 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                >
                  <BrainCircuit className="w-5 h-5" />
                  {lang === 'en' ? 'Quiz' : 'క్విజ్'}
                </button>
              </div>

              {/* Subject Grid */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50">
                <SubjectSelector onSelectChapter={handleSelectChapter} lang={lang} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Back Button */}
              <button
                onClick={goHome}
                className="flex items-center gap-2 text-white/80 hover:text-white mb-6 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {lang === 'en' ? 'Back to Subjects' : 'విషయాలకు తిరిగి'}
              </button>

              {/* Content Area */}
              {view === 'learn' && (
                <Explainer
                  subject={context?.subject.name}
                  chapter={context?.chapter.name}
                  book={context?.book.bookName}
                  lang={lang}
                />
              )}
              {view === 'quiz' && (
                <Quiz
                  subject={context?.subject.name}
                  chapter={context?.chapter.name}
                  lang={lang}
                />
              )}
            </motion.div>
          )}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>Powered by Gemini & NCERT • Built for Board Exam Success 🎯</p>
        </footer>
      </div>
    </main>
  );
}
