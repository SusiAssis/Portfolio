import Image from "next/image";
import AbountMeStyled from './style';

const AboutMe = () => {
  return (
    <AbountMeStyled>
      <div className="contanier_sections">
        <section>
          <Image width={400} height={400} src="/../public/programation.jpg" alt="my photo" className="imagem_section" />
        </section>
        <section className="section_text">
          <h1>Sobre mim</h1>
          <p>
            Comecei minha carreira na área da tecnologia quando percebi que
            sempre admirei esse campo em várias fases da minha vida. Uma das
            coisas que sempre desejei fazer foi a criação de sites e
            aplicativos. Ficava encantada com a forma como os sistemas de
            software auxiliam as pessoas em seu trabalho diário.
          </p>
          <p>
            Assim, decidi aprender mais sobre o que significa ser um
            desenvolvedor de software e me apaixonei. Iniciei meus estudos e
            hoje possuo um conhecimento sólido em HTML, CSS, JavaScript,
            React.js, Node.js, TypeScript e Next.js.
          </p>
          <p>
            Atualmente, estou expandindo meu conhecimento para o desenvolvimento
            de back-end e explorando novas tecnologias. Afinal, desenvolvedores
            nunca param de estudar!
          </p>
        </section>
      </div>
    </AbountMeStyled>
  );
};

export default AboutMe;
