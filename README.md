# Movie Suggestion App

## Overview

**This project is a movie suggestion application built with React. It allows users to search for movies, view detailed information about selected movies, and get movie recommendations based on their watched list. The application uses the OMDb API to fetch movie data.**

## Features
### Implemented Features
- **Enhanced UI/UX**: Improved user interface with better styling and user experience using Tailwind CSS.
- **Pagination Buttons**: Added "Previous Page" and "Next Page" buttons for easier navigation through search results.
- **Reorganized Components**: Divided reusable components into smaller, more manageable files for better maintainability.
- **Box Element for Outputs**: Added a box element to display different outputs, such as search results and watched movies.
- **Detailed Movie Information**: Implemented functionality to use movie IDs from the first API call to fetch and display more detailed information.
- **Tailwind CSS Integration**: Utilized Tailwind CSS for easier and more consistent styling across the application.

### Upcoming Features
- **State Management for Pagination**: Implement state management to loop through all movies that match certain parameters using the API's pagination.
- **Remove Watched Movies**: Allow users to remove movies from their watched list.
- **Dynamic Movie Recommendations**: Re-generate the suggested movies list when the user adds or removes a movie.
- **Clear Code**: Refactor the code to ease the use and future updates.

### Future Enhancements
- **Movie Plot Details**: Allow users to select a suggested movie and read its plot.
- **Dynamic Recommendations**: Change the movie suggestions dynamically when the watched list is updated.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

## Usage

1. **Search for Movies**: Use the search bar to find movies. The results will be displayed in the first box element.
2. **View Movie Details**: Click on a movie to fetch and view more detailed information.
3. **Manage Watched Movies**: Add movies to your watched list by clicking on them. Future updates will allow you to remove movies and see dynamic recommendations.
