// Logout the user from firebase authentication
function logoutUser() {
    firebase.auth().signOut()
    window.location.href="index.html";
}

// Show all elements in the array of itemsToShow
function showItems(itemsToShow) {
    for (let itemToShow of itemsToShow) {
        let element = document.getElementById(itemToShow)
        if (element) {
            element.style.display = "inline-block"
        }
    }
}

// Hide all elements in the array of itemsToHide
function hideItems(itemsToHide) {
    for (let itemToHide of itemsToHide) {
        let element = document.getElementById(itemToHide)
        if (element) {
            element.style.display = "none"
        }
    }
}

// Setup listener for firebase authentication state change. Hide information if the user
// is not logged in and show certain information if they are logged in.
firebase.auth().onAuthStateChanged(user => {
    let itemsToHideWhenNotLoggedIn = ["userProfileMenu", "otherResourcesButton", "infographics"]
    let itemsToHideWhenLoggedIn = ["signUpButton", "signInButton"]
    if (user) {
        showItems(itemsToHideWhenNotLoggedIn)
        hideItems(itemsToHideWhenLoggedIn)
    } else {
        showItems(itemsToHideWhenLoggedIn)
        hideItems(itemsToHideWhenNotLoggedIn)
    }
})
