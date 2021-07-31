function project__details() {
    var project = document.querySelectorAll(".chooseMe__card");
    
    for (let i = 0; i < project.length; i++) {
        project[i].addEventListener("click", function() {
            document.getElementById("hh").classList.toggle("show");
            document.getElementById("jj").classList.toggle("show");
            document.getElementById("kk").classList.toggle("appear");
        });
    }
    
    var btn = document.getElementById("ll");
    btn.addEventListener("click", function() {
        document.getElementById("hh").classList.toggle("show");
        document.getElementById("jj").classList.toggle("show");
        document.getElementById("kk").classList.toggle("appear");
    });
}