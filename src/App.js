import './App.css';
import { BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";
import Layout from "./components/Layout"
import Explore from "./components/Explore"
import Snacks from "./components/Snacks"
import Drinks from "./components/Drinks"
import Grocery from "./components/Grocery"

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Explore</Link> |{" "}
          <Link to="Drinks">Drinks</Link> |{" "}
          <Link to="Snacks">Snacks</Link> |{" "}
          <Link to="Grocery">Grocery</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Explore />} />
            <Route path="Drinks" element={<Drinks />} />
            <Route path="Snacks" element={<Snacks />} />
            <Route path="Grocery" element={<Grocery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
