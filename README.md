# Users Directory

A responsive React application that fetches and displays user information from the JSONPlaceholder API. Users can browse profiles, search by name, filter by city and company, and view detailed information about each user.

## Live Demo

Coming soon.

## Features

- **User Listing:** Fetches and displays users from the JSONPlaceholder API.
- **Responsive Design:** Adapts to desktop, tablet, and mobile screens.
- **Search:** Search users by their names.
- **Filtering:** Filter users by city and company.
- **Combined Filters:** Apply search and multiple filters simultaneously.
- **User Details:** View detailed information about each user on a separate page.
- **Loading State:** Displays a loading message while fetching data.
- **Error Handling:** Displays an error message if a request fails.
- **Retry Functionality:** Allows users to retry failed requests.
- **Empty State:** Shows a helpful message when no users match the search or filters.
- **Clear Filters:** Reset all active search and filter options.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- CSS3
- Fetch API
- JSONPlaceholder API
- ESLint

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/malakdaraghmeh/users-directory.git
   ```

2. Navigate to the project directory:

   ```bash
   cd users-directory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## API Integration

The application uses the [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users) to retrieve user data.

- **Users List:** `GET https://jsonplaceholder.typicode.com/users`
- **User Details:** `GET https://jsonplaceholder.typicode.com/users/:id`

API requests are handled through a separate service layer using the native Fetch API.

## Project Structure

```text
src/
├── components/
│   └── UserCard/
│       ├── UserCard.jsx
│       └── UserCard.css
├── hooks/
│   ├── useUsers.js
│   └── useUser.js
├── pages/
│   ├── UsersPage/
│   │   ├── UsersPage.jsx
│   │   └── UsersPage.css
│   └── UserDetailsPage/
│       ├── UserDetailsPage.jsx
│       └── UserDetailsPage.css
├── services/
│   └── userService.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Design & Development Decisions

- **Plain CSS:** Used regular CSS instead of a UI framework to maintain control over styling and responsiveness.
- **Reusable Components:** Separated user cards into reusable components.
- **Custom Hooks:** Used custom hooks to manage data fetching and related states.
- **Service Layer:** Kept API requests separate from UI components.
- **React Router:** Used dynamic routes to display individual user details.
- **Fetch API:** Used the native Fetch API without adding an extra HTTP library.
- **AbortController:** Used request cancellation to prevent unnecessary updates when components unmount or requests change.
- **Error Handling:** Added retry options to improve the user experience when requests fail.

## AI Usage Disclosure

AI tools were used as development assistance for planning, code suggestions, debugging, and improving the project structure. The generated suggestions were reviewed, adapted, and tested during development.

## Future Improvements

- Add pagination for larger user lists.
- Add sorting options.
- Improve accessibility.
- Add unit and integration tests.
- Enhance the user interface with additional profile information.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the application for production. |
| `npm run lint` | Runs ESLint to check code quality. |
| `npm run preview` | Previews the production build locally. |

---

Developed as a React Front-End project.