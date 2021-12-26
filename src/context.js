import React, { createContext, useState, useEffect } from 'react'

const Context = createContext();

function ContextProvider(props) {
  const [allPhoto, setAllPhoto] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then(res => res.json())
      .then(data => setAllPhoto(() => ([...data])))
  },[])
  
  return (
    <Context.Provider value={{allPhoto}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}; // So we pull out the useContext hook