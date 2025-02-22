/*THE NAV-LIST*/
document.addEventListener("DOMContentLoaded", () => {

    const toggleButton = document.getElementById("nav-toggle");
    const closeButton = document.querySelector(".logo-bookmark .fa-xmark");
    const toggleMenu = document.getElementById("toggled-list");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector("#header a");


    toggleButton.addEventListener("click", () =>{
        toggleMenu.classList.add("show-menu");
        header.classList.add("hidden");
        toggleButton.classList.add("hidden");
    });
    
    closeButton.addEventListener("click", () =>{
        toggleMenu.classList.remove("show-menu");
        header.classList.remove("hidden");
        toggleButton.classList.remove("hidden");

    });
    navLinks.forEach(link =>{
        link.addEventListener("click", () =>{
            toggleMenu.classList.remove("show-menu");
            header.classList.remove("hidden");
            toggleButton.classList.remove("hidden");

        });
    });

});


