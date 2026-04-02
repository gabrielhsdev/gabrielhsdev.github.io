export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Gabriel HS</h1>
        <p>Frontend Engineer • React • TypeScript</p>
      </header>

      <section className="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Project One</h3>
          <p>Short description of what you built.</p>
        </div>

        <div className="card">
          <h3>Project Two</h3>
          <p>Another project description.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gabriel HS</p>
      </footer>
    </div>
  );
}