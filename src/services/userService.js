
const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers(signal) {
  const response = await fetch(USERS_API_URL, {
    signal,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch users. Please try again.');
  }

  const data = await response.json();

  return data;
}

// Fetch a single user by ID
export async function fetchUserById(id, signal) {
  const response = await fetch(`${USERS_API_URL}/${id}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user details. Please try again.');
  }

  const user = await response.json();

  if (!user || !user.id) {
    throw new Error('User not found.');
  }

  return user;
}
