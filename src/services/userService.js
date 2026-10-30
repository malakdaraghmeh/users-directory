
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
