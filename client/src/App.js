import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Home from "./Pages/Home";
import Navigation from "./components/shared/Navigation/Navigation";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
