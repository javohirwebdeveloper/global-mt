import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../public/data';
const CatalogPage = () => {
  const { category } = useParams();
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      <h1>salom</h1>
      <h1>{category} bo'yicha mahsulotlar</h1>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;
