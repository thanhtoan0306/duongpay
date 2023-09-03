// import './App.css';
// import Nav from "./compopnent/Nav";
import Nav from "./compopnent/Nav";
import HomePage from "./container/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components for different routes
// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;
// const NotFound = () => <h1>404 Not Found</h1>;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Nav /> */}
        {/* Routes */}
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="blogs" element={<HomePage />} />
            <Route path="contact" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        {/* <HomePage /> */}
      </header>
    </div>
  );
}

export default App;
