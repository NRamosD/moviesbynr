import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { DetailedMovie, LatestMovies, DiscoverMovies} from "../services/APIsReq";



export default function ScrollableMoviesList ({searchValue = ""|| "Suggestions..." }) {

    const [loading, setLoading] = useState(true)
    const [discoverMovies, setDiscoverMovies] = useState()

    const dataReceptor = async () =>{
        const {results} = await DiscoverMovies()
        setDiscoverMovies(await results)
        setLoading(false)

        // setData(latestsMovies)
    }

    useEffect(()=>{
        dataReceptor()
        
    },[])
    // {discoverMovies.map((item)=>{
    //     return(
    //         <MovieCard/>
    //     )
    // })}
    if(loading){
        return(
            <>
                <div className="fixed bottom-0 h-auto w-full bg-white">
                    <h2 className=" text-black text-left font-bold text-xl p-2">{searchValue}</h2>
                    <div className="overflow-x-auto flex">
                        <MovieCard/>
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className="fixed bottom-0 h-auto w-full bg-white">
                    <h2 className=" text-black text-left font-bold text-xl p-2">{searchValue}</h2>
                    <div className="overflow-x-auto flex">
                        {discoverMovies.map((item, id)=>{
                            return <MovieCard key={id} back={item.backdrop_path} title={item.title} vote={item.vote_average} />
                        })}
                        
                        
                        
                        {/* <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/> */}
                    </div>
                
                </div>
    
            </>
        )
    }
}