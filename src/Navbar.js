const Navbar = ({ activeNavItem, handleCategoryClick }) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a
                        className={activeNavItem === "pistol" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("pistol")}
                        data-category="pistol"
                    >
                        Pistols
                    </a>
                </li>
                <li>
                    <a
                        className={activeNavItem === "rifle" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("rifle")}
                        data-category="rifle"
                    >
                        Rifles
                    </a>
                </li>
                <li>
                    <a
                        className={activeNavItem === "smg" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("smg")}
                        data-category="smg"
                    >
                        SMGs
                    </a>
                </li>
                <li>
                    <a
                        className={activeNavItem === "heavy" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("heavy")}
                        data-category="heavy"
                    >
                        Heavy
                    </a>
                </li>
                <li>
                    <a
                        className={activeNavItem === "knife" ? "active" : ""}
                        href="/#"
                        onClick={() => handleCategoryClick("knife")}
                        data-category="knife"
                    >
                        Knives
                    </a>
                </li>
                <li>
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
    );
};

export default Navbar;
