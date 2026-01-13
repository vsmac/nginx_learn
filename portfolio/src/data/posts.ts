export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "kubernetes-cost-optimization",
    title: "Kubernetes Cost Optimization on AWS EKS",
    summary:
      "Practical strategies to reduce EKS spend: right-sizing, node pools, autoscaling, spot, and observability for chargeback.",
    date: "2025-11-10",
    tags: ["kubernetes", "aws", "eks", "cost"],
  },
  {
    slug: "terraform-modules-enterprise",
    title: "Designing Terraform Modules for Enterprise Scale",
    summary:
      "Module design patterns, versioning, testing, and multi-env promotion strategies for reliable infra delivery.",
    date: "2025-10-02",
    tags: ["terraform", "iac", "modules"],
  },
];
