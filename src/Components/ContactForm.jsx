import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    mail: '',
    cellphone: '',
    reason: '',
    writeMessage: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name, value);
  };


  const validateField = (fieldName, value) => {
    const validationErrors = { ...errors };
  
    switch (fieldName) {
      case 'name':
        const nameRegex = /^[A-ZÁÉÍÓÚÑ]?[a-záéíóúñ]{3,10}$/gm;
        validationErrors.name = nameRegex.test(value)
          ? ''
          : 'Nombre inválido, debe tener mínimo 3 y máximo 13 caracteres';
        break;
  
      case 'lastName':
        const lastNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ'’]{2,20}$/gm;
        validationErrors.lastName = lastNameRegex.test(value)
          ? ''
          : 'Apellido inválido, debe tener mínimo 2 y máximo 20 caracteres';
        break;
  
      case 'mail':
        const mailRegex = /\S+@\S+\.\S+/gm;
        validationErrors.mail = mailRegex.test(value)
          ? ''
          : 'Dirección inválida, ejemplo@mail.com';
        break;
  
      case 'cellphone':
        const cellphoneRegex = /^\d{7,14}$/gm;
        validationErrors.cellphone = cellphoneRegex.test(value)
          ? ''
          : 'Número inválido, debe tener mínimo 7 y máximo 14 dígitos';
        break;
  
      case 'reason':
        validationErrors.reason = value ? '' : 'Elegir una razón';
        break;
  
      case 'writeMessage':
        const writeMessageRegex = /.{7,}/gm;
        validationErrors.writeMessage = writeMessageRegex.test(value)
          ? ''
          : 'Mensaje debe tener al menos 7 caracteres';
        break;
  
      default:
        break;
    }
  
    setErrors(validationErrors);
  };


  const validateForm = () => {
    const validationErrors = {};

    for (const [fieldName, value] of Object.entries(formData)) {
      validateField(fieldName, value);
  
      if (errors[fieldName]) {
        validationErrors[fieldName] = errors[fieldName];
      }
    }
  
    setErrors(validationErrors);
  
    // Verificar si hay errores y si todos los campos están completos
    const hasErrors = Object.values(validationErrors).some((error) => error !== '');
    const isFormComplete = Object.values(formData).every((value) => value !== '');
  
    if (hasErrors || !isFormComplete) {
      toast.error('ERROR, Completar todos los campos de manera correcta');
      return false;
    }
  
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Enviar el formulario si es válido
      
      toast.success('Formulario enviado exitosamente');

      // Reiniciar los campos del formulario
      setFormData({
        name: '',
        lastName: '',
        mail: '',
        cellphone: '',
        reason: '',
        writeMessage: '',
      });
    }
  };

  return (
    <section className='contact'>
      <h2>Consulta</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <section className='contact-form__info'>
          <div>
            <article className="contact-form__group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}x
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </article>
            <article className="contact-form__group">
              <label htmlFor="mail">Correo Electrónico:</label>
              <input
                type="text"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
              />
              {errors.mail && <p className="error-message">{errors.mail}</p>}
            </article>
          </div>
          <div>
            <article className="contact-form__group">
              <label htmlFor="lastName">Apellido:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </article>
            <article className="contact-form__group">
              <label htmlFor="cellphone">Celular:</label>
              <input
                type="text"
                id="cellphone"
                name="cellphone"
                value={formData.cellphone}
                onChange={handleChange}
              />
              {errors.cellphone && <p className="error-message">{errors.cellphone}</p>}
            </article>
          </div>
        </section>
        <article className="contact-form__reason">
          <label htmlFor="reason">Razón:</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="">Seleccionar razón</option>
            <option value="Fondos personalizados">Fondos personalizados</option>
            <option value="Estado de envío">Estado de envío de mi producto</option>
            <option value="Cancelar mi pedido">Cancelación de mi pedido</option>
            <option value="Fondos por mayorista">Fondos por mayorista</option>
            <option value="Otras consultas">Otras consultas</option>
          </select>
          {errors.reason && <p className="error-message">{errors.reason}</p>}
        </article>
        <article className="contact-form__message">
          <label htmlFor="writeMessage">Mensaje:</label>
          <textarea
            id="writeMessage"
            name="writeMessage"
            value={formData.writeMessage}
            onChange={handleChange}
          />
          {errors.writeMessage && <p className="error-message">{errors.writeMessage}</p>}
        </article>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
