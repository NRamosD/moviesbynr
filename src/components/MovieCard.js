import { useEffect, useState } from "react"
import APIsReq from "../services/APIsReq"
import { GlobalContext } from "../contexts/AppContext"
import { useContext } from "react"

const MovieCard = ({id, overview, back,title,vote}) =>{
    const [data, setData] = useState()
    const {setSelectedSuggest}= useContext(GlobalContext)
    useEffect(()=>{
    },[])
    //console.log(process.env.REACT_APP_URI_IMG_500+back)
    const handleSuggestionClic = (e) =>{
        const movie = {
            id:id, 
            urlImg:`https://image.tmdb.org/t/p/original/${back}`, 
            title:title, 
            desc:overview
        }
        console.log(movie)
        setSelectedSuggest(movie)
    }
    return(
        <div onClick={(e)=>handleSuggestionClic(e)} className="w-64 flex-none relative bg-slate-500 m-4 hover:cursor-pointer transition-transform hover:scale-110 shadow-xl">
            <div className="absolute text-left left-3 bottom-2">
                <h3 className="text-2xl text-white font-semibold ">{title||"Any"}</h3>
                <h5 className="text-base text-white">{`${vote}/10`||"0.0/10"}</h5>
            </div>
            <img src={back?process.env.REACT_APP_URI_IMG_500+back:""} className="w-full h-full bg-neutral-200 -z-10 p-1 shadow-xl"/>
        </div>

    )
}

export default MovieCard