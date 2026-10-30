
import { useUsers } from '../../hooks/useUsers';
import './UsersPage.css';

function UsersPage() {
  const { users, loading, error } = useUsers();

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

  if (users.length === 0) {
    return (
      <main className="container main-content">
        <p className="status-message">No users found.</p>
      </main>
    );
  }

  return (
    <main className="container main-content">
      <section className="page-heading">
        <span className="eyebrow">USER MANAGEMENT</span>
        <h1>Explore Users</h1>
        <p>Browse, search, and discover user information all in one place.</p>
      </section>

      <section className="users-section">
        <h2>All Users ({users.length})</h2>

        <div className="users-grid">
          {users.map((user) => (
            <article className="user-card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
              <p>{user.company.name}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default UsersPage;
