import PictureElement from "./PictureElement";
const Card = ({data}) => {

    const { skin,picture,pictureLink } = data;
    
    return ( 
        <div class="card">
            <div class="card-details">
                <p class="text-title">{skin}</p>
                <p class="text-body"><PictureElement
                                    data={{
                                        picture: picture,
                                        pictureLink: steamMarketLink,
                                    }}
                                    /></p>
            </div>
            <button class="card-button">More info</button>
        </div>
     );
}
 
export default Card;