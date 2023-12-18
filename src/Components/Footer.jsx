import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <section className='socialMedia'>
        <article>
          <a href="https://api.whatsapp.com/send/?phone=5493874651532" target="_blank">
            <IoLogoWhatsapp />
          </a>
          <a href="mailto:ay.fondos@gmail.com" target="_blank">
              <IoIosMail />
          </a>
        </article>
        <article>
            <a href="https://www.instagram.com/ay.fondos/" target="_blank">
                <AiFillInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100065076488455&mibextid=b06tZ0" target="_blank">
                <FaFacebook />
            </a>
        </article>
      </section>
      <Link to="/">
        <img className='logo' src="https://aybiya.github.io/BC_Proyecto_Int_Aybi-Yanez/img/logo-AYfondosBlanco.svg" alt="Logo" />
      </Link>
      <ul className='linksFooter'>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/alta">Alta</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;