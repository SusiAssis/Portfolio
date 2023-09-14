import Image from "next/image";
import HomeStyle from './style';
import {BiWorld , BiDownload} from 'react-icons/bi';
import Link from "next/link";


const Beginning = () => {
    return (
       <HomeStyle>
       <div className="contanier_sections">
        <section className="contanier_text">
            <div className="text_world"><h1>BEM-VINDO AO MEU MUNDO</h1> <BiWorld style={{ color: '#001D53' }} size={30} className='world'/></div>
            <h2>Olá, eu sou a Susi</h2>
            <p>Desenvolvedora Front End</p>
            <Link href="/../SUSILANE ASSIS.pdf" target="_blank" download={true}>Meu Curriculo <BiDownload style={{ color: '#001D53' }} size={25}/></Link>
        </section>
        <section className="contanier_image">
            <Image width={400} height={400} src="/../public/myPhoto.jpg" alt="my photo" className="imagem_section" />
            <div className="purple"></div>
        </section>
       </div>
       <div className="contanier_lista_tech">
        <ul>
            <li><Image width={50} height={50} src="/../icons/css-3-svgrepo-com.svg" alt="CSS" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/html-5-svgrepo-com.svg" alt="HTML" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/javascript-svgrepo-com.svg" alt="JavaScript" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/react-svgrepo-com.svg" alt="Reactjs" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/node-js-redondo-svgrepo-com.svg" alt="Nodejs" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/next-js-svgrepo-com.svg" alt="Nextjs" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/typescript-logo-svgrepo-com.svg" alt="TypeScript" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/git-svgrepo-com.svg" alt="Git" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/figma-svgrepo-com.svg" alt="Figma" className="icons" /></li>
            <li><Image width={50} height={50} src="/../icons/styled-components-svgrepo-com.svg" alt="StyledComponents" className="icons" /></li>
        </ul>
       </div>
       </HomeStyle>
    ) 
}

export default Beginning