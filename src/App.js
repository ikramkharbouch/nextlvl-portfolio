import "./App.css";
import "./styles/global.scss";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience.tsx";
import Menu from "./components/Menu.tsx";
import Projects from "./pages/Projects.tsx";
import ContactPage from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-layout">
          <div className="content">
            <Menu />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
