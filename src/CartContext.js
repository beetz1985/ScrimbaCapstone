import React, {useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [allPhotosData, setAllPhotosData] = useState([])
    const [cartContent, setCartContent] = useState([])


    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res=>res.json())
                .then(data=>setAllPhotosData(data))
        }, 1000)
    }, [])


    function toggleFav(id) {
        setAllPhotosData((s)=>{
            return s.map((v)=>{
                if(v.id === id) v.isFavorite = !v.isFavorite;
                return v
            })
        })
    }

    function addToCart(id) {
        const item = allPhotosData.find(v=>v.id === id)
        setCartContent(s=> [...s, item])
    }

    function removeFromCart(id) {
        setCartContent((s)=>s.filter(v=>v.id !== id))
    }

  

    return(
        <Context.Provider value={{allPhotosData, toggleFav, addToCart, cartContent, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}