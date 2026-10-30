
import './UserCard.css';

function UserCard({ user }) {
  return (
    <article className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.company.name}</p>
    </article>
  );
}

export default UserCard;
