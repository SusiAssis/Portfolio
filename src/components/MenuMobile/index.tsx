import { Container } from "./style";
import { IoClose } from "react-icons/io5";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }: any) => {
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={35} onClick={() => setMenuIsVisible(false)} />
      <ul>
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
    </Container>
  );
};

export default MenuMobile;
