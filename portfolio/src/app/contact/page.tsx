import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
export const metadata = {
  title: "Contact | DevOps Portfolio",
  description: "Get in touch for roles in DevOps/DevSecOps/Cloud/SRE.",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Interested in discussing opportunities or collaborations? Reach out via email or connect on LinkedIn and GitHub.
      </p>
      <div className="space-y-3 text-sm">
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-emerald-600" />
          <span className="font-medium">Email:</span>
          <a className="underline" href="mailto:vsoodles@gmail.com">vsoodles@gmail.com</a>
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-sky-600" />
          <span className="font-medium">Phone:</span>
          <a className="underline" href="tel:+917011446845">+91 70114 46845</a>
        </p>
        <p className="flex items-center gap-2">
          <Linkedin className="h-4 w-4 text-blue-600" />
          <span className="font-medium">LinkedIn:</span>
          <a className="underline" href="https://www.linkedin.com/in/vishnu-gaur-1b019477/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vishnu-gaur-1b019477</a>
        </p>
        <p className="flex items-center gap-2">
          <Github className="h-4 w-4 text-zinc-800 dark:text-zinc-200" />
          <span className="font-medium">GitHub:</span>
          <a className="underline" href="https://github.com/vsmac" target="_blank" rel="noopener noreferrer">github.com/vsmac</a>
        </p>
      </div>
      <div>
        <a
          href="/Vishnu_Gaur_Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm bg-gradient-to-r from-emerald-500/15 to-sky-500/15"
        >
          <Download className="h-4 w-4" />
          Download Resume (PDF)
        </a>
        <p className="mt-2 text-xs text-zinc-500">Place your resume file at public/Vishnu_Gaur_Resume.pdf to enable download.</p>
      </div>
    </div>
  );
}
