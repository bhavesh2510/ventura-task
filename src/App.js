import logo from "./logo.svg";
import "./App.css";
import { IpoList } from "./components/ipo-list";
import { IpoDetails } from "./components/ipo-details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IpoList />} />
          <Route path="/details/:id" element={<IpoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
