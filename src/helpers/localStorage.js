function getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem("gratiboxUser"));
}

function setLocalStorage(value) {
    localStorage.setItem("gratiboxUser", JSON.stringify(value));
}

export { getUserFromLocalStorage, setLocalStorage };
