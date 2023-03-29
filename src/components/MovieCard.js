import { useEffect, useState } from "react"
import APIsReq from "../services/APIsReq"

const MovieCard = ({key, back,title,vote}) =>{
    const [data, setData] = useState()
    useEffect(()=>{
    },[])
    return(
        <div className="w-80 h-48 flex-none relative bg-slate-500 m-4 hover:cursor-pointer transition-transform hover:scale-110 shadow-xl">
            <div className="absolute text-left left-3 bottom-2">
                <h3 className="text-2xl text-white font-semibold ">{title||"Any"}</h3>
                <h5 className="text-base text-white">{vote||"0.0"}</h5>
            </div>
            <img src={back?process.env.REACT_APP_URI_IMG_500+back:""} className="w-full h-full bg-neutral-200 -z-10 p-1 shadow-xl"/>
        </div>

    )
}

export default MovieCard