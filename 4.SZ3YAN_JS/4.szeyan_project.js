function project__details() {
    var project = document.querySelectorAll(".chooseMe__card");
    
    for (let i = 0; i < project.length; i++) {
        project[i].addEventListener("click", function() {
            var title = document.getElementsByClassName("head");
            var head = document.querySelector(".project__title");
            var content = document.querySelector(".project__content");

            document.getElementById("hh").classList.toggle("show");
            document.getElementById("jj").classList.toggle("show");
            document.getElementById("kk").classList.toggle("appear");
            document.getElementById("ph").innerText = title[i].textContent;

            if (title[i].textContent == "SZ3Text. ") {
                head.textContent = "Creation Think. Edit. Sent.";
            }

            else if (title[i].textContent == "SZ3Search. ") {
                head.textContent = "Search Done. Done. Done.";
                
            }
        });
    }
    
    var btn = document.getElementById("ll");
    btn.addEventListener("click", function() {
        document.getElementById("hh").classList.toggle("show");
        document.getElementById("jj").classList.toggle("show");
        document.getElementById("kk").classList.toggle("appear");
    });
}