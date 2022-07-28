import React  from 'react';
import { useGlobalContext } from './Conntext';
const Search = () => {
 const {query,Searchs} = useGlobalContext();
    return (
        <div>
            <h1>TECH NEWS</h1>
            <form action="">
                <input type="text" placeholder='search' value={query} onChange={(e) => Searchs(e.target.value)}/>
            </form>
        </div>
    );
};

export default Search;