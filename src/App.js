import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import { ViewProduct } from "./components/viewproduct/ViewProduct";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Card />} />
        <Route path="/viewproduct/:id" element={<ViewProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
