const showMoreItem = ({ onTextClick, activeShowMoreItem }) => {
    return (
        <div
            className={`show-more-item ${activeShowMoreItem ? "active" : ""}`}
            onClick={onTextClick}
        >
            Show More Skins...
        </div>
    );
};

export default showMoreItem;
