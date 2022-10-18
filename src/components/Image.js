import React, {useState} from "react";

function Image({id, className, imgUrl}) {

    const [hovered, setHovered] = useState(false)

    return(
        <div key={id} className={className}>

            { hovered && <i className="ri-heart-line favorite"></i> }
            { hovered && <i className="ri-add-circle-line cart"></i> }
            
            <img 
                src={imgUrl} alt={id} 
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}
            />
            
        </div>
    )
}

export default Image