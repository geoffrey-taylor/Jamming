import React, {useState, useCallback} from 'react';

//Search bar text input and button to submit
function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <>
            <form>
                <input
                    id='search'
                    name='search'
                    type='text'
                    value={search}
                    onChange={handleTermChange}
                />
                <button id='searchBtn' type='submit' onClick={search}>
                    Search Song Title
                </button>
            </form>
        </>
    );
};

export default SearchBar;