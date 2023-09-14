import HeaderStyle from "./style";
import { RiMenu3Fill } from "react-icons/ri";

const Header = ({ setMenuIsVisible }: any) => {
  return (
    <HeaderStyle className="head">
      <nav>
        <p>{"<Susi/>"}</p>
        <ul className="menu_web">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contacts">Contato</a>
          </li>
        </ul>
        <RiMenu3Fill
          onClick={() => setMenuIsVisible(true)}
          size={25}
          className="mobile"
        />
      </nav>
    </HeaderStyle>
  );
};

export default Header;
