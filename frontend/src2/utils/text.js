
export function textFormat (str) {
    //capitalize every first letter of the text
    return str.replace(/\b\w/g, letter => letter.toUpperCase());
}
