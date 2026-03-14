import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="zh-CN">
      <body>
        <div className="ink-wash" />
        <div className="mountain-bg" />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1, paddingTop: 64, minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
