
import UsersPage from './pages/UsersPage/UsersPage';
import './App.css';

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

      <UsersPage />
    </div>
  );
}

export default App;
