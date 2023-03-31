import { useContext } from "react"
import { GlobalContext } from "../contexts/AppContext"

const ShortDetail = () =>{

    const DATA = useContext(GlobalContext)
    const {id, urlImg, title, desc} = DATA.selectedSuggest
    return(
        <>
            <div className="w-full h-full relative bg-black">
                <img className="max-w-full max-h-full absolute right-0 gradiente" src={urlImg}/>
                <div className=" w-1/3 h-40 m-3 p-3 absolute bottom-0 text-white text-left shadow-2xl rounded-xl">
                    <h1 className=" text-3xl">{title}</h1>
                    <p className=" max-w-[50ch] break-words overflow-hidden text-ellipsis ">{desc.slice(0,170)+'...'}</p>
                </div>
            </div>
            {/* <div className="w-full h-[65%] bg-red-400 absolute">
                <img src="https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"/>
                <div className="absolute bottom-10 w-1/2 text-left px-10">
                    <div className="m-auto">
                        <div className=" bg-slate-300">
                            <h1 className=" md:text-4xl text-xl">Title of movie</h1>
                        </div>
                        <p className=" w-[80ch] whitespace-nowrap overflow-hidden text-ellipsis bg-slate-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem vero repellendus id? Dolore eos unde dolorem maiores veritatis corrupti sunt voluptas ullam magnam itaque fugit repellendus culpa, officiis eligendi nam expedita sint porro rem eveniet eaque quisquam nostrum libero. Accusamus labore fugit esse illo incidunt dolorem facere recusandae, asperiores quidem maxime fugiat saepe temporibus, sint rem aperiam, ullam quaerat? Temporibus ab asperiores nesciunt expedita, magnam, deleniti id aperiam perferendis alias sapiente quibusdam amet? Dignissimos obcaecati rem tempora voluptatum illum ipsa natus dolorum porro nobis enim maxime et aspernatur maiores, esse error aperiam officia corrupti quod magnam laudantium fuga magni non! Modi vero ipsa quas praesentium est nemo nulla rem temporibus nihil voluptatum accusantium eaque possimus odit, beatae quibusdam magnam ipsam consectetur. Ipsa, expedita nisi voluptas eius ex numquam excepturi esse, magnam corrupti iure dignissimos! 
                        </p>
                    </div>

                </div>
            </div> */}
        </>
    )
}


export default ShortDetail