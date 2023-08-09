import { useState } from "react";

const FloatSlider = ({ data, onSliderChange }) => {
    const { min_wear, max_wear, wear } = data;
    const [currentWear, setCurrentWear] = useState(wear);

    const handleChange = (event) => {
        const newWear = parseFloat(event.target.value);
        setCurrentWear(newWear);
        onSliderChange(newWear);
    };

    const getLabel = (wear) => {
        if (wear < 0.07) return "FN";
        if (wear < 0.15) return "MW";
        if (wear < 0.38) return "FT";
        if (wear < 0.45) return "WW";
        if (wear < 1) return "BS";
    };


    return (
        <div className="float-slider">
            <input className="slider"
                type="range"
                min={min_wear}
                max={max_wear}
                step="0.001"
                value={currentWear}
                onChange={handleChange}
                color="secondary"
            />
            <span className="current-wear">
                {currentWear} {getLabel(currentWear)}
            </span>
        </div>
    );
};

export default FloatSlider;
