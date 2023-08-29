const PictureElement = ({ data }) => {
    const { picture } = data;
    return (
        <div className="picture-element">
            <img src={picture} alt="" className="skinImage" />
        </div>
    );
};

export default PictureElement;