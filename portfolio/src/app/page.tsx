import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl border p-8 shadow-sm bg-gradient-to-br from-fuchsia-500/15 via-sky-500/15 to-emerald-500/15">
        <h1 className="text-3xl font-bold tracking-tight">
          DevOps • DevSecOps • Cloud Engineer (8+ years)
        </h1>
        <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300">
          AWS, GCP, Azure • Kubernetes • Terraform/CloudFormation • CI/CD (Jenkins, GitHub Actions) • Observability (ELK, Prometheus, Grafana) • Security
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/projects" className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 text-white">
            View Projects
          </Link>
          <Link href="/blog" className="inline-flex items-center rounded-md border px-4 py-2 bg-gradient-to-r from-fuchsia-500/15 to-rose-500/15">
            Read Blog
          </Link>
          <Link href="/contact" className="inline-flex items-center rounded-md border px-4 py-2 bg-gradient-to-r from-amber-400/20 to-emerald-400/20">
            Contact
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-5 bg-gradient-to-br from-emerald-500/10 to-transparent">
          <h3 className="font-semibold">Cloud & IaC</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">AWS, GCP, Azure with Terraform and CloudFormation. Secure VPC design, IAM, cost optimization.</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-sky-500/10 to-transparent">
          <h3 className="font-semibold">Kubernetes & CI/CD</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">EKS/GKE, Helm/Kustomize, Docker. Jenkins and GitHub Actions with rollout and rollback strategies.</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-fuchsia-500/10 to-transparent">
          <h3 className="font-semibold">Observability & Security</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">ELK, Prometheus/Grafana, CloudWatch. Secrets management, patching, hardening, vulnerability reduction.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Recent Writing</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-between border-b pb-2"><Link href="/blog/kubernetes-cost-optimization" className="hover:underline">Kubernetes Cost Optimization on AWS EKS</Link><span className="text-zinc-500">Blog</span></li>
          <li className="flex items-center justify-between border-b pb-2"><Link href="/blog/terraform-modules-enterprise" className="hover:underline">Designing Terraform Modules for Enterprise Scale</Link><span className="text-zinc-500">Blog</span></li>
        </ul>
        <Link href="/blog" className="text-sm underline">All posts →</Link>
      </section>
    </div>
  );
}
