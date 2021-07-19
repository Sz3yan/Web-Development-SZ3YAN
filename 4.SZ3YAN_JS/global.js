function nav__trigger() {
    const burger = document.querySelector(".nav__trigger");
    burger.addEventListener("click", function () {
        const body = document.body;
        body.classList.toggle("nav__open");
    
        var x = document.getElementById("nav__mobile");
        if (x.style.display === "block") {
            x.style.display = "none";
        } 
                    
        else {
            x.style.display = "block";
            }
        });
}