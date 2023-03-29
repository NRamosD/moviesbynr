import APIsReq from "../services/APIsReq"

const SearchMovie = () => {
    const handleOnSubmit = async(e) => {
        e.preventDefault()
        let searching = e.target[0].value.trim()
        console.log(searching)
    }

    return(
        <form onSubmit={(e)=>handleOnSubmit(e)}>
            <input className="p-2 m-2 bg-white w-full rounded-md text-lg  text-black text-center shadow-xl" placeholder="Write something..." />
        </form>

    )
}

export default SearchMovie