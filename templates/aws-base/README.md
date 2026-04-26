# aws-base

A minimal **Terraform** scaffolding template for AWS projects, with a Dev Container pre-configured with Terraform and the AWS CLI.

## Quick Start

```bash
# Copy and populate your AWS credentials
cp .env.example .env
# Fill in AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in .env

# Initialise Terraform
cd infra
terraform init

# Preview changes
terraform plan

# Apply changes
terraform apply
```

> **Security note:** Never commit real AWS credentials. Use `.env` (which is git-ignored) or [AWS SSO / OIDC](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html) instead.

## Dev Container

Open this folder in VS Code and select **"Reopen in Container"** to get Terraform and the AWS CLI pre-installed.

## Remote State (recommended for teams)

Uncomment the `backend "s3"` block in `infra/main.tf` and supply a pre-created S3 bucket and DynamoDB table for state locking.

## Project Structure

```
aws-base/
├── .devcontainer/
│   └── devcontainer.json   # Dev Container with Terraform + AWS CLI
├── infra/
│   ├── main.tf             # Provider & backend config
│   ├── variables.tf        # Input variables
│   └── outputs.tf          # Output values
├── .env.example
└── README.md
```

## Extending

- Add resource files (e.g., `infra/vpc.tf`, `infra/ecs.tf`) for your infrastructure.
- Use [Terraform modules](https://registry.terraform.io/) for reusable components.
- For CDK users, swap the `infra/` folder for a CDK app (TypeScript or Python).
