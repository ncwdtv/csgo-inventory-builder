const PictureElement = ({ data }) => {
    const { picture, pictureLink } = data;
    return (
        <div className="picture-element">
            <a href={pictureLink} target="_blank" rel="noopener noreferrer">
                <img src={picture} alt="" className="skinImage" />
            </a>
        </div>
    );
};

export default PictureElement;
