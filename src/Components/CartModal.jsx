import React, { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import { FaTimesCircle } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa6";
import ReactModal from 'react-modal';


const CartModal = () => {
  const { isCartModalOpen, closeCartModal, cartItems, removeProduct, selectedQuantities, emptyCart, handleCartBuy } = useContext(CartContext);

  // cerrar el carrito con tecla 'Esc'
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeCartModal();
    }
  };
  
  const calculateSubtotal = (product) => {
    return product.price * selectedQuantities[product._id];
  };
  
  const calculateTotal = () => {
    return cartItems.reduce((total, product) => {
      return total + calculateSubtotal(product);
    }, 0);
  };

  return (
    <ReactModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} contentLabel="Carrito de Compras">
      <section className='cart-modal' onKeyDown={handleKeyDown} tabIndex={0} autoFocus>
        <button className='close-btn' onClick={closeCartModal}>
          <FaTimesCircle />
        </button>
        <section className='cart-container'>
          <h2>Carrito de Compras</h2>
          <article>
          {cartItems && cartItems.length > 0 ? (
              <ul>
                {cartItems.map((product, index) => (
                  <li key={product._id}>
                    <picture>
                      <img src={product.image} alt={product.model} />
                    </picture>
                    <div>
                      <article>
                        <p className='bold-tag'>Cantidad</p>
                        <p>{selectedQuantities[product._id]}</p>
                        </article>
                        <article>
                          <p className='bold-tag'>{product.model} de {product.size}</p>
                          <p>{product.description}</p>
                        </article>
                      </div>
                      <div>
                        <article>
                          <p className='bold-tag'>Precio</p>
                          <p>${Number(product.price).toFixed(3)}</p>
                        </article>
                        <article>
                          <p className='bold-tag'>Subtotal</p>
                          <p>${calculateSubtotal(product).toFixed(3)}</p>
                        </article>
                      </div>
                      <button onClick={() => removeProduct(product._id)}><FaTrash /></button>
                  </li>
                ))}
                <article className='total-price'>
                    <p>TOTAL:</p>
                    <p>${calculateTotal().toFixed(3)}</p>
                </article>
                  <div className="cart-buttons">
                    <button onClick={emptyCart}>Vaciar Carrito</button>
                    <button onClick={() => handleCartBuy()}>Comprar</button>
                  </div>
              </ul>
            ) : (
              <p>El carrito está vacío</p>
            )}
          </article>
        </section>
      </section>
    </ReactModal>
  );
};

export default CartModal;