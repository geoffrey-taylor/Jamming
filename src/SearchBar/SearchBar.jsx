import React, {useState} from 'react';

//Search bar text input and button to submit
function SearchBar() {
    const [search, setSearch] = useState('');

    //Resets search field upon form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Searching...');
        setSearch('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id='search'
                    name='search'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit'>
                    Search Song Title
                </button>
            </form>
        </>
    )
}

export default SearchBar;