# dev-templates

> A collection of production-quality, reusable development templates.  
> Spin up a new project in seconds with a single `gh repo create` command.

## Available Templates

| Template | Stack | Description |
|----------|-------|-------------|
| [`backend-python`](templates/backend-python/) | FastAPI · Python 3.12 | REST API backend with tests |
| [`frontend-react`](templates/frontend-react/) | React 18 · Vite · Node 20 | SPA frontend with lint & tests |
| [`fullstack`](templates/fullstack/) | FastAPI + React + PostgreSQL | Full-stack app with Docker Compose |
| [`aws-base`](templates/aws-base/) | Terraform · AWS CLI | Infrastructure-as-code scaffold |

## Getting Started

Each template is self-contained. Pick the one closest to your use case and copy it:

```bash
# Using the GitHub CLI template feature
gh repo create my-new-project --template jet-lag217712/dev-templates

# Or clone and copy a specific template
git clone https://github.com/jet-lag217712/dev-templates.git
cp -r dev-templates/templates/backend-python my-new-project
cd my-new-project
cp .env.example .env
docker compose up
```

## Template Details

### `backend-python`
- **FastAPI** application with `/health` endpoint and async tests (pytest + httpx)
- Dockerfile + Docker Compose for one-command startup
- Dev Container for VS Code (Python + Pylance + Black)

### `frontend-react`
- **React 18 + Vite** SPA with ESLint and Vitest
- Dockerfile + Docker Compose
- Dev Container for VS Code (ESLint + Prettier)

### `fullstack`
- **FastAPI** backend + **React/Vite** frontend + **PostgreSQL** database
- Single `docker compose up` starts all three services
- Vite dev-server proxies `/api` → backend (no CORS issues in dev)
- Dev Container with Python + Node.js + DB client

### `aws-base`
- **Terraform** scaffold with provider, variables, and outputs
- Dev Container pre-installed with Terraform and the AWS CLI
- Remote state backend stub (S3 + DynamoDB)

## Shared Resources

The [`shared/`](shared/) directory contains reusable configs you can drop into any project:

- `.editorconfig` — consistent editor settings across languages
- `.gitignore` — sensible defaults for Python, Node, Terraform, and IDEs

## Repository Layout

```
dev-templates/
├── .github/
│   └── workflows/
│       ├── ci-backend.yml      # Build + test backend-python
│       ├── ci-frontend.yml     # Lint + test frontend-react
│       └── ci-fullstack.yml    # Test both + docker compose build
├── templates/
│   ├── backend-python/
│   ├── frontend-react/
│   ├── fullstack/
│   └── aws-base/
├── shared/
│   ├── .editorconfig
│   └── .gitignore
└── README.md
```

## Design Principles

- **Minimal** — no unnecessary dependencies or boilerplate
- **Reproducible** — Docker + Dev Containers ensure identical environments
- **Portable** — every template runs with `docker compose up`, no local tooling required
- **Extensible** — placeholder structure makes it easy to grow without rewrites
