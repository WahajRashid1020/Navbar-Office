import "./App.css";
import Leads from "./Components/Leads";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route>
            <Route path="/leads" element={<Leads />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
