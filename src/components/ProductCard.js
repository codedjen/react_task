import React, { useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './ProductCard.css';

const ProductCard = ({ product }) => {

  const colors = ['#C0B299', '#8C8C8C', '#5C504F'];

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title}/>
        <button className="favorite-button" onClick={handleFavoriteClick}>
          {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
      </div>
      <div className="color-circles">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-circle"
            style={{ backgroundColor: color }}
          >

          </div>
        ))}
      </div>
      <h2>{product.title.substring(0, 12)}</h2>
      <p>{product.description.substring(0, 20)}</p>
      <div className="product-bottom">
        <h2>${product.price}</h2>
        <button className="add-button">
          <AddCircleOutlineIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;