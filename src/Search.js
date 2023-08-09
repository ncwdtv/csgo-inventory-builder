const Search = ({ searchSkin }) => {
    const handleKeyUp = (event) => {
        searchSkin(event.target.value);
    };

    return (
        <div className="input-container">
            <input
                placeholder="Enter text"
                className="input-field"
                type="text"
                required=""
                onKeyUp={handleKeyUp}
                id="searchInput"
            ></input>
            <label htmlFor="input-field" className="input-label">
                Enter text
            </label>
            <span className="input-highlight"></span>

            <div id="searchResults"></div>
        </div>
    );
};

export default Search;

//onKeyUp={() => searchSkin()}
