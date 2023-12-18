import React from 'react';

const AboutUs = () => {

  return (
    <>
      <h1>Sobre Nosotros</h1>
      <section className="us-container">
        {/* card 1 */}
        <article className="us-card">
          <picture>
            <img src='https://aybiya.github.io/BC_Proyecto_Int_Aybi-Yanez/img/nosotros/nosotros-1.jpg' alt="Foto producto usando AY fondos" />
          </picture>
          <div>
            <h3>AY fondos</h3>
            <p className="us-intro">Equipo</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque distinctio alias deleniti. Placeat id aut quam quia suscipit officiis, fuga unde necessitatibus quidem ipsum veniam dolorum nemo nulla quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nesciunt quidem at accusantium a et nihil quibusdam maxime consequatur! Hic fugiat amet aperiam possimus cupiditate quisquam recusandae delectus, nemo et.</p>
          </div>
        </article>
        {/* card 2 */}
        <article className="us-card">
          <div className="us-elements">
            <h3>Objetivos</h3>
            <p className="us-intro">practicicidad, armonía y estilo</p>
            <p>1- Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque distinctio alias deleniti.</p>
            <p>2- Placeat id aut quam quia suscipit officiis, fuga unde necessitatibus quidem ! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>3- Minus nesciunt quidem at accusantium a et nihil quibusdam maxime consequatur! Recusandae delectus, nemo et.</p>
          </div>
          <picture>
            <img src='https://aybiya.github.io/BC_Proyecto_Int_Aybi-Yanez/img/nosotros/nosotros-2.jpg' alt='Foto producto usando AY fondos'/>
          </picture>
        </article>
        {/* card 3 */}
        <article className="us-card">
          <picture>
            <img src='https://aybiya.github.io/BC_Proyecto_Int_Aybi-Yanez/img/nosotros/nosotros-4.jpg' alt="Foto producto usando AY fondos"/>
          </picture>
          <div>
            <h3>Misión</h3>
            <p className="us-intro">Calidad, creativdad y diferenciación</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque distinctio alias deleniti. Minus nesciunt quidem at accusantium a et nihil quibusdam maxime consequatur! Hic fugiat amet aperiam possimus cupiditate quisquam recusandae delectus, nemo et.</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default AboutUs;