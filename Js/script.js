let menuBtn = document.getElementById("menu-btn")
let sideNav = document.getElementById("side-nav")

sideNav.style.right = "-250px"

menuBtn.onclick = () => {
    if (sideNav.style.right === "0px") {
        sideNav.style.right = "-250px"
    } else {
        sideNav.style.right = "0px"
    }
}