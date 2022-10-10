let i = 0
document.getElementById("dd-btn").addEventListener("click", function () {
    document.getElementById("nav-dropdown").style.display = "flex"
    i = 2
})
document.getElementById("dd-btn").addEventListener("mouseover", function () {
    if (i == 0) {
        document.getElementById("nav-dropdown").style.display = "flex"
        i = 1
    }
})
document.getElementById("nav-dropdown").addEventListener("mouseover", function () {
    document.getElementById("nav-dropdown").style.display = "flex"
})
document.getElementById("dd-btn").addEventListener("mouseout", function () {
    if (i == 1) {
        document.getElementById("nav-dropdown").style.display = "none"
        i = 0
    }
})
window.onclick = function (event) {
    if (!event.target.matches('#dd-btn')) {
        document.getElementById("nav-dropdown").style.display = "none"
        i = 0
    }
}


document.getElementById("cf_controls").addEventListener("click", function (event) {
    if (document.getElementById('1.1').checked==false) {
        document.getElementById("i1").classList.remove("opaque")
        document.getElementById("i1").classList.add("transparent")
    }
    if (document.getElementById('1.2').checked==false) {
        document.getElementById("i2").classList.remove("opaque")
        document.getElementById("i2").classList.add("transparent")
    }
    if (document.getElementById('1.3').checked==false) {
        document.getElementById("i3").classList.remove("opaque")
        document.getElementById("i3").classList.add("transparent")
    }
    if (document.getElementById('1.4').checked==false) {
        document.getElementById("i4").classList.remove("opaque")
        document.getElementById("i4").classList.add("transparent")
    }
})
document.getElementById("cf_controls").addEventListener("click", function (event) {
    if (document.getElementById('1.1').checked) {
    document.getElementById("i1").classList.add("opaque")
    document.getElementById("i1").classList.remove("transparent")
    }
    if (document.getElementById('1.2').checked) {
    document.getElementById("i2").classList.add("opaque")
    document.getElementById("i2").classList.remove("transparent")
    }
    if (document.getElementById('1.3').checked) {
    document.getElementById("i3").classList.add("opaque")
    document.getElementById("i3").classList.remove("transparent")
    }
    if (document.getElementById('1.4').checked) {
    document.getElementById("i4").classList.add("opaque")
    document.getElementById("i4").classList.remove("transparent")
    }
})