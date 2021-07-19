function home__greeting() {
    var getname = localStorage.getItem("nom");

    if (getname != null) {
        document.write("<h1> Hey " + getname.charAt(0).toUpperCase() + getname.slice(1) + "</h1>");
    } 

    else {
        document.write("<h1>Hey Guys</h1>");
    }
}

function cursor() {
    window.onscroll = function () {
        scrollFunction();
    };
      
    function scrollFunction() {
        if (document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop < 2000) {
            const cursor = document.querySelector(".cursor");
            cursor.style.display = "block";
      
            let mouseX = 0;
            let mouseY = 0;
            let cursorX = 0;
            let cursorY = 0;
            let speed = 0.9;
        
            function animate() {
                let distX = mouseX - cursorX;
                let distY = mouseY - cursorY;
        
                cursorX = cursorX + distX * speed;
                cursorY = cursorY + distY * speed;
        
                cursor.style.left = cursorX + "px";
                cursor.style.top = cursorY + "px";
        
                requestAnimationFrame(animate);
            }
    
            animate();
        
            document.addEventListener("mousemove", (event) => {
                mouseX = event.pageX;
                mouseY = event.pageY;
            });
    
            } 
        
        else {
            document.querySelector(".cursor").style.display = "none";
        }
    }
}
