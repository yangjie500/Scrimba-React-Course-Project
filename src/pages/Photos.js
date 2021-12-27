import React, {useContext} from "react";

import { Context } from "../context";
import Image from "../components/Image";
import {getClass} from "../utils/helper";

function Photos() {
    const {allPhoto} = useContext(Context)
    const imagesElements = allPhoto.map(elem => {
        return <Image 
        key={elem.id}
        img={elem}
        className={getClass(elem.id)}
        />
    })
    return (
        <main className="photos">
            {imagesElements}
        </main>
    )
}

export default Photos