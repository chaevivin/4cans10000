import React from 'react';
import BeerList from '../components/beerList/beerList';
import BeerSearch from '../components/beerSearch/beerSearch';
import FilterBox from './../components/filterBox/filterBox';

const Search = (props) => {
    return (
        <div>
            <BeerSearch />
            <FilterBox />
            <BeerList />
            <Footer />
        </div>
    );
};
export default Search;