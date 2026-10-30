
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <a href="/" className="brand">
            <span className="brand-icon">UD</span>
            <span>User Directory</span>
          </a>
        </div>
      </header>

      <main className="container main-content">
        <section className="page-heading">
          <span className="eyebrow">USER MANAGEMENT</span>
          <h1>Explore Users</h1>
          <p>
            Browse, search, and discover user information
            all in one place.
          </p>
        </section>

        <section className="users-section">
          <div className="empty-placeholder">
            <h2>Your users will appear here</h2>
            <p>
              We are getting everything ready to display
              the user directory.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
