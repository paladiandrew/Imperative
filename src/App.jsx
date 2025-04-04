import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/meetings";
import Communities from "./pages/communities";
import About from "./pages/about";
import Books from "./pages/books";
import Contacts from "./pages/contacts";
import Header from "./components/header"; // Импортируем Header
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header /> {/* Подключаем Header */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/meetings" element={<Meetings />} />
                    <Route path="/communities" element={<Communities />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;