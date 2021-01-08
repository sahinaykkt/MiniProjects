const panels = document.querySelectorAll(".panel");

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", function () {
        if (panels[i].classList.contains("active")) {
            removeActive();
        } else {
            removeActive();
            panels[i].classList.add("active");
        }
    })
};

function removeActive() {
    for (let k = 0; k < panels.length; k++) {
        panels[k].classList.remove("active");
    }
}
