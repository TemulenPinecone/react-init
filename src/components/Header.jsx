import "../styles/header.css";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://mgl.gogo.mn/newsn/v4/images/gogo-logo.345096b3.png"
        alt=""
        className="gogoIcon"
      />
      <Menu />
    </div>
  );
}
