export const metadata = {
  title: "Skills | DevOps Portfolio",
  description: "Cloud, Kubernetes, CI/CD, IaC, Observability, Security.",
};

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-5 bg-gradient-to-br from-emerald-500/10 to-transparent">
          <h2 className="font-semibold">Cloud Platforms</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">AWS, GCP, Azure</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Core: IAM, VPC, EC2, S3, EKS/ECS, CloudWatch, Route 53, ELB/ALB, Lambda, DynamoDB</p>
        </div>
      <div className="pt-4">
        <h2 className="text-2xl font-semibold">Complete Skill Lists</h2>
      </div>

      <section className="rounded-lg border p-5 bg-gradient-to-br from-emerald-500/10 to-transparent">
        <h3 className="text-xl font-semibold">1️⃣ DevOps – Complete Skill List</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-medium">Core OS & Networking</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Linux (process, systemd, permissions, logs, networking)</li>
              <li>TCP/IP, DNS, HTTP/HTTPS, Load Balancing</li>
              <li>Bash / Shell scripting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Programming & Scripting</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Python</li>
              <li>Bash</li>
              <li>(Optional) Go, Node.js</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Version Control</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Git (branching, rebase, hooks)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">CI/CD</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Jenkins</li>
              <li>GitHub Actions</li>
              <li>GitLab CI</li>
              <li>Azure DevOps Pipelines</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Containers & Orchestration</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Docker, Docker Compose</li>
              <li>Kubernetes (EKS, AKS, GKE)</li>
              <li>Helm, Kustomize</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Infrastructure as Code (IaC)</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Terraform</li>
              <li>AWS CloudFormation</li>
              <li>Pulumi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Cloud Platforms</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>AWS (EC2, VPC, IAM, S3, RDS, ALB, ASG, EKS)</li>
              <li>Azure / GCP (basic understanding)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Configuration Management</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Ansible</li>
              <li>Chef / Puppet (optional)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Monitoring & Observability</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Prometheus, Grafana</li>
              <li>Loki, Tempo, Mimir</li>
              <li>ELK / OpenSearch</li>
              <li>New Relic, Datadog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Artifact & Package Management</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Nexus, Artifactory</li>
              <li>ECR, Docker Hub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">SRE Concepts</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>SLIs, SLOs, SLAs</li>
              <li>Incident Management, Root Cause Analysis</li>
              <li>On-call, alerting strategies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border p-5 bg-gradient-to-br from-rose-500/10 to-transparent">
        <h3 className="text-xl font-semibold">2️⃣ DevSecOps – Complete Skill List</h3>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">DevSecOps = DevOps + Security deeply integrated</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-medium">Application Security</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>SAST – SonarQube, Checkmarx</li>
              <li>DAST – OWASP ZAP, Burp Suite</li>
              <li>SCA – Snyk, Trivy, Dependabot</li>
              <li>Secrets scanning – GitGuardian, TruffleHog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Container & K8s Security</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Image scanning (Trivy, Clair, Anchore)</li>
              <li>Pod Security Standards, Network Policies</li>
              <li>RBAC hardening</li>
              <li>Admission Controllers (OPA, Kyverno)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">CI/CD Security</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Secure pipelines, secrets management</li>
              <li>Artifact signing (Cosign, Notary)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Cloud Security</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>IAM best practices, KMS, Encryption (at rest & in transit)</li>
              <li>VPC security, Security Groups, NACLs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Infrastructure Security</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Terraform security scanning (Checkov, tfsec)</li>
              <li>Policy as Code (OPA)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Compliance & Governance</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>ISO 27001, SOC2, PCI-DSS</li>
              <li>HIPAA (conceptual)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border p-5 bg-gradient-to-br from-indigo-500/10 to-transparent">
        <h3 className="text-xl font-semibold">3️⃣ Cyber Security – Complete Skill List</h3>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">This is broader and deeper than DevSecOps.</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-medium">Networking Fundamentals</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>TCP/IP, UDP; DNS, DHCP</li>
              <li>Firewalls, NAT; VPN, IPSec, SSL</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Operating Systems Security</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Linux hardening, Windows security</li>
              <li>Active Directory, Group Policies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Security Domains</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Network, Endpoint, Application, Cloud, Identity Security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Threats & Attacks</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Malware, ransomware; Phishing; DDoS; MITM</li>
              <li>SQL Injection, XSS, CSRF</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Security Tools</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>SIEM: Splunk, QRadar</li>
              <li>IDS/IPS: Snort, Suricata</li>
              <li>EDR: CrowdStrike, SentinelOne</li>
              <li>Firewalls: Palo Alto, Fortinet, Checkpoint</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Vulnerability Management</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Nessus, Qualys, OpenVAS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Penetration Testing</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Metasploit, Burp Suite, Nmap, Nikto</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Incident Response</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Detection, Containment, Eradication, Recovery</li>
              <li>Forensics basics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Compliance & GRC</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Risk assessment, Policies, Audits</li>
              <li>GDPR, ISO, SOC</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border p-5 bg-gradient-to-br from-amber-400/15 to-transparent">
        <h3 className="text-xl font-semibold">4️⃣ AWS Security & Networking – Complete Skill List</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-medium">AWS Networking</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>VPC design; Subnets (public/private); Route Tables</li>
              <li>IGW, NAT Gateway; VPC Peering; Transit Gateway</li>
              <li>VPN, Direct Connect; ALB, NLB; Route 53 (failover, latency)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">AWS Security</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>IAM (Users, Roles, Policies, STS); Organizations; SCP</li>
              <li>AWS Config, CloudTrail, GuardDuty, Security Hub</li>
              <li>Inspector, Macie, KMS, Secrets Manager, Parameter Store</li>
              <li>WAF, Shield</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Network Security in AWS</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Security Groups, NACLs, WAF rules</li>
              <li>PrivateLink, Endpoint policies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Zero Trust & Architecture</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Least privilege, Network segmentation</li>
              <li>Multi-account strategy</li>
            </ul>
          </div>
        </div>
      </section>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-sky-500/10 to-transparent">
          <h2 className="font-semibold">Containers & Orchestration</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Docker, Kubernetes, EKS, GKE, Helm, Kustomize, Rancher</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-fuchsia-500/10 to-transparent">
          <h2 className="font-semibold">CI/CD</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Jenkins, GitHub Actions, ArgoCD; strategies: blue/green, canary, rollback</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-rose-500/10 to-transparent">
          <h2 className="font-semibold">Infrastructure as Code</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Terraform, CloudFormation; modules, workspaces, policy as code</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-amber-400/15 to-transparent">
          <h2 className="font-semibold">Observability</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">ELK/OpenSearch, Prometheus, Grafana, CloudWatch, Alerts, SLOs, MTTR reduction</p>
        </div>
        <div className="rounded-lg border p-5 bg-gradient-to-br from-indigo-500/10 to-transparent">
          <h2 className="font-semibold">Security & Scripting</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">DevSecOps, IAM hardening, patching, secrets mgmt; Python, Shell</p>
        </div>
      </div>
    </div>
  );
}
