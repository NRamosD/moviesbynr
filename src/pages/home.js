import "../css/App.css"
import ScrollableMoviesList from '../fragments/ScrollableMoviesList';
import ShortDetail from '../components/ShortDetail';

import SearchMovie from '../forms/SearchMovie';

export default function Home(){
    return(
        <div className="App">
            <header className="App-section">
                <h2 className='text-3xl'>MOVIES APP</h2>
                <SearchMovie/> 
                
                <ShortDetail/>
                
                <ScrollableMoviesList/> 


                <div className='author'>
                <p>By Nixon Ramos</p>
                </div>
            </header>
        </div>
    )
}