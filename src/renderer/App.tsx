import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ImStatsBars } from "react-icons/im";
import Button from "../components/Button";

import './App.css';

function Hello() {
  return (
    <div>
      <Button icon={<ImStatsBars />} className="stats-button" text="Stats" />
      <div style={{ paddingRight: "10px" }}></div>
      <Button
        icon={<ImStatsBars />}
        text="Stats"
        style={{
          paddingTop: "1em",
          paddingBottom: "1em",
          paddingRight: "1.5em",
          paddingLeft: "1.5em",
          backgroundColor: "#000",
          color: "#0ff",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
