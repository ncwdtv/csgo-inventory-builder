import FloatSlider from "./FloatSlider";
import PictureElement from "./PictureElement";
const SkinTable = ({ data, onSkinWearChange }) => {
    const handleSliderChange = (name, newWear) => {
        const updatedData = data.map((skin) =>
            skin.name === name ? { ...skin, wear: newWear } : skin
        );
        onSkinWearChange(updatedData); // Pass the updated data back to App
    };

    const fullNameWear = (wear) => {
        if (wear < 0.07) return "Factory%20New";
        if (wear < 0.15) return "Minimal%20Wear";
        if (wear < 0.38) return "Field-Tested";
        if (wear < 0.45) return "Well-Worn";
        if (wear < 1) return "Battle-Scarred";
    };
    //Listing = `https://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name=${skin.name}%20%7C${secondPart}%20%28${fullNameWear(skin.wear)}%29`;
    //Price = `https://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name=${skin.name}%20%7C${secondPart}%20%28${fullNameWear(skin.wear)}%29`

    /*
        function getSkins(url) {
        return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            var skinsData = data;
            return skinsData;
          })
          .catch((error) => {
            console.error("Error:", error);
          });

    }
    */
    const renderTable = () => {
        return data.map(({ name, skin, min_wear, max_wear, wear, picture }) => {
            var steamMarketLink;
            //var steamPriceLink;
            if (skin !== "") {
                const skinParts = skin.split("|");
                const itemName = name;
                const secondPartElements = skinParts[1]?.split(" ") || [];
                const secondPart = secondPartElements.join("%20");
                const fullName = fullNameWear(wear);

                const steamMarketLinkBase =
                    "https://steamcommunity.com/market/listings/730/";
                //const steamPriceLinkBase =
                    //"https://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name=";
                const hashName = `${itemName}%20%7C${secondPart}%20%28${fullName}%29`;
                steamMarketLink = steamMarketLinkBase + hashName;
                //steamPriceLink = steamPriceLinkBase + hashName; //CORS is blocking this. Need to use a proxy.
            }

            return (
                <tr key={name} data-weapon={name}>
                    <td>{name}</td>
                    <td>{skin}</td>
                    <td>
                        {wear !== "" ? (
                            <FloatSlider
                                data={{
                                    min_wear: min_wear,
                                    max_wear: max_wear,
                                    wear: wear,
                                }}
                                onSliderChange={(newWear) =>
                                    handleSliderChange(name, newWear)
                                }
                            />
                        ) : null}
                    </td>
                    <td>
                        {picture ? (
                            <PictureElement
                                data={{
                                    picture: picture,
                                    pictureLink: steamMarketLink,
                                }}
                            />
                        ) : null}
                    </td>
                </tr>
            );
        });
    };

    //STEAM MARKET LINK TEMPLATE = https://steamcommunity.com/market/listings/730/GUN_NAME%20%7C%20SKIN_NAME%20%28WEAR%29

    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th scope="col">Weapon</th>
                    <th scope="col">Skin</th>
                    <th scope="col">Wear</th>
                    <th scope="col">Picture</th>
                    
                </tr>
            </thead>
            <tbody id="skinTable">{renderTable()}</tbody>
        </table>
    );
};

export default SkinTable;
