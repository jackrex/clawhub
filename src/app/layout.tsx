import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "技栈阁 — AI Agent 技能市场",
  description: "上传 AgentSkills 技能包，像 npm 一样管理版本，通过向量搜索让每个技能触手可及。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('clawhub-theme');document.documentElement.setAttribute('data-theme',t==='nordic'?'nordic':'ink');})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="ink-wash" aria-hidden />
          <div className="mountain-bg" aria-hidden />
          <div className="nordic-bg" aria-hidden />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1, paddingTop: 64, minHeight: "100vh" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
