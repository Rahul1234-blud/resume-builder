import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Builder from "./pages/Builder";
import Contact from "./pages/Contact";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/templates"
          element={<Templates />}
        />

        <Route
          path="/builder"
          element={<Builder />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;