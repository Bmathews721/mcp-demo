export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, color: '#333' }}>MCP Demo - Sandbox</h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          Sandbox environment for Anthropic reviewers
        </p>
      </header>

      <main>
        <section style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Quick Access</h2>

          <div style={{ display: 'grid', gap: '1rem' }}>
            <a
              href="/api/health"
              style={{
                padding: '1rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#333',
                display: 'block',
                border: '1px solid #ddd'
              }}
            >
              <strong>Health Check</strong>
              <br />
              <code style={{ fontSize: '0.9rem', color: '#666' }}>/api/health</code>
            </a>

            <a
              href="/api/data/users"
              style={{
                padding: '1rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#333',
                display: 'block',
                border: '1px solid #ddd'
              }}
            >
              <strong>Mock Users API</strong>
              <br />
              <code style={{ fontSize: '0.9rem', color: '#666' }}>/api/data/users</code>
            </a>

            <a
              href="/api/data/projects"
              style={{
                padding: '1rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#333',
                display: 'block',
                border: '1px solid #ddd'
              }}
            >
              <strong>Mock Projects API</strong>
              <br />
              <code style={{ fontSize: '0.9rem', color: '#666' }}>/api/data/projects</code>
            </a>

            <a
              href="/api/data/metrics"
              style={{
                padding: '1rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#333',
                display: 'block',
                border: '1px solid #ddd'
              }}
            >
              <strong>Mock Metrics API</strong>
              <br />
              <code style={{ fontSize: '0.9rem', color: '#666' }}>/api/data/metrics</code>
            </a>
          </div>
        </section>

        <section style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Resources</h2>

          <ul style={{ lineHeight: '1.8' }}>
            <li>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/Bmathews721/mcp-demo" target="_blank" rel="noopener noreferrer">
                Bmathews721/mcp-demo
              </a>
            </li>
            <li>
              <strong>Documentation:</strong> See README.md for full setup instructions
            </li>
            <li>
              <strong>Mock Data:</strong> Located in <code>/data</code> directory
            </li>
          </ul>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#fff3cd',
            borderRadius: '4px',
            border: '1px solid #ffc107',
            fontSize: '0.9rem'
          }}>
            <strong>⚠️ Sandbox Environment</strong>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
              This is a demo environment with mock data. All credentials are non-functional.
              Safe for testing and demonstration purposes only.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
