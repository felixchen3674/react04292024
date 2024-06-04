import {useState} from "react";
import "./style.css";

interface ColorPickerProps {
    initialSelectedColor : string;
    colorPickerOptions: string[];
}

 const ColorPicker : React.FC<ColorPickerProps> = ({initialSelectedColor, colorPickerOptions}) => {
    const [selectedColor, setSelectedColor] = useState(initialSelectedColor);

    const handleColorClick = (color : string) => {
        setSelectedColor(color);
    }

    return (
        <div className = "color-picker">
            <div>Color Picker</div>
            <div className = "selected-color" style = {{backgroundColor :selectedColor }}/>
            <div className = "color-options">
                {colorPickerOptions.map((color) => {
                    return (
                        <div
                        key={color}
                        onClick={() => handleColorClick(color)}
                        className="color-option"
                        style={{ backgroundColor: color }}
                      />
                    );
                 })}
            </div>
        </div>
    );
}

export default ColorPicker;