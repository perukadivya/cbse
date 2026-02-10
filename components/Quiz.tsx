'use client';

import { useState } from 'react';
import { generateQuiz } from '@/app/actions';
import { Button, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, BrainCircuit, RefreshCw, Trophy, Target } from 'lucide-react';

interface Question {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
}

interface QuizProps {
    subject?: string;
    chapter?: string;
}

export default function Quiz({ subject, chapter }: QuizProps) {
    const [topic, setTopic] = useState(chapter || '');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const startQuiz = async () => {
        const searchTopic = topic || chapter || '';
        if (!searchTopic) return;
        setLoading(true);
        setQuestions([]);
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);

        try {
            const data = await generateQuiz(searchTopic, subject, chapter);
            if (Array.isArray(data) && data.length > 0) {
                setQuestions(data);
            } else {
                alert('Could not generate quiz. Try again.');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleOptionSelect = (option: string) => {
        if (selectedOption !== null) return;
        setSelectedOption(option);
        if (option === questions[currentIndex].answer) {
            setScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(i => i + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    const getScoreMessage = () => {
        const pct = Math.round((score / questions.length) * 100);
        if (pct === 100) return { emoji: '🏆', msg: 'Perfect Score! You\'re board-exam ready!', color: 'text-yellow-500' };
        if (pct >= 80) return { emoji: '🌟', msg: 'Excellent! Keep it up!', color: 'text-green-600' };
        if (pct >= 60) return { emoji: '👍', msg: 'Good effort. Revise the weak areas.', color: 'text-blue-600' };
        return { emoji: '📚', msg: 'Keep studying! Review NCERT chapter again.', color: 'text-orange-600' };
    };

    return (
        <Card className="w-full max-w-3xl mx-auto shadow-lg border-purple-100">
            <CardContent className="p-6">
                {/* Context Breadcrumb */}
                {subject && chapter && (
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                        {subject} → {chapter}
                    </div>
                )}

                <div className="flex items-center space-x-2 text-purple-600 mb-6">
                    <BrainCircuit className="w-6 h-6" />
                    <h2 className="text-xl font-bold">NCERT Quiz</h2>
                </div>

                {questions.length === 0 ? (
                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder={chapter ? `Quiz on "${chapter}"...` : "Enter topic for quiz (e.g., 'Carbon Compounds')"}
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="flex-1 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white"
                                onKeyDown={(e) => e.key === 'Enter' && startQuiz()}
                            />
                            <Button onClick={startQuiz} disabled={loading || !topic} className="bg-purple-600 hover:bg-purple-700 rounded-xl">
                                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Start Quiz'}
                            </Button>
                        </div>
                        <p className="text-sm text-gray-500">
                            {chapter ? `Quiz based on NCERT chapter: "${chapter}"` : 'AI generates fresh board-exam level questions every time!'}
                        </p>
                    </div>
                ) : showResult ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-6 py-8"
                    >
                        <div className="text-6xl mb-2">{getScoreMessage().emoji}</div>
                        <h3 className="text-2xl font-bold text-gray-800">Quiz Completed!</h3>

                        {/* Score Circle */}
                        <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto">
                            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                                <circle
                                    cx="60" cy="60" r="54" fill="none" stroke="url(#scoreGradient)" strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeDasharray={`${(score / questions.length) * 339} 339`}
                                />
                                <defs>
                                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#8b5cf6" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="absolute text-3xl font-black text-purple-600">
                                {Math.round((score / questions.length) * 100)}%
                            </span>
                        </div>

                        <p className={`font-semibold ${getScoreMessage().color}`}>
                            {getScoreMessage().msg}
                        </p>
                        <p className="text-gray-600">
                            You got <span className="font-bold text-gray-900">{score}</span> out of <span className="font-bold text-gray-900">{questions.length}</span> correct.
                        </p>
                        <div className="flex gap-3 justify-center pt-2">
                            <Button onClick={() => { setQuestions([]); setTopic(chapter || ''); }} className="bg-gray-800 hover:bg-gray-900 rounded-xl">
                                Try Another Topic
                            </Button>
                            <Button onClick={() => { setCurrentIndex(0); setSelectedOption(null); setShowResult(false); setScore(0); }} className="bg-purple-600 hover:bg-purple-700 rounded-xl">
                                Retry Same Quiz
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <div className="space-y-6">
                        {/* Progress Bar */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-500 font-medium">
                                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Q{currentIndex + 1} of {questions.length}</span>
                                <span className="flex items-center gap-1"><Trophy className="w-4 h-4" /> Score: {score}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </div>

                        <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
                            {questions[currentIndex].question}
                        </h3>

                        <div className="space-y-3">
                            {questions[currentIndex].options.map((option, idx) => {
                                const isSelected = selectedOption === option;
                                const isCorrect = option === questions[currentIndex].answer;
                                const showCorrect = selectedOption !== null && isCorrect;
                                const showWrong = isSelected && !isCorrect;

                                return (
                                    <motion.button
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        onClick={() => handleOptionSelect(option)}
                                        disabled={selectedOption !== null}
                                        className={cn(
                                            "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between",
                                            selectedOption === null && "hover:bg-purple-50 hover:border-purple-300 border-gray-200",
                                            showCorrect && "bg-green-50 border-green-500 text-green-900",
                                            showWrong && "bg-red-50 border-red-500 text-red-900",
                                            selectedOption !== null && !showCorrect && !showWrong && "opacity-40 border-gray-200"
                                        )}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2",
                                                selectedOption === null && "border-gray-300 text-gray-500",
                                                showCorrect && "border-green-500 bg-green-500 text-white",
                                                showWrong && "border-red-500 bg-red-500 text-white",
                                                selectedOption !== null && !showCorrect && !showWrong && "border-gray-200 text-gray-400"
                                            )}>
                                                {String.fromCharCode(65 + idx)}
                                            </span>
                                            {option}
                                        </span>
                                        {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />}
                                        {showWrong && <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />}
                                    </motion.button>
                                );
                            })}
                        </div>

                        <AnimatePresence>
                            {selectedOption && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-800"
                                >
                                    <span className="font-bold block mb-1">📖 Explanation:</span>
                                    {questions[currentIndex].explanation}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {selectedOption && (
                            <div className="flex justify-end pt-2">
                                <Button onClick={nextQuestion} className="bg-purple-600 hover:bg-purple-700 rounded-xl">
                                    {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question →'}
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
