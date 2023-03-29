import APIsReq from "../services/APIsReq"

const SearchMovie = () => {
    const handleOnSubmit = async(e) => {
        e.preventDefault()
        let searching = e.target[0].value.trim()
        console.log(searching)
    }

    return(
        <form onSubmit={(e)=>handleOnSubmit(e)}>
            <input className="p-2  bg-white w-1/4 rounded-md md:text-lg text-sm  text-black text-center shadow-xl" placeholder="Write something..." />
        </form>

    )
}

export default SearchMovie