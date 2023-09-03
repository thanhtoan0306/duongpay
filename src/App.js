import Nav from "./compopnent/Nav";
import HomePage from "./container/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./container/ProjectsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="contact" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
