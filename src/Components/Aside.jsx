import React, { useState } from 'react';

const Aside = ({ models, sizes, handleModelChange, handleSizeChange }) => {


  return (
    <aside className="aside-container">
        <section className="bg_Selection">
            <ul className="bg_type">
                <li>Categoría</li>
                {models.map((model) => (
                <li key={model}>
                    <label>
                    <input
                        type="checkbox"
                        value={model}
                        onChange={() => handleModelChange(model)}
                    />
                    {model}
                    </label>
                </li>
                ))}
            </ul>
            <ul className="bg_type">
                <li>Tamaños de fondos</li>
                {sizes.map((size) => (
                <li key={size}>
                    <label>
                    <input
                        type="checkbox"
                        value={size}
                        onChange={() => handleSizeChange(size)}
                    />
                    {size}
                    </label>
                </li>
                ))}
            </ul>
        </section>
    </aside>
  );
};

export default Aside;