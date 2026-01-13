import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevOps | DevSecOps | Cloud Engineer",
  description:
    "8+ years in AWS, GCP, Azure. Kubernetes, Terraform, CI/CD (Jenkins, GitHub Actions), Observability (ELK, Prometheus, Grafana), and Cloud Security.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "DevOps | DevSecOps | Cloud Engineer",
    description:
      "8+ years in AWS, GCP, Azure. Kubernetes, Terraform, CI/CD, Observability, Security.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100`}>
        <header className="border-b border-zinc-200/60 dark:border-zinc-800/80 bg-gradient-to-r from-fuchsia-500/10 via-sky-500/10 to-emerald-500/10">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold">DevOps Portfolio</a>
            <nav className="flex gap-4 text-sm">
              <a href="/about" className="hover:underline decoration-emerald-500">About</a>
              <a href="/skills" className="hover:underline decoration-sky-500">Skills</a>
              <a href="/projects" className="hover:underline decoration-fuchsia-500">Projects</a>
              <a href="/blog" className="hover:underline decoration-rose-500">Blog</a>
              <a href="/contact" className="hover:underline decoration-amber-500">Contact</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="border-t border-zinc-200/60 dark:border-zinc-800/80">
          <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-fuchsia-500" />
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} DevOps Portfolio · Delhi · vsoodles@gmail.com
          </div>
        </footer>
      </body>
    </html>
  );
}
