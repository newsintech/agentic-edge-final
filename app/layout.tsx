import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgenticEdge",
  description:
    "AGI-grade intelligence for AI hardware, local compute, and privacy-first decision making.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Core content container */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10">
            {children}
          </main>

          {/* Global Footer (Minimal, Sovereign) */}
          <footer className="border-t border-borderSoft mt-16 py-8 text-xs text-textMuted text-center">
            AgenticEdge operates without ads, trackers, or behavioral profiling.
            <br />
            Intelligence over persuasion. Privacy by default.
          </footer>
        </div>
      </body>
    </html>
  );
}
