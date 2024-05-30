/* Dissable right-click */
let clickCount = 0;

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    clickCount++;

    if (clickCount === 3) {
        alert("Content protected");
        clickCount = 0;
    }
});

/* Hamburger Layout JS */
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');

    hamburger.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });
});


/* Rooms JS */
$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
});



/* Map img slider JS */
function changeImage(fileName) {
    let img = document.querySelector("#image");
    img.setAttribute("src", fileName);
}
