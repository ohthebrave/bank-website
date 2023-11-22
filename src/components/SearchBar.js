import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'

const SearchBar = ({lists, setList}) => {

    const [query, setQuery] = useState("");

    const handleSearch = () => {
        const filterList = lists.filter((list) => {
            return list.category === query;
        })
        setList(filterList)
    }

    return ( 
        <div className="search-bar">
            <div className='search'>
                <input type="search" name="search" id="search" placeholder="Search your Recent Transactions" onChange={(e) => setQuery(e.target.value)} />
                <FiSearch onClick={handleSearch}/> 
            </div>
        </div>
     );
}
 
export default SearchBar;