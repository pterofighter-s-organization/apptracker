
export const ifCloseMenu = (event, id) => {
    const dropdownNavbarElement = document.getElementById(id)
    const target = event.target;

    return (dropdownNavbarElement && !dropdownNavbarElement.contains(target))
}