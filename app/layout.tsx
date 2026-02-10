import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CBSE Ace Grade 10 | AI-Powered NCERT Study Companion",
  description:
    "Master CBSE Grade 10 with AI-powered explanations, revision notes, quizzes, and important questions — all aligned with NCERT textbooks. Subjects: Mathematics, Science, Social Science, English, Hindi, Telugu.",
  keywords: "CBSE, Grade 10, NCERT, AI tutor, board exams, revision notes, quiz, mathematics, science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
