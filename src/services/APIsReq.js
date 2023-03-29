
// const AllTitles = async () =>{

//     return await fetch(`${process.env.REACT_APP_URI_API}list-titles/?apiKey=${process.env.REACT_APP_API_KEY}`
//             ).then(
//                 res=>res.json()
//             ).then(
//                 data=>data
//             )
    
// }

// const SearchByKeyWord = async (keyword) =>{

//     return await fetch(`${process.env.REACT_APP_URI_API}search/?apiKey=${process.env.REACT_APP_API_KEY}&search_field=name&search_value=${keyword}&search_type=1`
//             ).then(
//                 res=>res.json()
//             ).then(
//                 data=>data
//             )
    
// }

const DetailedMovie = async (keyword) =>{
    
    const data = await fetch(`${process.env.REACT_APP_URI_API}movie/550?api_key=${process.env.REACT_APP_API_KEY}`
        ).then(
            res=>res.json()
        ).then(
            data=>data
        )
    return await data
}

const LatestMovies = async (keyword) =>{
    
    const data = await fetch(`${process.env.REACT_APP_URI_API}movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        ).then(
            res=>res.json()
        ).then(
            data=>data
        )
    return await data
}

const DiscoverMovies = async (keyword) =>{
    
    const data = await fetch(`${process.env.REACT_APP_URI_API}discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
        ).then(
            res=>res.json()
        ).then(
            data=>data
        )
    return await data
}




// AllTitles,
// SearchByKeyWord,
export {
    DetailedMovie,
    LatestMovies,
    DiscoverMovies
}