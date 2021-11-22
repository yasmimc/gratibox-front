function getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem("gratiboxUser"));
}

function setLocalStorage(value) {
    localStorage.setItem("gratiboxUser", JSON.stringify(value));
}

function clearLocalStorage() {
    localStorage.removeItem("gratiboxUser");
}

export { getUserFromLocalStorage, setLocalStorage, clearLocalStorage };
