const CardPicture = ({ data }) => {
    const { picture } = data;
    return (
        <div className="card-picture">
            <img src={picture} alt="" className="card-image" />
        </div>
    );
    }
export default CardPicture;