# backend-python

A minimal, production-ready **FastAPI** backend template with Docker support and a Dev Container configuration.

## Quick Start

```bash
# Copy environment variables
cp .env.example .env

# Start the service
docker compose up
```

The API will be available at <http://localhost:8000>.  
Interactive docs: <http://localhost:8000/docs>

## Dev Container

Open this folder in VS Code and select **"Reopen in Container"** to get a fully configured Python development environment.

## Running Tests

```bash
# Inside the container or with a local venv:
pytest app/tests/
```

## Project Structure

```
backend-python/
├── .devcontainer/        # Dev Container config (VS Code)
│   ├── devcontainer.json
│   └── Dockerfile
├── app/
│   ├── main.py           # FastAPI application entry point
│   └── tests/
│       └── test_main.py
├── docker-compose.yml
├── requirements.txt
├── .env.example
└── README.md
```

## Extending

- Add routes in `app/main.py` or create new router modules under `app/routers/`.
- Add a database by uncommenting the `DATABASE_URL` in `.env.example` and adding a `db` service to `docker-compose.yml`.
