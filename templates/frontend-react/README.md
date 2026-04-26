# frontend-react

A minimal **React + Vite** frontend template with Docker support and a Dev Container configuration.

## Quick Start

```bash
# Copy environment variables
cp .env.example .env

# Start the dev server
docker compose up
```

The app will be available at <http://localhost:5173>.

## Dev Container

Open this folder in VS Code and select **"Reopen in Container"** to get a fully configured Node.js development environment.

## Running Tests

```bash
# Inside the container or with a local Node.js installation:
npm test
```

## Linting

```bash
npm run lint
```

## Project Structure

```
frontend-react/
├── .devcontainer/        # Dev Container config (VS Code)
│   ├── devcontainer.json
│   └── Dockerfile
├── public/               # Static assets
├── src/
│   ├── App.jsx           # Root component
│   ├── App.test.jsx      # Component tests
│   ├── main.jsx          # Entry point
│   └── setupTests.js     # Vitest setup
├── index.html
├── vite.config.js
├── package.json
├── docker-compose.yml
├── .env.example
└── README.md
```

## Extending

- Add new components under `src/components/`.
- Use `VITE_API_URL` from `.env` to point the app at a backend.
