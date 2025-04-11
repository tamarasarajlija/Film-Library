import React from "react";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
