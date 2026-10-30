
import { Link, useParams } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import './UserDetailsPage.css';

function UserDetailsPage() {
  const { id } = useParams();
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <main className="container main-content">
        <p className="status-message">Loading user details...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container main-content">
        <p className="status-message error-message">{error}</p>
        <Link to="/" className="back-link">Back to Users</Link>
      </main>
    );
  }

  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return (
      <main className="container main-content">
        <div className="details-not-found">
          <h2>User Not Found</h2>
          <p>Sorry, we couldn't find this user.</p>
          <Link to="/" className="back-link">Back to Users</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container main-content">
      <Link to="/" className="back-link">
        ← Back to Users
      </Link>

      <section className="details-heading">
        <span className="eyebrow">USER PROFILE</span>
        <h1>{user.name}</h1>
        <p>User ID: {user.id}</p>
      </section>

      <section className="details-section">
        <div className="details-card">
          <h2>Personal Information</h2>

          <div className="details-item">
            <span>Username</span>
            <strong>{user.username}</strong>
          </div>

          <div className="details-item">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="details-item">
            <span>Phone</span>
            <strong>{user.phone}</strong>
          </div>

          <div className="details-item">
            <span>Website</span>
            <strong>{user.website}</strong>
          </div>
        </div>

        <div className="details-card">
          <h2>Address</h2>

          <div className="details-item">
            <span>Street</span>
            <strong>{user.address.street}</strong>
          </div>

          <div className="details-item">
            <span>Suite</span>
            <strong>{user.address.suite}</strong>
          </div>

          <div className="details-item">
            <span>City</span>
            <strong>{user.address.city}</strong>
          </div>

          <div className="details-item">
            <span>Zipcode</span>
            <strong>{user.address.zipcode}</strong>
          </div>
        </div>

        <div className="details-card">
          <h2>Company Information</h2>

          <div className="details-item">
            <span>Company</span>
            <strong>{user.company.name}</strong>
          </div>

          <div className="details-item">
            <span>Catch Phrase</span>
            <strong>{user.company.catchPhrase}</strong>
          </div>

          <div className="details-item">
            <span>Business</span>
            <strong>{user.company.bs}</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserDetailsPage;
