import { createContext, useContext, useState } from "react"

const Context = createContext({})

export default function AppContext({children}){

    const [searched, setSearched] = useState([])
    const [selectedSuggest, setSelectedSuggest ] = useContext([])

    return  <Context.Provider value={{selectedSuggest, setSelectedSuggest}}>
                {children}
            </Context.Provider>
        


}