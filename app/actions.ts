'use server';

import { generateText } from 'ai';
import { geminiModel } from '@/lib/ai';

function getLangInstruction(lang: string): string {
    if (lang === 'te') {
        return '\n\nIMPORTANT: Respond ENTIRELY in Telugu (తెలుగు) script. Use Telugu language for all explanations, headings, and content. Keep technical terms in English within parentheses where helpful, e.g., "విద్యుత్ ప్రవాహం (Electric Current)".';
    }
    return '';
}

export async function explainTopic(
    topic: string,
    simplify: boolean = false,
    subject?: string,
    chapter?: string,
    book?: string,
    lang: string = 'en'
) {
    const ncertContext = subject && chapter
        ? `You are explaining from the NCERT ${book || subject} textbook, Chapter: "${chapter}".`
        : '';

    const prompt = `You are an expert CBSE Grade 10 teacher.
${ncertContext}
Explain the topic "${topic}" clearly and concisely.
${simplify ? 'Explain it like I am 5 years old, using simple analogies and very simple language.' : 'Provide a standard Grade 10 level explanation suitable for board exam preparation.'}

Structure the response with these sections:
## Definition
A clear, concise definition.

## Key Concepts
Bullet points of the most important ideas.

## How It Works
Step-by-step explanation or mechanism.

## Real-world Example
A relatable example students can visualize.

## Board Exam Tips
- Important points frequently asked in CBSE board exams
- Common mistakes to avoid

Format using Markdown with proper headings and bullet points.${getLangInstruction(lang)}`;

    const { text } = await generateText({
        model: geminiModel,
        prompt: prompt,
    });

    return text;
}

export async function generateQuiz(
    topic: string,
    subject?: string,
    chapter?: string,
    lang: string = 'en'
) {
    const ncertContext = subject && chapter
        ? `The questions should be based on NCERT ${subject} textbook, Chapter: "${chapter}".`
        : '';

    const langNote = lang === 'te'
        ? '\nIMPORTANT: Write all questions, options, answers, and explanations in Telugu (తెలుగు). Keep technical/scientific terms in English within parentheses where helpful.'
        : '';

    const prompt = `Generate a 5-question multiple choice quiz for CBSE Grade 10 students on the topic "${topic}".
${ncertContext}
The questions should be at board exam level difficulty. Include a mix of conceptual, application-based, and factual questions.

Return ONLY a JSON array of objects. Each object should have:
- question (string)
- options (array of 4 strings)
- answer (string, the correct option text)
- explanation (string, why this is correct, referencing NCERT content where possible)

Do not include markdown code blocks (like \`\`\`json). Just the raw JSON.${langNote}`;

    const { text } = await generateText({
        model: geminiModel,
        prompt: prompt,
    });

    try {
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedText);
    } catch (e) {
        console.error("Failed to parse quiz JSON", e);
        return [];
    }
}

export async function generateRevisionNotes(
    chapter: string,
    subject: string,
    book?: string,
    lang: string = 'en'
) {
    const prompt = `Create concise revision notes for CBSE Grade 10 students.
Subject: ${subject}
Book: ${book || subject}
Chapter: "${chapter}"

The notes should be based on the NCERT textbook and follow this format:

## Quick Revision Notes: ${chapter}

### Key Points
- Bullet-point summary of every important concept (aim for 10-15 points)

### Important Formulas / Definitions
- List all formulas, laws, or key definitions from this chapter

### Diagrams to Remember
- Describe key diagrams students should practice drawing

### Previous Year Questions Pattern
- Types of questions typically asked from this chapter
- Mark weightage hints

### One-Liner Recap
- Ultra-short one-line summary for last-minute revision

Format using Markdown with proper headings and bullet points.${getLangInstruction(lang)}`;

    const { text } = await generateText({
        model: geminiModel,
        prompt: prompt,
    });

    return text;
}

export async function generateImportantQuestions(
    chapter: string,
    subject: string,
    book?: string,
    lang: string = 'en'
) {
    const prompt = `Generate the most important questions for CBSE Grade 10 board exam preparation.
Subject: ${subject}
Book: ${book || subject}
Chapter: "${chapter}"

Based on NCERT content and previous year papers, provide:

## Important Questions: ${chapter}

### 1-Mark Questions (Very Short Answer)
- 3 questions with brief answers

### 2-Mark Questions (Short Answer)
- 3 questions with concise answers

### 3-Mark Questions (Short Answer II)
- 3 questions with detailed answers

### 5-Mark Questions (Long Answer)
- 2 questions with comprehensive answers

For each question, provide a model answer that follows the CBSE marking scheme.
Format using Markdown.${getLangInstruction(lang)}`;

    const { text } = await generateText({
        model: geminiModel,
        prompt: prompt,
    });

    return text;
}
