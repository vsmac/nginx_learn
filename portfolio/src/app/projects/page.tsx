export const metadata = {
  title: "Projects | DevOps Portfolio",
  description: "Selected DevOps/Cloud case studies with business impact.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <div className="space-y-5">
        <div className="rounded-lg border p-5 bg-gradient-to-br from-emerald-500/10 to-transparent">
          <h2 className="text-lg font-semibold">Hybrid AWS + GCP Platform (iMerit)</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Secure VPC design, IAM hardening, Terraform + Ansible automation for EC2, S3, EKS/ECS, Kafka, Redis. Result: 45% stronger security posture, 35% lower cloud spend, 55% lower MTTR.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: AWS, GCP, Terraform, Ansible, Jenkins, Docker, Kubernetes, ECR, ELK, CloudWatch</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-sky-500/10 to-transparent">
          <h2 className="text-lg font-semibold">GitHub Actions Standardized CI/CD (Kuvera)</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Multi-stage pipelines with testing, security scans, and gated deployments. Standardized Helm/K8s rollouts. Result: 65% faster rollouts, 55% faster incident response, 18% cost savings.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: GitHub Actions, Helm, Kubernetes, ELK, Prometheus, Grafana</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-fuchsia-500/10 to-transparent">
          <h2 className="text-lg font-semibold">Multi-cloud Kubernetes with Terraform (EchoIndia)</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Provisioned EKS/GKE with Terraform, unified automation across environments, Kustomize/Helm for manifests. Result: 60% more consistent deployments, 35% higher uptime.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: AWS, GCP, Terraform, Jenkins, Kubernetes, Kustomize, Helm</p>
        </div>

        <div className="rounded-lg border p-5 bg-gradient-to-br from-rose-500/10 to-transparent">
          <h2 className="text-lg font-semibold">Secure CI/CD Pipelines & Supply Chain Hardening</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Implemented signed artifacts (Cosign), dependency scanning (Snyk/Trivy), and pre-deploy security gates. Result: 50% reduction in vulnerable releases; zero criticals reaching production.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: GitHub Actions, Jenkins, Trivy, Snyk, Cosign, OPA, Docker, Kubernetes</p>
        </div>

        <div className="rounded-lg border p-5 bg-gradient-to-br from-indigo-500/10 to-transparent">
          <h2 className="text-lg font-semibold">EKS Security Baseline & Network Policies</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Hardened clusters with RBAC, Pod Security Standards, and Calico policies; restricted east-west traffic and enforced namespace isolation. Result: 60% fewer lateral-movement risks.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: AWS EKS, IAM Roles for Service Accounts, Calico/NetworkPolicy, Kyverno/OPA</p>
        </div>

        <div className="rounded-lg border p-5 bg-gradient-to-br from-emerald-500/10 to-transparent">
          <h2 className="text-lg font-semibold">Observability Platform Unification</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Unified metrics, logs, and traces with Prometheus/Grafana and ELK/OpenSearch. Introduced SLO dashboards and alerting. Result: 55% MTTR reduction and improved on-call efficiency.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: Prometheus, Grafana, Alertmanager, ELK/OpenSearch, CloudWatch</p>
        </div>

        <div className="rounded-lg border p-5 bg-gradient-to-br from-amber-400/15 to-transparent">
          <h2 className="text-lg font-semibold">Disaster Recovery as Code</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Automated region failover with Terraform and runbooks; regular DR drills and RTO/RPO validation. Result: Achieved RTO of 30 minutes or less and RPO of 5 minutes or less for tier-1 services.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: Terraform, Route53 health checks, S3 cross-region, RDS snapshots, Runbooks</p>
        </div>

        <div className="rounded-lg border p-5 bg-gradient-to-br from-sky-500/10 to-transparent">
          <h2 className="text-lg font-semibold">Zero-Trust Multi-Account AWS Foundation</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Established AWS Organizations with SCPs, centralized audit/logging, and least-privilege IAM patterns. Result: 45% stronger security posture and safer developer autonomy.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: AWS Orgs, SCP, IAM, CloudTrail, Config, GuardDuty, Security Hub</p>
        </div>

        <div className="rounded-lg border p-5 bg-gradient-to-br from-fuchsia-500/10 to-transparent">
          <h2 className="text-lg font-semibold">GitOps with ArgoCD & Helm</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Standardized Kubernetes deployments with GitOps, promoting changes across dev→stage→prod via PRs and policies. Result: 65% faster rollouts with auditable change history.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: ArgoCD, Helm, Kustomize, Kubernetes, GitHub</p>
        </div>

        <div className="rounded-lg border p-5 bg-gradient-to-br from-rose-500/10 to-transparent">
          <h2 className="text-lg font-semibold">Secrets Management Revamp</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Migrated secrets to AWS Secrets Manager/Parameter Store with rotation and fine-grained IAM. Result: Eliminated plaintext secrets and reduced misconfig incidents by 50%.</p>
          <p className="mt-2 text-xs text-zinc-500">Stack: AWS Secrets Manager, Parameter Store, IAM, SSM, CI/CD integrations</p>
        </div>
      </div>
    </div>
  );
}
