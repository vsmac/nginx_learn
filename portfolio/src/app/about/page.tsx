import { Download } from "lucide-react";
export const metadata = {
  title: "About | DevOps Portfolio",
  description:
    "DevOps/DevSecOps/Cyber Security engineer with 8+ years across AWS, GCP, Azure; Kubernetes, Terraform, CI/CD, Observability.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <a
          href="/Vishnu_Gaur_Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm bg-gradient-to-r from-emerald-500/15 to-sky-500/15"
        >
          <Download className="h-4 w-4" />
          Download Resume (PDF)
        </a>
      </div>
      <section className="rounded-lg border p-5 bg-gradient-to-br from-emerald-500/10 to-transparent">
        <h2 className="text-xl font-semibold">Professional Summary</h2>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          DevOps/DevSecOps engineer with 8+ years delivering secure, scalable, and observable platforms across AWS, GCP, and Azure.
          I focus on production-grade Kubernetes (EKS/GKE), IaC with Terraform/CloudFormation, and CI/CD automation using Jenkins
          and GitHub Actions. My work emphasizes cost optimization, defense-in-depth, and measurable reliability (SLOs, MTTR).
        </p>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Recent impact includes 45% stronger cloud security posture, 35% lower cloud spend, and 55% lower MTTR via centralized
          observability (ELK/OpenSearch, Prometheus/Grafana), secure VPC/IAM patterns, and standardized pipelines.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-5 bg-gradient-to-br from-sky-500/10 to-transparent">
          <h2 className="font-semibold">Highlights</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Hybrid AWS/GCP architectures with secure VPC design and least-privilege IAM</li>
            <li>Terraform modules and Ansible for fully automated provisioning</li>
            <li>Jenkins/GitHub Actions pipelines with testing and safe rollbacks</li>
            <li>Kubernetes (EKS/GKE), Helm/Kustomize, Docker, and ECR image lifecycle</li>
            <li>Centralized logging and metrics with ELK, Prometheus, Grafana</li>
            <li>Cloud cost optimization and SRE practices to reduce MTTR</li>
          </ul>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-fuchsia-500/10 to-transparent">
          <h2 className="font-semibold">Core Skills</h2>
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium">Cloud & Networking</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                <li>AWS (VPC, IAM, EC2, S3, EKS, ALB/NLB, CloudWatch, Route53)</li>
                <li>GCP (GKE, IAM, Networking)</li>
                <li>Azure (AKS, IAM, Networking)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Containers & IaC</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Kubernetes (EKS/GKE), Docker</li>
                <li>Helm, Kustomize, ArgoCD</li>
                <li>Terraform, CloudFormation, Ansible</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">CI/CD & Automation</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Jenkins, GitHub Actions, GitLab CI</li>
                <li>Testing gates, rollbacks, progressive delivery</li>
                <li>Python, Bash</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Observability & Security</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Prometheus, Grafana; ELK/OpenSearch</li>
                <li>Secrets mgmt, RBAC hardening, patching</li>
                <li>Checkov/tfsec, OPA/Kyverno</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-rose-500/10 to-transparent">
          <h2 className="font-semibold">Certifications</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>AWS Certified Solutions Architect – Professional (SAP-C02)</li>
          </ul>
        </div>
      </div>

      <section className="rounded-lg border p-5 bg-gradient-to-br from-amber-400/15 to-transparent">
        <h2 className="text-xl font-semibold">Experience Snapshot</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li><span className="font-medium">iMerit (Sr. DevOps Engineer)</span>: Hybrid AWS+GCP, Terraform+Ansible, EKS/ECS, ELK; 45% security posture gain, 35% cost reduction.</li>
          <li><span className="font-medium">Kuvera (Sr. DevOps Engineer)</span>: GitHub Actions CI/CD, Helm, ELK/Prometheus; 65% faster rollouts, 55% faster incident response.</li>
          <li><span className="font-medium">EchoIndia (Sr. DevOps Engineer)</span>: EKS/GKE via Terraform, Kustomize/Helm; +60% deployment consistency, +35% uptime.</li>
          <li><span className="font-medium">Moglilabs (DevOps Engineer)</span>: Jenkins pipelines, security gates, containerized microservices; 65% faster delivery.</li>
          <li><span className="font-medium">Oodles (DevOps Engineer)</span>: Cloud + Linux ops, blockchain/microservices; 50% less downtime via proactive monitoring.</li>
        </ul>
      </section>
    </div>
  );
}
