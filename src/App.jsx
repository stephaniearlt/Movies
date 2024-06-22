import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favorites" element={<UserList />} />
        <Route path="/error-404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error-404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
