
import { Link } from 'react-router-dom';
import './UserCard.css';

function UserCard({ user }) {
  return (
    <article className="user-card">
      <h3>{user.name}</h3>

      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.company.name}</p>

      <Link to={`/users/${user.id}`} className="user-card-link">
        View Details
        <span aria-hidden="true"> →</span>
      </Link>
    </article>
  );
}

export default UserCard;
