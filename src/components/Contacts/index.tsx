import Image from "next/image";
import ContactsStyle from "./style";
import Contato from "../../assets/contato.jpg";
import {
  BiLogoGmail,
  BiLogoWhatsapp,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

const Contacts = () => {
  return (
    <ContactsStyle id="contacts">
      <div className="contanier_contacts">
        <h1>Meus Contatos</h1>
        <div className="contanier_section">
          <section className="imagem_section">
            <div className="contanier_icons">
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <BiLogoGmail style={{ color: "#ffffff" }} size={30} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5581995724628"
                target="_blank"
              >
                <BiLogoWhatsapp style={{ color: "#ffffff" }} size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/susilane-assis-149696203/"
                target="_blank"
              >
                <BiLogoLinkedin style={{ color: "#ffffff" }} size={30} />
              </a>
              <a href="https://github.com/SusiAssis" target="_blank">
                <BiLogoGithub style={{ color: "#ffffff" }} size={30} />
              </a>
            </div>
            <Image
              width={430}
              height={320}
              src={Contato}
              alt={"imagem contato"}
              priority={true}
            />
          </section>
          <section>
            <form>
              <label>Nome:</label>
              <input placeholder="Digite seu nome"></input>

              <label>E-mail:</label>
              <input placeholder="ex:maria@gmail.com"></input>

              <label>Mensagem:</label>
              <textarea placeholder="Sua mensagem aqui..."></textarea>
            </form>
            <button>Enviar</button>
          </section>
        </div>
      </div>
    </ContactsStyle>
  );
};

export default Contacts;
