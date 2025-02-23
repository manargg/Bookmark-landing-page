document.addEventListener("DOMContentLoaded", () => {
    /*THE NAV-LIST*/
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


    /*THE FEATUERS SECTION*/
    const featureLinks = document.querySelectorAll(".features-links a");
    const featureSections = document.querySelectorAll(".feature-section");

    featureLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 

            //Remove 'active' class from all links
            featureLinks.forEach(link => link.classList.remove("active"));

            //Add 'active' class to the clicked link
            link.classList.add("active");

            //Hide all sections
            featureSections.forEach(section => section.classList.remove("active"));

            //Show the corresponding section
            featureSections[index].classList.add("active");
        });
    });
});




document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        answer.classList.toggle('active');
    });
});