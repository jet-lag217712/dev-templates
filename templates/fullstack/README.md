# fullstack

A minimal full-stack template combining **FastAPI** (Python backend), **React + Vite** (frontend), and **PostgreSQL** — all orchestrated with Docker Compose.

## Quick Start

```bash
# Copy environment variables
cp .env.example .env

# Start all services (db, api, web)
docker compose up
```

| Service  | URL                          |
|----------|------------------------------|
| Frontend | <http://localhost:5173>      |
| API      | <http://localhost:8000>      |
| API Docs | <http://localhost:8000/docs> |
| Database | `localhost:5432`             |

## Dev Container

Open this folder in VS Code and select **"Reopen in Container"** to get a unified Python + Node.js development environment connected to all services.

## Running Tests

**Backend**
```bash
cd backend && pytest app/tests/
```

**Frontend**
```bash
cd frontend && npm test
```

## Project Structure

```
fullstack/
├── .devcontainer/           # Dev Container config (VS Code)
│   ├── devcontainer.json
│   └── Dockerfile
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI entry point
│   │   └── tests/
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.test.jsx
│   │   ├── main.jsx
│   │   └── setupTests.js
│   ├── index.html
│   ├── vite.config.js
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── .env.example
└── README.md
```

## Extending

- Add backend routes under `backend/app/routers/`.
- Manage database migrations with [Alembic](https://alembic.sqlalchemy.org/).
- Add frontend components under `frontend/src/components/`.
