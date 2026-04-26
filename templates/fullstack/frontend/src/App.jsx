import { useState, useEffect } from "react";

function App() {
  const [apiStatus, setApiStatus] = useState("loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus("unreachable"));
  }, []);

  return (
    <main>
      <h1>Fullstack App</h1>
      <p>
        API status: <strong>{apiStatus}</strong>
      </p>
      <p>Edit <code>frontend/src/App.jsx</code> to get started.</p>
    </main>
  );
}

export default App;
