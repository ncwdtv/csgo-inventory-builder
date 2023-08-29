import ShowMoreItem from "./ShowMoreItem";
const Search = ({ searchSkin, activeShowMoreItem }) => {
    var numSearchItems = 10;
    var searchTerm = "";
    const handleKeyUp = (event) => {
        searchTerm = event.target.value;
        searchSkin(numSearchItems);

        const searchOverlay = document.querySelector(".search-overlay");
        if (searchTerm && searchTerm.length > 0) {
            searchOverlay.classList.add("active");
        } else {
            searchOverlay.classList.remove("active");
        }
    };

    const handleTextClick = () => {
        numSearchItems += 10;
        searchSkin(numSearchItems);
    };

    return (
        <div className="input-container">
            <input
                placeholder="Search for a Skin"
                className="input-field"
                type="text"
                required=""
                onKeyUp={handleKeyUp}
                id="searchInput"
            ></input>
            <label htmlFor="input-field" className="input-label">
                Search for a Skin
            </label>
            <span className="input-highlight"></span>
            <div className="search-overlay search-overlay-content">
                <div id="searchResults"></div>
                <ShowMoreItem
                    onTextClick={handleTextClick}
                    activeShowMoreItem={activeShowMoreItem}
                />
            </div>
        </div>
    );
};

export default Search;

//onKeyUp={() => searchSkin()}
//<div id="searchResults"></div>
