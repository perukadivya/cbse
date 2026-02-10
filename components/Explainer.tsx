'use client';

import { useState } from 'react';
import { explainTopic, generateRevisionNotes, generateImportantQuestions } from '@/app/actions';
import { Button, Card, CardContent } from '@/components/ui';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Loader2, Sparkles, BookOpen, FileText, HelpCircle, Copy, Check } from 'lucide-react';

interface ExplainerProps {
    subject?: string;
    chapter?: string;
    book?: string;
    lang?: string;
}

type Mode = 'explain' | 'revision' | 'important';

export default function Explainer({ subject, chapter, book, lang = 'en' }: ExplainerProps) {
    const [topic, setTopic] = useState(chapter || '');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [simplify, setSimplify] = useState(false);
    const [mode, setMode] = useState<Mode>('explain');
    const [copied, setCopied] = useState(false);

    const handleGenerate = async () => {
        const searchTopic = topic || chapter || '';
        if (!searchTopic) return;
        setLoading(true);
        setContent('');

        try {
            let text = '';
            if (mode === 'explain') {
                text = await explainTopic(searchTopic, simplify, subject, chapter, book, lang);
            } else if (mode === 'revision') {
                text = await generateRevisionNotes(searchTopic, subject || 'General', book, lang);
            } else {
                text = await generateImportantQuestions(searchTopic, subject || 'General', book, lang);
            }
            setContent(text || 'No content generated.');
        } catch (error) {
            console.error(error);
            setContent("Sorry, I couldn't generate content right now. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const modeButtons: { key: Mode; label: string; icon: React.ReactNode; color: string }[] = [
        { key: 'explain', label: 'Explain', icon: <BookOpen className="w-4 h-4" />, color: 'bg-indigo-600 hover:bg-indigo-700' },
        { key: 'revision', label: 'Revision Notes', icon: <FileText className="w-4 h-4" />, color: 'bg-emerald-600 hover:bg-emerald-700' },
        { key: 'important', label: 'Important Q&A', icon: <HelpCircle className="w-4 h-4" />, color: 'bg-amber-600 hover:bg-amber-700' },
    ];

    return (
        <Card className="w-full max-w-3xl mx-auto shadow-lg border-indigo-100">
            <CardContent className="p-6 space-y-5">
                {/* Context Breadcrumb */}
                {subject && chapter && (
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {subject} → {chapter}
                    </div>
                )}

                <div className="flex items-center space-x-2 text-indigo-600 mb-1">
                    <BookOpen className="w-5 h-5" />
                    <h2 className="text-xl font-bold">AI Study Assistant</h2>
                </div>

                {/* Mode Selector */}
                <div className="flex flex-wrap gap-2">
                    {modeButtons.map(btn => (
                        <button
                            key={btn.key}
                            onClick={() => setMode(btn.key)}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${mode === btn.key
                                ? `${btn.color} text-white shadow-md`
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {btn.icon}
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Topic Input */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder={chapter ? `Topic within "${chapter}"...` : "Enter a topic (e.g., 'Ohm's Law')"}
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="flex-1 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all bg-white"
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                    />
                    <Button onClick={handleGenerate} disabled={loading || !topic} className="min-w-[110px] rounded-xl">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Generate'}
                    </Button>
                </div>

                {/* Simplify Toggle (only for explain mode) */}
                {mode === 'explain' && (
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="simplify"
                            checked={simplify}
                            onChange={(e) => setSimplify(e.target.checked)}
                            className="rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="simplify" className="text-sm text-gray-600 flex items-center gap-1 cursor-pointer select-none">
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                            Explain like I'm 5
                        </label>
                    </div>
                )}

                {/* Content Output */}
                {content && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        {/* Copy Button */}
                        <button
                            onClick={handleCopy}
                            className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-white shadow-sm border border-gray-200 transition-all z-10"
                            title="Copy to clipboard"
                        >
                            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
                        </button>

                        <div className="mt-2 bg-gradient-to-br from-indigo-50/50 to-white p-6 rounded-xl border border-indigo-100">
                            <div className="prose prose-indigo prose-sm max-w-none prose-headings:text-indigo-700 prose-h2:text-lg prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-2 prose-h3:text-base prose-h3:font-semibold prose-strong:text-gray-900 prose-li:text-gray-700 prose-p:text-gray-800 prose-p:leading-relaxed">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        </div>
                    </motion.div>
                )}
            </CardContent>
        </Card>
    );
}
