# Movie Recommendations App

This is a Movie Recommendations web application built with Next.js, Tailwind CSS, and Weaviate. The app allows users to search, filter, and view detailed information about movies. It also includes pagination for easier navigation through the list of movies.

## Features

- **Search Movies**: Users can search for movies by title or description.
- **Filter by Genre**: Users can filter movies by genre.
- **Detailed Movie View**: Clicking on a movie displays a modal with detailed information.
- **Pagination**: The list of movies is paginated for easier navigation.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Weaviate**: An open-source vector search engine.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Docker**: Ensure you have Docker installed. You can download it from [here](https://www.docker.com/products/docker-desktop).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/chamallakshika09/movie-recommendation
   cd movie-recommendation
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start Weaviate**:
   Make sure Docker is running on your machine. Then, start Weaviate using Docker Compose:

   ```bash
   docker compose up -d
   ```

4. **Start the Next.js application**:

   ```bash
   npm run dev
   ```

### Usage

1.  Open your browser and navigate to `http://localhost:3000`.
2.  Use the search bar to search for movies by title or description.
3.  Use the dropdown menu to filter movies by genre.
4.  Click on a movie to view detailed information in a modal.
5.  Use the pagination controls to navigate through the list of movies.

### Project Structure

- /app: Contains the Next.js pages and layout.
- /components: Contains reusable React components.
- /context: Contains the React context for managing state.
- /data: Contains the initial movie data in JSON format.
- /types: Contains TypeScript type definitions.
- /utils: Contains utility functions for interacting with Weaviate.

### Context API

The app uses the React Context API to manage the search text, selected genre, selected movie, and pagination state.

### API Integration

The app interacts with Weaviate for data storage and retrieval. The following utility functions are used:

- getWeaviateClient: Initializes and returns the Weaviate client.
- initializeDB: Initializes the database schema and prepopulates it with initial data.
- fetchMovies: Fetches the list of movies from Weaviate.
