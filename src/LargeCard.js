import { rarityColors } from "./constants";
import LargeCardPicture from "./LargeCardPicture";
import FloatSlider from "./FloatSlider";
import { useState, useEffect } from "react";

const LargeCard = ({
    isOpen,
    onClose,
    data,
    onSkinWearChange,
    activeNavItem,
    onStatTrakChange,
}) => {
    const [checked, setChecked] = useState(false);
    const [initialStattrak, setInitialStattrak] = useState(false);

    const handleOverlayClick = (event) => {
        // Prevent the click from propagating to the modal content
        event.stopPropagation();

        if (event.target.classList.contains("large-card-overlay")) {
            // Close the LargeCard
            onClose();
        }
    };

    useEffect(() => {
        if (data) {
            setInitialStattrak(data.stattrak || false);
            setChecked(false);
        }
    }, [data]);

    const handleCheckboxChange = () => {
        if (initialStattrak) {
            setChecked(!checked);
            handleStatTrakChange(!checked);
        }
    };

    if (!data) {
        // Handle the case when data is not available yet
        return (
            <div
                className={`large-card-overlay ${isOpen ? "open" : ""}`}
                onClick={handleOverlayClick}
            ></div>
        );
    }

    const fullNameWear = (wear) => {
        if (wear < 0.07) return "Factory%20New";
        if (wear < 0.15) return "Minimal%20Wear";
        if (wear < 0.38) return "Field-Tested";
        if (wear < 0.45) return "Well-Worn";
        if (wear < 1) return "Battle-Scarred";
    };

    const { name, skin, min_wear, max_wear, wear, picture, rarity } = data;

    const handleSliderChange = (newWear) => {
        // Update the wear value of the data object
        const updatedData = { ...data, wear: newWear };
        onSkinWearChange(updatedData, activeNavItem); // Pass the updated data back to App
    };
    const handleStatTrakChange = (newST) => {
        //check if stattrak is true or false
        data.stattrak = newST;
        const updatedData = { ...data, stattrak: newST };
        onStatTrakChange(updatedData, activeNavItem);
    };

    const toggle = (value) => {
        handleStatTrakChange(!checked);
        return !value;
    };

    const rarityColor = rarityColors[rarity] || "#b0c3d9";
    const getRarityClass = (rarity) => {
        return rarity.toLowerCase().replace(/\s/g, "-");
    };

    if (skin !== "") {
        const skinParts = skin.split("|");

        var itemName = name;
        const skinNameElements = skinParts[1].split(" ") || [];
        const skinName = skinNameElements.join("%20");
        const fullName = fullNameWear(wear);

        if (name === "Knife" || name === "Glove") {
            const s = skinParts[0].split(" ") || [];
            s.pop();
            itemName = s.join("%20");
        }

        const steamMarketLinkBase =
            "https://steamcommunity.com/market/listings/730/";
        const hashName = `${itemName}%20%7C${skinName}%20%28${fullName}%29`;
        var stattrack = "";
        if (checked === true) {
            stattrack = "StatTrak™%20";
        }
        var steamMarketLink = steamMarketLinkBase + stattrack + hashName;
    }

    const openExternalLink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div
            className={`large-card-overlay ${isOpen ? "open" : ""}`}
            onClick={handleOverlayClick} // Close when clicking on the overlay
        >
            <div className="large-card">
                <div
                    className="large-card-content"
                    style={{ borderColor: rarityColor }}
                >
                    <div className="large-card-details">
                        {/* Render your content here */}
                        <h2>
                            {name === "Glove" || name === "Knife"
                                ? skin.split("|")[0]
                                : name}
                        </h2>

                        <h3>{skin.split("|")[1]}</h3>
                        <LargeCardPicture data={{ picture: picture }} />
                        {wear !== "" ? (
                            <FloatSlider
                                data={{
                                    min_wear: min_wear,
                                    max_wear: max_wear,
                                    wear: wear,
                                }}
                                onSliderChange={(newWear) =>
                                    handleSliderChange(newWear)
                                }
                            />
                        ) : null}

                        <div className="customCheckBoxHolder">
                            <input
                                type="checkbox"
                                id="cCB1"
                                className="customCheckBoxInput"
                                //checked = {checked === true && data.stattrak === true ? true : false}
                                checked={checked}
                                onChange={handleCheckboxChange}
                                disabled={!initialStattrak}
                            />
                            <label
                                htmlFor="cCB1"
                                className="customCheckBoxWrapper"
                            >
                                <div className="customCheckBox">
                                    <div className="inner">StatTrak</div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <button
                        className="shop-button"
                        onClick={() => openExternalLink(steamMarketLink)}
                    >
                        Shop
                    </button>

                    <button
                        className={`large-card-close ${getRarityClass(rarity)}`}
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LargeCard;

//SUPPORT SOUVENIR SKINS
