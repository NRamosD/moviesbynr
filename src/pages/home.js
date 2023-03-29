import "../css/App.css"
import ScrollableMoviesList from '../fragments/ScrollableMoviesList';
import ShortDetail from '../components/ShortDetail';

import SearchMovie from '../forms/SearchMovie';
import AppContext from "../contexts/AppContext";

export default function Home(){
    return(
        <>
            <div className="App">
                <ShortDetail/>
                <section className="App-section">
                    <div className=" fixed p-2 top-0 right-0 w-full align-left text-left">
                        <h2 className='text-3xl'>MOVIES APP</h2>
                        <div>
                            
                        </div>
                        <SearchMovie/>
                        
                    </div>
                    
                    <ScrollableMoviesList/> 
                    


                    <div className='author'>
                        <p>By Nixon Ramos</p>
                    </div>
                </section>
            </div>
        </>
    )
}