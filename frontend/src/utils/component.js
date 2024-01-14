

//pure function where component gives a color and give back the color contrast to it.
//always giving same output for the same input. And doesn't change anything outside of it.
export const getContrastTextColor = (hexColor) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
}

export const isFirstCharacterDigit = (str) => {
    // Check if the first character is a digit
    return /^\d/.test(str);
}