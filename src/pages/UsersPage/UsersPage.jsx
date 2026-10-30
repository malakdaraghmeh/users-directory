
import { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import UserCard from '../../components/UserCard/UserCard';
import './UsersPage.css';

function UsersPage() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <main className="container main-content">
        <p className="status-message">Loading users...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container main-content">
        <p className="status-message error-message">{error}</p>
      </main>
    );
  }

  return (
    <main className="container main-content">
      <section className="page-heading">
        <span className="eyebrow">USER MANAGEMENT</span>
        <h1>Explore Users</h1>
        <p>
          Browse, search, and discover user information all in one place.
        </p>
      </section>

      <section className="users-section">
        <div className="users-toolbar">
          <h2>All Users ({filteredUsers.length})</h2>

          <input
            type="text"
            className="search-input"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        {filteredUsers.length > 0 ? (
          <div className="users-grid">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <p className="status-message">
            No users found matching "{searchTerm}".
          </p>
        )}
      </section>
    </main>
  );
}

export default UsersPage;
