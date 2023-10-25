const Navbar = ({ activeNavItem, handleCategoryClick }) => {
    return (
        <div className="navbar-container">
        <nav className="navbar">

            <ul className="topNav">
                <li className={activeNavItem === "pistol" ? "active-section" : ""}>
                    <a
                        className={activeNavItem === "pistol" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("pistol")}
                        data-category="pistol"
                    >
                        Pistols
                    </a>
                </li>
                <li className={activeNavItem === "rifle" ? "active-section" : ""}>
                    <a
                        className={activeNavItem === "rifle" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("rifle")}
                        data-category="rifle"
                    >
                        Rifles
                    </a>
                </li>
                <li className={activeNavItem === "smg" ? "active-section" : ""}>
                    <a
                        className={activeNavItem === "smg" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("smg")}
                        data-category="smg"
                    >
                        SMGs
                    </a>
                </li>
                <li className={activeNavItem === "heavy" ? "active-section" : ""}v>
                    <a
                        className={activeNavItem === "heavy" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("heavy")}
                        data-category="heavy"
                    >
                        Heavy
                    </a>
                </li>
                <li className={activeNavItem === "knife" ? "active-section" : ""}>
                    <a
                        className={activeNavItem === "knife" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("knife")}
                        data-category="knife"
                    >
                        Knives
                    </a>
                </li>
                <li className={activeNavItem === "gloves" ? "active-section" : ""}>
                    <a
                        className={activeNavItem === "gloves" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("gloves")}
                        data-category="gloves"
                    >
                        Gloves
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;
