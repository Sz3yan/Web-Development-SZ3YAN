function project__details() {
    var project = document.querySelectorAll(".chooseMe__card");
    
    for (let i = 0; i < project.length; i++) {
        project[i].addEventListener("click", function() {
            var title = document.getElementsByClassName("head");
            var head = document.querySelector(".project__title");
            var content = document.querySelector(".project__content");
            var content1 = document.querySelector(".content1");
            var content2 = document.querySelector(".content2");

            document.getElementById("hh").classList.toggle("show");
            document.getElementById("jj").classList.toggle("show");
            document.getElementById("kk").classList.toggle("appear");
            document.getElementById("ph").innerText = title[i].textContent;

            if (title[i].textContent == "SZ3Dev. ") {
                head.textContent = "Collaboration Snap it. Build it. Send it.";
                content1.textContent = "Whether you are working alone or with friends, collaboration is key. Share ideas, send giant files or brainstorm on possible solutions. ";
                content2.textContent = "empowers you to do more.";
            }

            else if (title[i].textContent == "SZ3Photo. ") {
                head.textContent = "Creation Think. Edit. Sent";
                content1.textContent = "Everything is yours to reimagine and remake. Explore newfound hussle and pick up new skills.";
                content2.textContent = "equips you with the tool. Surprise yourself -- and the world.";
            }

            else if (title[i].textContent == "SZ3Search. ") {
                head.textContent = "Search Done. Done. Done.";
                content1.textContent = "Redesign from ground up.";
                content2.textContent = "simply and seamlessly focus on what matters. Search and summarised within seconds. Tune the information presented to you with ease, making anything, easy.";
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