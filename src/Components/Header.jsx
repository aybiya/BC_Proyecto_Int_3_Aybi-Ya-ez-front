import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import CartModal from './CartModal';

const Header = () => {
  const { isCartModalOpen, openCartModal, closeCartModal, cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 770);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <header>
      <nav className='navBar'>
        <Link to="/">
          <img className='logo' src="https://aybiya.github.io/BC_Proyecto_Int_Aybi-Yanez/img/logo-AYfondos.svg" alt="Logo" />
        </Link>
        {isMobile ? (
          <Link to="#" onClick={menuOpen ? closeMenu : toggleMenu} className='navBar-menu'>
            {menuOpen ? <FaTimesCircle className='navBar-bars-btn' /> : <FaBars className='navBar-bars-btn' />}
          </Link>
        ) : (
            <ul>
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
        )}
        {isMobile && (
          <ul style={{ display: menuOpen ? 'flex' : 'none' }}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/alta" onClick={closeMenu}>
                Alta
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/nosotros" onClick={closeMenu}>
                Nosotros
              </Link>
            </li>
            <li>
              <button className='navBar-cartBtn' onClick={openCartModal}>
                <FaCartShopping />
              </button>
            </li>
          </ul>
        )}
       <button className='navBar-cartBtn-desk' onClick={openCartModal}>
          <FaCartShopping />
        </button>
      </nav>
      <CartModal isOpen={isCartModalOpen} closeModal={closeCartModal} cartItems={cartItems} />
    </header>
  );
};

export default Header;
