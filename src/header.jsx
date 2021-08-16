import "./header.css";
export default function Header({ setRoute }) {
  const handleClick = (item) => {
    setRoute(item);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li onClick={() => handleClick("area")} className="nav-item">
            Area
          </li>
          <li onClick={() => handleClick("hypotenuse")} className="nav-item">
            Hypotenuse
          </li>
          <li onClick={() => handleClick("sum")} className="nav-item">
            Is Triangle?
          </li>
          <li onClick={() => handleClick("third")} className="nav-item">
            Third Angle
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
