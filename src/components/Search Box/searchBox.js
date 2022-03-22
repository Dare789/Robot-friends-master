import React from 'react';

 const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2 f3">
            <input className="pa2 bg-light-yellow" type="search" placeholder="Search Robots"
             onChange={searchChange}/>
        </div>
    )
}
export default SearchBox;