/* eslint-disable */
import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Search from "./Search";
import ShowMoreItem from "./ShowMoreItem";
import Card from "./Card";
import LargeCard from "./LargeCard";

function App() {
    const PISTOL_STATE = [
        {
            name: "Glock-18",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/glock-18.png?id=a3468edc70da7cd5514f07a23eb61588",
        },
        {
            name: "USP-S",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/usp-s.png?id=8ff2ab04e4ded54d41a01feec116e887",
        },
        {
            name: "P2000",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/p2000.png?id=193fe956f19d349803575b7c6d87da1b",
        },
        {
            name: "P250",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/p250.png?id=a1aa04925149aa3319dd712b0360e589",
        },
        {
            name: "Dual Berettas",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/dual_berettas.png?id=5207762ef8d8501218df61e4f199a9a8",
        },
        {
            name: "Five-SeveN",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/five-seven.png?id=7c60a2ca2eda5db80b99d3809fd4a47f",
        },
        {
            name: "Tec-9",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/tec-9.png?id=2ef30b09986c479742339646d99d71c5",
        },
        {
            name: "CZ75-Auto",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/cz75-auto.png?id=906690cbb6099d9f06895cfc72e86d4c",
        },
        {
            name: "Desert Eagle",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/desert_eagle.png?id=e1033024c8e10e40a422e949374ddaa2",
        },
        {
            name: "R8 Revolver",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/r8_revolver.png?id=623cba82e3a0b46784d8a48a9a0a1169",
        },
    ];
    const RIFLE_STATE = [
        {
            name: "AK-47",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/ak-47.png?id=6b3ac6f25c1ff8c21d729aeb6c8eea23",
        },
        {
            name: "M4A4",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/m4a4.png?id=3c9929dbc33a1464183ed7224b9a7f55",
        },
        {
            name: "M4A1-S",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/m4a1-s.png?id=298232d28bc7da41cc25ab576c1f125c",
        },
        {
            name: "FAMAS",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/famas.png?id=e0978c99664a9d2d285b93c0ad36b107",
        },
        {
            name: "Galil AR",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/galil_ar.png?id=ff88a1eb3f5269ee5341eb38134a37be",
        },
        {
            name: "AUG",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/aug.png?id=159720bd37e34dd220b25ff32c50f983",
        },
        {
            name: "SG 553",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/sg_553.png?id=fc15e977f96caaa7ccaef9d86c7a0f88",
        },
        {
            name: "AWP",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/awp.png?id=00d0e0b5e597397dd33a40d83e433b87",
        },
        {
            name: "SSG 08",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/ssg_08.png?id=b4df026dc6d749be94d870dd8700b354",
        },
        {
            name: "G3SG1",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/g3sg1.png?id=25b6acc71a207a6e69f3eaeb1b8cf581",
        },
        {
            name: "SCAR-20",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/scar-20.png?id=b262cd48f3a26c76120685e446f0d4c3",
        },
    ];
    const SMG_STATE = [
        {
            name: "MP9",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/mp9.png?id=8558b80ad9442cd09f0e0d0bf3a3666d",
        },
        {
            name: "MAC-10",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/mac-10.png?id=5e26a7076c9151d73c88e64289e70414",
        },
        {
            name: "MP7",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/mp7.png?id=411797477e27d3063046b1f85d834429",
        },
        {
            name: "MP5-SD",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/mp5-sd.png?id=cc69110a0bb5ef43edcc25d5e9a6d41a",
        },
        {
            name: "UMP-45",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/ump-45.png?id=733acf0ca0853469bf533b66f173cabf",
        },
        {
            name: "PP-Bizon",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/pp-bizon.png?id=c776e4b858dac563bd2803af799fb5ab",
        },
        {
            name: "P90",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/p90.png?id=d5c2a92036ee86b15841ccc55f72bcca",
        },
    ];
    const HEAVY_STATE = [
        {
            name: "MAG-7",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/mag-7.png?id=53075f154ec9766ed00f3b285954a54a",
        },
        {
            name: "Nova",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/nova.png?id=1c117a08fc3601d724cc5072b6c122aa",
        },
        {
            name: "Sawed-Off",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/sawed-off.png?id=a98d36f07227fe122fcc32b808a805b7",
        },
        {
            name: "XM1014",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/xm1014.png?id=1bfda6c7fa93cd1958391cf0d0388fd7",
        },
        {
            name: "M249",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/m249.png?id=316a5cc20e9731c58c9c6eda81ed434c",
        },
        {
            name: "Negev",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://csgostash.com/img/weapons/512x384/negev.png?id=b7e83295dc0e75afff2f5bd5e722ad4a",
        },
    ];
    const KNIFE_STATE = [
        {
            name: "Knife",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture: "https://images.shoutwiki.com/src-ents/0/05/Csgo_t.png",
        },
    ];
    const GLOVES_STATE = [
        {
            name: "Glove",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            rarity: "",
            stattrak: "",
            picture:
                "https://static.wikia.nocookie.net/cswikia/images/0/06/Csgo_Ct_gloves.png/",
        },
    ];
    let skinsData = null;

    const [activeNavItem, setActiveNavItem] = useState("pistol");
    const [showMoreItem, setShowMoreItem] = useState(false);

    const [pistolState, setPistolState] = useState(PISTOL_STATE);
    const [rifleState, setRifleState] = useState(RIFLE_STATE);
    const [smgState, setSmgState] = useState(SMG_STATE);
    const [heavyState, setHeavyState] = useState(HEAVY_STATE);
    const [knifeState, setKnifeState] = useState(KNIFE_STATE);
    const [glovesState, setGlovesState] = useState(GLOVES_STATE);

    const [largeCardSkin, setLargeCardSkin] = useState(null);

    const [tableKey, setTableKey] = useState(Date.now());

    function editDoppler(pattern) {
        if (pattern == 418 || pattern == 569) {
            return " - Phase 1";
        } else if (pattern == 419 || pattern == 570) {
            return " - Phase 2";
        } else if (pattern == 420 || pattern == 571) {
            return " - Phase 3";
        } else if (pattern == 421 || pattern == 572) {
            return " - Phase 4";
        } else if (pattern == 415) {
            return " - Ruby";
        } else if (pattern == 416) {
            return " - Sapphire";
        } else if (pattern == 417) {
            return " - Black Pearl";
        } else if (pattern == 568) {
            return " - Emerald";
        } else {
            return "";
        }
    }

    function getSkins() {
        if (skinsData) {
            return Promise.resolve(skinsData);
        } else {
            return fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json")
                .then((response) => response.json())
                .then((data) => {
                    skinsData = data;
                    return skinsData;
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }

    function gunType(weapon) {
        let weaponName = weapon.name;
        if (typeof weaponName !== 'string') {
            console.error('Invalid weapon type:', weaponName);
            return null;
        }
    
        const pistols = ["Glock-18", "USP-S", "P2000", "P250", "Dual Berettas", "Five-SeveN", "Tec-9", "CZ75-Auto", "Desert Eagle", "R8 Revolver"];
        const rifles = ["AK-47", "M4A4", "M4A1-S", "FAMAS", "Galil AR", "AUG", "SG 553", "AWP", "SSG 08", "G3SG1", "SCAR-20"];
        const smgs = ["MP9", "MAC-10", "MP7", "MP5-SD", "UMP-45", "PP-Bizon", "P90"];
        const heavies = ["Nova", "XM1014", "MAG-7", "Sawed-Off", "Negev", "M249"];
    
        if (pistols.includes(weaponName)) return "pistol";
        if (rifles.includes(weaponName)) return "rifle";
        if (smgs.includes(weaponName)) return "smg";
        if (heavies.includes(weaponName)) return "heavy";
    
        if (weaponName && typeof weaponName === 'string') {
            if (weaponName.includes("Knife") || weaponName.includes("Bayonet") || weaponName.includes("Karambit") || weaponName.includes("Daggers")) {
                return "knife";
            }
            if (weaponName.includes("Gloves") || weaponName.includes("Hand Wraps") || weaponName.includes("Sport Gloves")) {
                return "gloves";
            }
        }
    
        return null;
    }
    

    function searchSkin(numSearchItems) {
        const searchInput = document
            .getElementById("searchInput")
            .value.toLowerCase();
        const searchResults = document.getElementById("searchResults");
    
        // Reset the result counter when a new search term is entered
        let resultCounter = 0;
    
        setShowMoreItem(false);
    
        getSkins().then((skins) => {
            // Filter skins based on the search input
            const matchingItems = skins.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]/gi, "")
                    .includes(searchInput.replace(/[^a-z0-9]/gi, ""))
            );
    
            // Clear the search results container before displaying new results
            if (resultCounter === 0) {
                searchResults.innerHTML = "";
            }
    
            if (matchingItems.length > 0) {
                const newItems = matchingItems.slice(resultCounter, numSearchItems);
    
                // Append new items to search results
                newItems.forEach((item) => {
                    const resultItem = document.createElement("div");
                    const n = item.name;
    
                    resultItem.textContent = item.name.includes("Doppler")
                        ? n + editDoppler(item.paint_index)
                        : n;
    
                    const skinImage = document.createElement("img");
                    skinImage.src = item.image;
                    skinImage.classList.add("skinImage");
                    skinImage.alt = resultItem.textContent;
    
                    const figCaption = document.createElement("figcaption");
                    figCaption.textContent = resultItem.textContent;
    
                    const figure = document.createElement("figure");
                    figure.appendChild(skinImage);
                    figure.appendChild(figCaption);
    
                    figure.addEventListener("click", () => {
                        if (figure.classList.contains("selected")) {
                            figure.classList.remove("selected");
                            updateState(item, null);
                        } else {
                            const prevSelected = document.querySelector(".selected");
                            if (prevSelected) {
                                prevSelected.classList.remove("selected");
                            }
                            figure.classList.add("selected");
                            updateState(item, gunType(item.weapon));
                            handleCategoryClick(gunType(item.weapon));
                        }
                    });
    
                    searchResults.appendChild(figure);
                    resultCounter++;
                });
    
                // Show or hide the "Show More" button
                if (resultCounter >= matchingItems.length) {
                    setShowMoreItem(false); // Hide if all items are shown
                } else {
                    setShowMoreItem(true); // Show if more items are available
                }
            } else {
                searchResults.textContent = "No results found";
                setShowMoreItem(false); // Hide the "Show More" button
            }
        });
    }
    
    
    


    const dataToStore = {};

    const updateState = (selectedSkin, category) => {
        switch (category) {
            case "pistol":
                setPistolState((prevState) =>
                    prevState.map((item) =>
                        selectedSkin.name.includes(item.name)
                            ? {
                                  ...item,
                                  skin:
                                      selectedSkin.name +
                                      editDoppler(selectedSkin.paint_index),
                                  min_wear: selectedSkin.min_float,
                                  max_wear: selectedSkin.max_float,
                                  wear: selectedSkin.min_float,
                                  rarity: selectedSkin.rarity,
                                  stattrak: selectedSkin.stattrak,
                                  picture: selectedSkin.image,
                              }
                            : item
                    )
                );

                break;
            case "rifle":
                setRifleState((prevState) =>
                    prevState.map((item) =>
                        selectedSkin.name.includes(item.name)
                            ? {
                                  ...item,
                                  skin: selectedSkin.name,
                                  min_wear: selectedSkin.min_float,
                                  max_wear: selectedSkin.max_float,
                                  wear: selectedSkin.min_float,
                                  rarity: selectedSkin.rarity,
                                  stattrak: selectedSkin.stattrak,
                                  picture: selectedSkin.image,
                              }
                            : item
                    )
                );
                break;
            case "smg":
                setSmgState((prevState) =>
                    prevState.map((item) =>
                        selectedSkin.name.includes(item.name)
                            ? {
                                  ...item,
                                  skin: selectedSkin.name,
                                  min_wear: selectedSkin.min_float,
                                  max_wear: selectedSkin.max_float,
                                  wear: selectedSkin.min_float,
                                  rarity: selectedSkin.rarity,
                                  stattrak: selectedSkin.stattrak,
                                  picture: selectedSkin.image,
                              }
                            : item
                    )
                );
                break;
            case "heavy":
                setHeavyState((prevState) =>
                    prevState.map((item) =>
                        selectedSkin.name.includes(item.name)
                            ? {
                                  ...item,
                                  skin: selectedSkin.name,
                                  min_wear: selectedSkin.min_float,
                                  max_wear: selectedSkin.max_float,
                                  wear: selectedSkin.min_float,
                                  rarity: selectedSkin.rarity,
                                  stattrak: selectedSkin.stattrak,
                                  picture: selectedSkin.image,
                              }
                            : item
                    )
                );
                break;
            case "knife":
                setKnifeState((prevState) =>
                    prevState.map((item) => {
                        return {
                            ...item,
                            skin:
                                selectedSkin.name +
                                editDoppler(selectedSkin.paint_index),
                            min_wear: selectedSkin.min_float,
                            max_wear: selectedSkin.max_float,
                            wear: selectedSkin.min_float,
                            rarity: selectedSkin.rarity,
                            stattrak: selectedSkin.stattrak,
                            picture: selectedSkin.image,
                        };
                    })
                );
                break;
            case "gloves":
                setGlovesState((prevState) =>
                    prevState.map((item) => {
                        return {
                            ...item,
                            skin: selectedSkin.name,
                            min_wear: selectedSkin.min_float,
                            max_wear: selectedSkin.max_float,
                            wear: selectedSkin.min_float,
                            rarity: selectedSkin.rarity,
                            stattrak: selectedSkin.stattrak,
                            picture: selectedSkin.image,
                        };
                    })
                );
                break;
            default:
                break;
        }
        setTableKey(Date.now());
    };

    /*
skins have:
id
name
description
weapon
pattern
min_float
max_float
rarity
stattrak
image
*/
    const handleCategoryClick = (category) => {
        setActiveNavItem(category);
    };

    const getCategoryState = () => {
        switch (activeNavItem) {
            case "pistol":
                return pistolState;
            case "rifle":
                return rifleState;
            case "smg":
                return smgState;
            case "heavy":
                return heavyState;
            case "knife":
                return knifeState;
            case "gloves":
                return glovesState;
            default:
                return [];
        }
    };

    const handleSkinWearChange = (updatedData, activeNavItem) => {
        // Identify the appropriate category state based on activeNavItem
        let categoryStateToUpdate;
        switch (activeNavItem) {
            case "pistol":
                categoryStateToUpdate = pistolState;
                break;
            case "rifle":
                categoryStateToUpdate = rifleState;
                break;
            case "smg":
                categoryStateToUpdate = smgState;
                break;
            case "heavy":
                categoryStateToUpdate = heavyState;
                break;
            case "knife":
                categoryStateToUpdate = knifeState;
                break;
            case "gloves":
                categoryStateToUpdate = glovesState;
                break;
            default:
                return;
        }

        // Find the index of the updated item within the category state
        const updatedItemIndex = categoryStateToUpdate.findIndex(
            (item) => item.name === updatedData.name
        );
        if (updatedItemIndex !== -1) {
            // Replace the old item with the updated item in the category state
            categoryStateToUpdate[updatedItemIndex] = updatedData;

            // Update the corresponding category state in the main state
            switch (activeNavItem) {
                case "pistol":
                    setPistolState([...categoryStateToUpdate]);
                    break;
                case "rifle":
                    setRifleState([...categoryStateToUpdate]);
                    break;
                case "smg":
                    setSmgState([...categoryStateToUpdate]);
                    break;
                case "heavy":
                    setHeavyState([...categoryStateToUpdate]);
                    break;
                case "knife":
                    setKnifeState([...categoryStateToUpdate]);
                    break;
                case "gloves":
                    setGlovesState([...categoryStateToUpdate]);
                    break;
                default:
                    break;
            }
        }
    };

    const chopGunName = (skin) => {
        return skin.split("|")[1];
    };

    const openLargeCard = (skin) => {
        setLargeCardSkin(skin);
    };
    const closeLargeCard = () => {
        setLargeCardSkin(null);
    };

    const handleLooseSiteClick = (event) => {
        const isSearchBar = event.target.closest(".input-container");
        if (!isSearchBar) {
            const searchOverlay = document.querySelector(".search-overlay");
            searchOverlay.classList.remove("active");
        }
    };

    return (
        <div className="body" onClick={handleLooseSiteClick}>
            <div className="header-container">
                <Header />
                <div>
                    <Navbar
                        activeNavItem={activeNavItem}
                        handleCategoryClick={handleCategoryClick}
                    />
                </div>
                <div className="searcher">
                    <Search
                        searchSkin={searchSkin}
                        activeShowMoreItem={showMoreItem}
                    />
                </div>
            </div>

            <div id="main">
                <article>
                    {getCategoryState().map((item, index) => (
                        <Card
                            key={index}
                            data={{
                                weapon: item.name,
                                skin: chopGunName(item.skin),
                                rarity: item.rarity,
                                picture: item.picture,
                                stattrak: item.stattrak,
                                pictureLink: item.pictureLink,
                            }}
                            onCardClick={() => openLargeCard(item)} // Open modal when card is clicked
                        />
                    ))}
                </article>
                <LargeCard
                    isOpen={largeCardSkin !== null}
                    onClose={closeLargeCard}
                    data={largeCardSkin}
                    onSkinWearChange={handleSkinWearChange} // Pass the callback to LargeCard
                    activeNavItem={activeNavItem}
                    onStatTrakChange={handleSkinWearChange}
                />
            </div>
        </div>
    );
}

export default App;
