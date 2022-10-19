
import {useState, useRef, useEffect} from "react";

function useHover() {

    const [hovered, setHovered] = useState(false)
    const hoverRef = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }


    useEffect(()=>{

        //https://stackoverflow.com/questions/67069827/cleanup-ref-issues-in-react/67069936#67069936
        //Bug involving refValue in the cleanup function of useEffect. Sorted Below

        let refValue = null;

        hoverRef.current.addEventListener('mouseenter', enter)
        hoverRef.current.addEventListener('mouseleave', leave)
  
        if(hoverRef.current) refValue = hoverRef.current;

        return ()=>{
            refValue.removeEventListener('mouseenter', enter)
            refValue.removeEventListener('mouseleave', leave)             
        }
           
    }, [])


    return [hovered, hoverRef]
}

export default useHover