import React, { createContext, useState, useEffect } from 'react'

const Context = createContext();

function ContextProvider(props) {
  const [allPhoto, setAllPhoto] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then(res => res.json())
      .then(data => setAllPhoto(() => ([...data])))
  },[])
  
  function toggleFavorite (id) {
    const updatedArr = allPhoto.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })

    setAllPhoto(updatedArr)
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }

  return (
    <Context.Provider value={{allPhoto, cartItems, toggleFavorite, addToCart, removeFromCart, setCartItems, emptyCart}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}; // So we pull out the useContext hook