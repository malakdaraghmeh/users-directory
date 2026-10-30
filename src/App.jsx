
import { Routes, Route, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage/UsersPage';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <Link to="/" className="brand">
            <span className="brand-icon">UD</span>
            <span>User Directory</span>
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
