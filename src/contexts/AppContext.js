import { createContext, useContext, useState } from "react"

export const GlobalContext = createContext()

export const AppContext = ({children}) => {

    const [searched, setSearched] = useState("asda")
    const [selectedSuggest, setSelectedSuggest] = useState({id:0, urlImg:"https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg", title:"Título", desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non laborum tenetur, totam laboriosam minima nulla officiis quam unde modi temporibus omnis similique ea, et sequi! Dignissimos ut ducimus nulla temporibus."})

    return <GlobalContext.Provider value={{selectedSuggest, setSelectedSuggest}}> {children} </GlobalContext.Provider>
    
}


// import { createContext, useState } from "react";

// export const Context = createContext();

// export const AppContext = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("CLA");
//   return <Context.Provider value={[name, setName]}>{children}</Context.Provider>;
// };