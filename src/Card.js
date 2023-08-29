import CardPicture from "./CardPicture";
import { rarityColors } from "./constants";

const Card = ({ data, onCardClick }) => {
    const { weapon, skin, rarity, picture, pictureLink } = data;


    const rarityColor = rarityColors[rarity] || "#b0c3d9";

    const getRarityClass = (rarity) => {
        return rarity.toLowerCase().replace(/\s/g, "-");
    };

    return (
        <div className="card" style={{ borderColor: rarityColor }}>
            <div className="card-details"> 
                <p className="text-title">{weapon === "Glove" ? weapon + "s" : weapon}</p> 
                <p className="text-subtitle">{skin}</p>
                <CardPicture
                    data={{
                        picture: picture,
                    }}
                />
            </div>
            {skin && (<a
                href={pictureLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-button ${getRarityClass(rarity)}`}
                style={{
                    textDecoration: "none",
                }}
                onClick={onCardClick}
            >
                More Info
            </a>)}
        </div>
    );
};

export default Card;
