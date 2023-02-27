import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import BookCards from "./components/BookCards";

function App() {
  return (
    <div className="App">
      <Header />
      <BookCards />
    </div>
  );
}

export default App;
