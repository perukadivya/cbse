import { google } from '@ai-sdk/google';

export const geminiModel = google('gemini-2.5-flash-lite');

// Fallback or specialized model configuration
// We can expand this to include Nvidia models if needed,
// but sticking to standard AI SDK for now.
