function backgroudColorChange() {
    document.getElementById("phrases-list").style.backgroundColor = document.getElementById("backgroud-color-change").value;
    localStorage.setItem();
}

function colorChange() {
    document.getElementById("phrases-list").style.color = document.getElementById("color-change").value;
    localStorage.setItem();
}

function sizeChange() {
    document.getElementById("phrases-list").style.fontSize = document.getElementById("size-change").value;
    localStorage.setItem();
}

function lineHeightChange() {
    document.getElementById("phrases-list").style.lineHeight = document.getElementById("line-height-change").value;
    localStorage.setItem();
}

function fontFamilyChange() {
    document.getElementById("phrases-list").style.fontFamily = document.getElementById("font-family-change").value;
    localStorage.setItem();
}

document.getElementById("backgroud-color-button").addEventListener("click",backgroudColorChange);
document.getElementById("color-button").addEventListener("click",colorChange);
document.getElementById("size-button").addEventListener("click",sizeChange);
document.getElementById("line-height-button").addEventListener("click", lineHeightChange)
document.getElementById("font-family-button").addEventListener("click", fontFamilyChange)

window.onload = function() {

}