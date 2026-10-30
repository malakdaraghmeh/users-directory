
import { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import UserCard from '../../components/UserCard/UserCard';
import './UsersPage.css';

function UsersPage() {
  const { users, loading, error } = useUsers();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const cities = [...new Set(users.map((user) => user.address.city))].sort();

  const companies = [
    ...new Set(users.map((user) => user.company.name)),
  ].sort();

  const filteredUsers = users.filter((user) => {
    const matchesName = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCity =
      !selectedCity || user.address.city === selectedCity;

    const matchesCompany =
      !selectedCompany || user.company.name === selectedCompany;

    return matchesName && matchesCity && matchesCompany;
  });

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
          <div>
            <h2>All Users ({filteredUsers.length})</h2>
          </div>

          <div className="users-filters">
            <input
              type="text"
              className="search-input"
              placeholder="Search users by name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <select
              className="filter-select"
              value={selectedCity}
              onChange={(event) => setSelectedCity(event.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select
              className="filter-select"
              value={selectedCompany}
              onChange={(event) => setSelectedCompany(event.target.value)}
            >
              <option value="">All Companies</option>
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredUsers.length > 0 ? (
          <div className="users-grid">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <p className="status-message">
            No users found matching your filters.
          </p>
        )}
      </section>
    </main>
  );
}

export default UsersPage;
