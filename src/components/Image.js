import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context";

function Image(props) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)

  function heartIcon() {
    if (props.img.isFavorite) {
      return <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-fill favorite"></i>
    } else if (hovered) {
      return <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-line favorite"></i>
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === props.img.id)
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={()=> removeFromCart(props.img.id)}></i>
    } else if (hovered) {
      return <i
      onClick={() => {addToCart(props.img)}}
      className="ri-add-circle-line cart"
    ></i>
    }
  }

  return (
    <div 
      className={`${props.className} image-container`} 
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {heartIcon()}
      {cartIcon()}
      <img src={props.img.url} className="image-grid"/>
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img : PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}


export default Image