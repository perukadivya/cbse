'use client';

import { useState } from 'react';
import { subjects, Subject, Chapter, SubjectBook } from '@/lib/ncert-data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, BookOpen, X } from 'lucide-react';

interface SubjectSelectorProps {
    onSelectChapter: (subject: Subject, book: SubjectBook, chapter: Chapter) => void;
    lang?: string;
}

export default function SubjectSelector({ onSelectChapter, lang = 'en' }: SubjectSelectorProps) {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChapters = selectedSubject
        ? selectedSubject.books.flatMap(book =>
            book.chapters
                .filter(ch =>
                    ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    ch.keyTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
                )
                .map(ch => ({ book, chapter: ch }))
        )
        : [];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
                {!selectedSubject ? (
                    <motion.div
                        key="subjects"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                            {lang === 'en' ? 'Choose your Subject' : 'మీ విషయాన్ని ఎంచుకోండి'}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {subjects.map((subject, idx) => (
                                <motion.button
                                    key={subject.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.08 }}
                                    onClick={() => setSelectedSubject(subject)}
                                    className={`group relative overflow-hidden rounded-2xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${subject.gradient}`}
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-4xl mb-3 block">{subject.icon}</span>
                                    <h3 className="text-white font-bold text-lg">{subject.name}</h3>
                                    <p className="text-white/70 text-sm mt-1">
                                        {subject.books.reduce((sum, b) => sum + b.chapters.length, 0)} chapters
                                    </p>
                                    <ChevronRight className="absolute bottom-4 right-4 w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="chapters"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={() => { setSelectedSubject(null); setSearchQuery(''); }}
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                            >
                                <X className="w-4 h-4" />
                                Back to Subjects
                            </button>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedSubject.gradient}`}>
                                <span className="text-xl">{selectedSubject.icon}</span>
                                <span className="text-white font-bold">{selectedSubject.name}</span>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder={lang === 'en' ? 'Search chapters or topics...' : 'అధ్యాయాలు లేదా అంశాలను అన్వేషించండి...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all bg-white shadow-sm"
                            />
                        </div>

                        {/* Chapters by Book */}
                        {selectedSubject.books.map(book => {
                            const bookChapters = filteredChapters.filter(fc => fc.book.bookName === book.bookName);
                            if (bookChapters.length === 0 && searchQuery) return null;
                            const chaptersToShow = searchQuery ? bookChapters : book.chapters.map(ch => ({ book, chapter: ch }));

                            return (
                                <div key={book.bookName} className="mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <BookOpen className="w-4 h-4 text-gray-500" />
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            {book.bookName}
                                        </h3>
                                    </div>
                                    <div className="space-y-2">
                                        {chaptersToShow.map(({ chapter }, idx) => (
                                            <motion.button
                                                key={chapter.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.03 }}
                                                onClick={() => onSelectChapter(selectedSubject, book, chapter)}
                                                className="w-full text-left p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-200 group"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                                                            {chapter.name}
                                                        </h4>
                                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                                            {chapter.keyTopics.slice(0, 4).map(topic => (
                                                                <span
                                                                    key={topic}
                                                                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                                                                >
                                                                    {topic}
                                                                </span>
                                                            ))}
                                                            {chapter.keyTopics.length > 4 && (
                                                                <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">
                                                                    +{chapter.keyTopics.length - 4} more
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-400 transition-colors ml-4 flex-shrink-0" />
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
