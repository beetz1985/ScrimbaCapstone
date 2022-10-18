import React, {useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [allPhotosData, setAllPhotosData] = useState([])


    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res=>res.json())
                .then(data=>setAllPhotosData(data))
        }, 1000)
    }, [])


    return(
        <Context.Provider value={{allPhotosData}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}