// JAVASCRIPT FILE ДОТОР HTML TAG БИЧСЭН

import Card from "./components/Card";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import "./styles/global.css";

// PROP(PRORERTY) PASSING

export default function App() {
  return (
    <div>
      <p>Hello React</p>
      <Header />
      <Highlight />
      <Cards />
    </div>
  );
}
