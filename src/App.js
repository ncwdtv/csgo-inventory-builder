/* eslint-disable */
import { useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import SkinTable from "./SkinTable";
import Search from "./Search";
function App() {
    const PISTOL_STATE = [
        {
            name: "Glock-18",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "USP-S",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "P2000",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "P250",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Dual Berettas",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Five-SeveN",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Tec-9",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "CZ75-Auto",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Desert Eagle",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "R8 Revolver",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
    ];
    const RIFLE_STATE = [
        {
            name: "AK-47",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "M4A4",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "M4A1",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "FAMAS",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Galil AR",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "AUG",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "SG 553",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "AWP",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "SSG 08",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "G3SG1",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "SCAR-20",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
    ];
    const SMG_STATE = [
        {
            name: "MP9",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "MAC-10",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "MP7",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "MP5-SD",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "UMP-45",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "PP-Bizon",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "P90",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
    ];
    const HEAVY_STATE = [
        {
            name: "MAG-7",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Nova",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Sawed-Off",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "XM1014",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "M249",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
        {
            name: "Negev",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
    ];
    const KNIFE_STATE = [
        {
            name: "Knife",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
    ];
    const GLOVES_STATE = [
        {
            name: "Glove",
            skin: "",
            min_wear: "",
            max_wear: "",
            wear: "",
            picture: "",
        },
    ];
    let skinsData = null;
    const [activeNavItem, setActiveNavItem] = useState("pistol");

    const [pistolState, setPistolState] = useState(PISTOL_STATE);
    const [rifleState, setRifleState] = useState(RIFLE_STATE);
    const [smgState, setSmgState] = useState(SMG_STATE);
    const [heavyState, setHeavyState] = useState(HEAVY_STATE);
    const [knifeState, setKnifeState] = useState(KNIFE_STATE);
    const [glovesState, setGlovesState] = useState(GLOVES_STATE);

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
        const pistols = [
            "Glock-18",
            "USP-S",
            "P2000",
            "P250",
            "Dual Berettas",
            "Five-SeveN",
            "Tec-9",
            "CZ75-Auto",
            "Desert Eagle",
            "R8 Revolver",
        ];
        const rifles = [
            "AK-47",
            "M4A4",
            "M4A1",
            "FAMAS",
            "Galil AR",
            "AUG",
            "SG 553",
            "AWP",
            "SSG 08",
            "G3SG1",
            "SCAR-20",
        ];
        const smgs = [
            "MP9",
            "MAC-10",
            "MP7",
            "MP5-SD",
            "UMP-45",
            "PP-Bizon",
            "P90",
        ];
        const heavies = [
            "Nova",
            "XM1014",
            "MAG-7",
            "Sawed-Off",
            "Negev",
            "M249",
        ];
        if (pistols.includes(weapon)) {
            return "pistol";
        } else if (rifles.includes(weapon)) {
            return "rifle";
        } else if (smgs.includes(weapon)) {
            return "smg";
        } else if (heavies.includes(weapon)) {
            return "heavy";
        } else if (
            weapon.includes("Knife") ||
            weapon.includes("Bayonet") ||
            weapon.includes("Karambit") ||
            weapon.includes("Daggers")
        ) {
            return "knife";
        } else if (
            weapon.includes("Gloves") ||
            weapon.includes("Hand Wraps") ||
            weapon.includes("Sport Gloves")
        ) {
            return "gloves";
        }
    }


    function searchSkin() {
        //can improve. like when I type G i want to see glock skins first
        const searchInput = document
            .getElementById("searchInput")
            .value.toLowerCase();
        const searchResults = document.getElementById("searchResults");

        searchResults.innerHTML = "";

        getSkins().then((skins) => {
            if (searchInput !== "") {
                const matchingItems = skins.filter((item) =>
                    item.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]/gi, "")
                        .includes(searchInput.replace(/[^a-z0-9]/gi, ""))
                );

                if (matchingItems.length > 0) {
                    matchingItems.forEach((item) => {
                        var n = item.name;
                        const resultItem = document.createElement("div");
                        if (item.name.includes("Doppler")) {
                            resultItem.textContent =
                                n + editDoppler(item.paint_index);
                        } else {
                            resultItem.textContent = n;
                        }
                        const skinImage = document.createElement("img");
                        skinImage.src = item.image;
                        skinImage.classList.add("skinImage");
                        skinImage.alt = resultItem.textContent;
                        const figCaption = document.createElement("figcaption");
                        figCaption.style.color = "white";
                        figCaption.textContent = resultItem.textContent;
                        const figure = document.createElement("figure");
                        figure.appendChild(skinImage);
                        figure.appendChild(figCaption);

                        figure.addEventListener("click", () => {
                            if (figure.classList.contains("selected")) {
                                figure.classList.remove("selected");
                                updateState(item, null);
                            } else {
                                const prevSelected =
                                    document.querySelector(".selected");
                                if (prevSelected) {
                                    prevSelected.classList.remove("selected");
                                }
                                figure.classList.add("selected");
                                //selected

                                updateState(item, gunType(item.weapon));
                                handleCategoryClick(gunType(item.weapon));
                            }
                        });

                        searchResults.appendChild(figure);
                    });
                } else {
                    searchResults.textContent = "No results found";
                }
            }
        });
    }

    const updateState = (selectedSkin, category) => {
        switch (category) {
            case "pistol":
                setPistolState((prevState) =>
                    prevState.map((item) =>
                        selectedSkin.name.includes(item.name)
                            ? {
                                  ...item,
                                  skin: (selectedSkin.name + editDoppler(selectedSkin.paint_index)),
                                  min_wear: selectedSkin.min_float,
                                  max_wear: selectedSkin.max_float,
                                  wear: selectedSkin.min_float,
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
                            skin: (selectedSkin.name + editDoppler(selectedSkin.paint_index)),
                            min_wear: selectedSkin.min_float,
                            max_wear: selectedSkin.max_float,
                            wear: selectedSkin.min_float,
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



    const handleSkinWearChange = (updatedData) => {
        switch (activeNavItem) {
            case "pistol":
                setPistolState(updatedData);
                break;
            case "rifle":
                setRifleState(updatedData);
                break;
            case "smg":
                setSmgState(updatedData);
                break;
            case "heavy":
                setHeavyState(updatedData);
                break;
            case "knife":
                setKnifeState(updatedData);
                break;
            case "gloves":
                setGlovesState(updatedData);
                break;

            default:
                break;
        }
    };

    return (
        <div className="body" >
            <header>
                <Header />
                <div>
                    <Navbar
                        activeNavItem={activeNavItem}
                        handleCategoryClick={handleCategoryClick}
                    />
                </div>
            </header>

            <div id="main">
                <article>
                    <SkinTable
                        key={tableKey}
                        data={
                            activeNavItem === "pistol"
                                ? pistolState
                                : activeNavItem === "rifle"
                                ? rifleState
                                : activeNavItem === "smg"
                                ? smgState
                                : activeNavItem === "heavy"
                                ? heavyState
                                : activeNavItem === "knife"
                                ? knifeState
                                : activeNavItem === "gloves"
                                ? glovesState
                                : []
                        }
                        onSkinWearChange={handleSkinWearChange} // Pass the callback to SkinTable
                    />
                </article>

                <div className="searcher">
                    <Search searchSkin={searchSkin} />
                </div>
            </div>
        </div>
    );
}

export default App;


