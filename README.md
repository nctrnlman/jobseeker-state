<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Candidate Management API

This API allows you to manage candidate information.

## Base URL

`http://localhost:8001`

## Endpoints

### Get Candidates

- **URL:** `/candidates`
- **Method:** `GET`
- **Parameters:**
  - `page` (optional): Page number (default: 1)
  - `pageSize` (optional): Number of candidates per page (default: 5)
  - `search` (optional): Search term for filtering candidates
  - `gender` (optional): Gender for filtering candidates (M/F)
  - `experience` (optional): Years of experience for filtering candidates
- **Response:**
  - `data`: Array of candidates
  - `total`: Total number of candidates
  - `message`: Success message or error message

### Get Candidate by ID

- **URL:** `/candidates/:id`
- **Method:** `GET`
- **Parameters:**
  - `id`: Candidate ID
- **Response:**
  - `data`: Candidate information
  - `message`: Success message or error message

### Add Candidate

- **URL:** `/candidates`
- **Method:** `POST`
- **Body:**
  - `email`: Candidate email (required)
  - `phone_number`: Candidate phone number
  - `full_name`: Candidate full name (required)
  - `dob`: Candidate date of birth (required)
  - `pob`: Candidate place of birth
  - `gender`: Candidate gender (required)
  - `year_exp`: Years of experience (required)
  - `last_salary`: Last salary
- **Response:**
  - `data`: Result of the insertion
  - `message`: Success message or error message

### Update Candidate

- **URL:** `/candidates/:id`
- **Method:** `PUT`
- **Parameters:**
  - `id`: Candidate ID
- **Body:**
  - Same as the body for adding a candidate
- **Response:**
  - `message`: Success message or error message

### Delete Candidate

- **URL:** `/candidates/:id`
- **Method:** `DELETE`
- **Parameters:**
  - `id`: Candidate ID
- **Response:**
  - `message`: Success message or error message

## Usage

Make sure to replace `http://localhost:8001` with the appropriate base URL if your server is hosted elsewhere.

Feel free to customize this documentation based on your specific API and include more details if needed.
>>>>>>> 30cdb1059dd6f82301efb546a01c6529305caf00
