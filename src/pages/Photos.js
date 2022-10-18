import React, {useContext} from "react";
import {Context} from '../CartContext'
import { getClass } from "../utils";
import Image from "../components/Image";

function Photos() {

    const photoData = useContext(Context)

    const photoElements = photoData.allPhotosData.map((v, i)=>{
        return <Image key={v.id} fav={v.isFavorite} id={v.id} imgUrl={v.url} className={`img-container ${getClass(i)}`}/>
    })

    return (
        <section className="gallery-wrapper">
            {photoElements}
        </section>
    )
}

export default Photos