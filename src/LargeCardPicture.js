const LargeCardPicture = ({ data }) => {
    const { picture } = data;
    return (
        <div className="large-card-picture">
            <img src={picture} alt="" className="large-card-image" />
        </div>
    );
    }
export default LargeCardPicture;