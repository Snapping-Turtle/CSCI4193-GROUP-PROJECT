function logoutUser() {
    firebase.auth().signOut()
    window.location.href="index.html";
}

function showItems(itemsToShow) {
    for (let itemToShow of itemsToShow) {
        document.getElementById(itemToShow).style.display = "inline-block";
    }
}

function hideItems(itemsToHide) {
    for (let itemToHide of itemsToHide) {
        document.getElementById(itemToHide).style.display = "none";
    }
}
