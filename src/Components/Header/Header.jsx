import { useEffect } from "react";
import "./styles.css";
import { FaPlane } from "react-icons/fa";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      if (header) {
        header.classList.toggle("rolagem", window.scrollY > 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div className="containernav">
        <div className="flex">
          <a className="logo" href="/">
            BlooTRIP
            <FaPlane />
          </a>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#nordeste">Nordeste</a>
              </li>
              <li>
                <a href="#sul">Sul</a>
              </li>
              <li>
                <a href="#interacional">Internacional</a>
              </li>
            </ul>
          </nav>
          <div className="btncontato">
            <a href="/">
              <button>Contato</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
