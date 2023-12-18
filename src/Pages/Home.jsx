import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
import "../App.css";
import Aside from '../Components/Aside';
import ProductsList from '../Components/ProductsList';


const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  
    // Base de datos MockApi
  const urlData = import.meta.env.VITE_BACKEND_URL;

const fetchData = async () => {
  try {
    const response = await fetch(`${urlData}/products`);
    if (!response.ok) {
      throw new Error('No pudo cargarse el producto');
    }

    const data = await response.json();
    setProducts(data);
  } catch (error) {
    console.error('Error al cargar el producto', error);
    toast.error('Error al cargar el producto');
  }
};

useEffect(() => {
  fetchData();
}, []);

  // dividir secciones por modelos y medidas de los productos
  const uniqueModels = [...new Set(products.map((product) => product.model))];
  const uniqueSizes = [...new Set(products.map((product) => product.size))];

  const handleModelChange = (model) => {
    setFilteredModels((prevModels) => {
      if (prevModels.includes(model)) {
        return prevModels.filter((m) => m !== model);
      } else {
        return [...prevModels, model];
      }
    });
  };

  const handleSizeChange = (size) => {
    setFilteredSizes((prevSizes) => {
      if (prevSizes.includes(size)) {
        return prevSizes.filter((s) => s !== size);
      } else {
        return [...prevSizes, size];
      }
    });
  };

  // filtrar por modelos y medidas de los productos
  const filteredProducts = products.filter((product) => {
    const modelFilter = filteredModels.length === 0 || filteredModels.includes(product.model);
    const sizeFilter = filteredSizes.length === 0 || filteredSizes.includes(product.size);
    return modelFilter && sizeFilter;
  });

  // Mostrar el mensaje de feedback cuando no hay productos filtrados
  useEffect(() => {
    if (filteredModels.length > 0 || filteredSizes.length > 0) {
      if (filteredProducts.length === 0) {
        setFeedbackMessage('No hay productos con esas características.');
      } else {
        setFeedbackMessage('');
      }
    } else {
      setFeedbackMessage('');
    }
  }, [filteredModels, filteredSizes, filteredProducts]);


  return (
    <>
      <h1>Fondos Fotográficos</h1>
      <div className='main-container'>
        <Aside
          models={uniqueModels}
          sizes={uniqueSizes}
          handleModelChange={handleModelChange}
          handleSizeChange={handleSizeChange}
        />
        <section className='main'>
          {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
          <ProductsList 
            products={filteredProducts} 
            addToCart={addToCart} 
            quantity={quantity} 
            setQuantity={setQuantity} 
          />
        </section>
      </div>
    </>
  );
};

export default Home;