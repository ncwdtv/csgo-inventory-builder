import PictureElement from "./PictureElement";
const Card = ({data}) => {

    const { weapon,skin,picture } = data;

    return ( 
        <div class="card">
            <div class="card-details">
                <p class="text-title">{skin}</p>
                <p class="text-body">Here are the details of the card</p>
            </div>
            <button class="card-button">More info</button>
        </div>
     );
}
 
export default Card;