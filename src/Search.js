import ShowMoreItem from "./ShowMoreItem";

const Search = ({ searchSkin, activeShowMoreItem }) => {
    let numSearchItems = 10;

    const handleKeyUp = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        numSearchItems = 10; // Reset to initial batch size on new search term
        searchSkin(numSearchItems);

        const searchOverlay = document.querySelector(".search-overlay");
        if (searchTerm && searchTerm.length > 0) {
            searchOverlay.classList.add("active");
        } else {
            searchOverlay.classList.remove("active");
        }
    };

    const handleTextClick = () => {
        numSearchItems += 10; // Increase the number of items to display
        searchSkin(numSearchItems);
    };

    return (
        <div className="input-container">
            <input
                placeholder="Search for a Skin"
                className="input-field"
                type="text"
                onKeyUp={handleKeyUp}
                id="searchInput"
            />
            <label htmlFor="input-field" className="input-label">
                Search for a Skin
            </label>
            <span className="input-highlight"></span>
            <div className="search-overlay search-overlay-content">
                <div id="searchResults"></div>
                {activeShowMoreItem && (
                    <ShowMoreItem onTextClick={handleTextClick} />
                )}
            </div>
        </div>
    );
};

export default Search;
