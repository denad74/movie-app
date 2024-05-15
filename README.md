#### Movie App

This is a React-based movie app that allows users to browse and search for movies and tv shows.

## Installation

clone this code from github https://github.com/denad74/movie-app
To install the dependencies:
In terminal navigate to the root directory of your "movie-app" and run: project.npm install

### Prerequisites !!!

Before running this application, you need to obtain an API key from [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) to access their API. Follow the steps below to get your API key:

1. Sign up for a free account on [TMDb](https://www.themoviedb.org/signup).
2. After logging in, go to your [account settings](https://www.themoviedb.org/settings/api) and navigate to the "API" section.
3. Click on "Request an API Key" and follow the instructions to generate your API key.
4. Copy your API key.

### Usage

Once you have obtained your API key, you can use it in this application as follows:

1. Create a `.env` file in the root directory of this project if it doesn't exist.
2. Add your TMDb API key to the `.env` file:

   REACT_APP_TMDB_API_KEY=your_api_key_here

   Replace `your_api_key_here` with your actual TMDb API key.

3. Save the `.env` file.

Start app

To start the development server, run: npm start and
open http://localhost:3000 to view it in the browser.

### Build app

### Prerequisites !!!

Make sure you have set up your environment variables as described above.

In terminal navigate to the root directory of your "movie-app" and run: npm build

This will execute the build script defined in your package.json file, which in turn runs react-scripts build. This command creates a production build of your React application in a build directory within your project.
You can then deploy the contents of the build directory to your web server or hosting platform of choice to make your application available to users.

### Test app

To run test in terminal run npm test or npm test [component relative path]

deployed on https://movie-app-peach-phi.vercel.app/
