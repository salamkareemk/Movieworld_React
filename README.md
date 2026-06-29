# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎬 MovieWorld - React Movie Database

A modern Movie Database web application built with **React**, **Vite**, and the **TMDB API**. Users can browse trending, popular, top-rated, and upcoming movies, search for movies, explore genres, and manage their favorite and watched movie collections.

---

## 📸 Features

- 🎬 Browse Trending Movies
- ⭐ Popular Movies
- 🏆 Top Rated Movies
- 📅 Upcoming Movies
- 🔍 Search Movies
- 🎭 Browse Movies by Genre
- ❤️ Add/Remove Favorites
- 👁 Mark Movies as Watched
- 🎥 Movie Details Page
- 🌟 Movie Ratings
- 📱 Fully Responsive Design
- ⚡ Fast Performance with Vite
- 💾 LocalStorage for Favorites & Watched Movies

---

## 🛠 Tech Stack

- React.js
- Vite
- React Router DOM
- TMDB API
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Hero/
│   ├── Navbar/
│   ├── Footer/
│   ├── MovieCard/
│   ├── MovieGrid/
│   ├── MovieSection/
│   ├── Loader/
│   └── SearchBar/
│
├── pages/
│   ├── Home.jsx
│   ├── Latest.jsx
│   ├── Genres.jsx
│   ├── Favorites.jsx
│   ├── Watched.jsx
│   └── MovieDetails.jsx
│
├── services/
│   └── tmdbApi.js
│
├── styles/
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/cinescope.git
```

Go into the project

```bash
cd cinescope
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
```

> Replace `YOUR_TMDB_API_KEY` with your TMDB API Key.

---

## 🌐 TMDB API

This project uses **The Movie Database (TMDB)** API.

https://developer.themoviedb.org/

---

## 📄 Available Pages

### 🏠 Home

- Hero Banner
- Trending Movies
- Popular Movies
- Top Rated Movies
- Upcoming Movies
- Search Movies

### 🎬 Latest

Displays the latest movies currently playing.

### 🎭 Genres

Browse movies by different genres.

### ❤️ Favorites

Shows all favorite movies saved in Local Storage.

### 👁 Watched

Displays all watched movies.

### 🎥 Movie Details

Shows

- Movie Poster
- Backdrop
- Overview
- Rating
- Release Date
- Runtime
- Genres

---

## 📷 Screenshots

Home Page

- Hero Banner
- Search
- Movie Sections

Movie Details

- Large Backdrop
- Movie Information

Genres

- Interactive Genre Selection
- Movie Grid

Favorites

- Saved Movies

Watched

- Watched Movie Collection

---

## 🎯 Future Improvements

- 🎬 Movie Trailers
- 🎭 Cast Information
- ⭐ User Ratings
- 🌙 Dark / Light Theme
- 🔥 Infinite Scrolling
- 🎥 Similar Movies
- 📺 TV Shows Support
- 📝 User Reviews
- 🔔 Toast Notifications
- ❤️ Backend Authentication

---

## 👨‍💻 Author

**Abdul Salam Kareem**

LinkedIn:
https://linkedin.com/in/your-linkedin

GitHub:
https://github.com/your-github

---

## 📜 License

This project is created for learning purposes and portfolio demonstration.

Movie data is provided by **The Movie Database (TMDB)**.