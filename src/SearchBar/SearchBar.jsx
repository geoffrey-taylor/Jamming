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
                <input onChange={handleTermChange} />
                <button onClick={search}>
                    Search Song Title
                </button>
            </form>
        </>
    );
};

export default SearchBar;