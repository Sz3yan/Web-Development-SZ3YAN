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

function hide__form() {
    $("#seeAnotherField").change(function() {
        if ($(this).val() == "email") {
            $('#emailshow').show();
            $('#emailshow').attr('required','');
    
            $('#colabshow').hide();
            $('#hishow').hide();
            $('#colabshow').removeAttr('required');
            $('#hishow').removeAttr('required');
        } 
    
        else if (($(this).val() == "colab")) {
            $('#colabshow').show();
            $('#colabshow').attr('required','');
    
            $('#emailshow').hide();
            $('#hishow').hide();
            $('#emailshow').removeAttr('required');
            $('#hishow').removeAttr('required');
        }
    
        else if (($(this).val() == "hi")) {
            $('#hishow').show();
            $('#hishow').attr('required','');
    
            $('#emailshow').hide();
            $('#colabshow').hide();        
            $('#emailshow').removeAttr('required');
            $('#colabshow').removeAttr('required');
        }
        
        else {
            $('#emailshow').hide();
            $('#colabshow').hide();
            $('#hishow').hide();
            $('#emailshow').removeAttr('required');
            $('#colabshow').removeAttr('required');
            $('#hishow').removeAttr('required');
        }
    
    });
    
    $("#seeAnotherField").trigger("change");
}

function check(){
    var storeuser = localStorage.getItem("user");
    var storepw = localStorage.getItem("pw");
    var enteruser = document.getElementById("user")
    var enterpw = document.getElementById("pw")
    
    if (enteruser.value == storeuser && enterpw.value == storepw) {
        document.getElementById("formid").action = "../index.html"
    }

    else {
        alert("Click on sign up first.");
    }
}

function register__validate() {
    var password = document.getElementById("pw");

    password.addEventListener("keyup", function(){
        var pass = document.getElementById("pw").value;
        check(pass);
    });

    function check(password) {
        if (password.length >= 12) {
            document.querySelector(".twelve__character").style.listStyleType = "disc";
        } 
        
        else {
            document.querySelector(".twelve__character").style.listStyle = "none";
        }

        if (password.match(/([0-9])/)) {
            document.querySelector(".one__number").style.listStyleType = "disc";
        } 

        else {
            document.querySelector(".one__number").style.listStyle = "none";
        }

        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            document.querySelector(".lowerupper__case").style.listStyleType = "disc";
        } 
        
        else {
            document.querySelector(".lowerupper__case").style.listStyle = "none";
        }
                      
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            document.querySelector(".special__character").style.listStyleType = "disc";
        } 
                
        else {
            document.querySelector(".special__character").style.listStyle = "none";
        }
    }
}

function store(){
    if (document.querySelector(".twelve__character").style.listStyle != "none" &&
        document.querySelector(".one__number").style.listStyle != "none" &&
        document.querySelector(".special__character").style.listStyle != "none" &&
        document.querySelector(".lowerupper__case").style.listStyle != "none" 
    ) {
        localStorage.setItem('user', user.value);
        localStorage.setItem('pw', (pw.value));
        localStorage.setItem('nom', nom.value);
    }

    else {
        document.getElementById("reg").action = "";
        alert("Enter the password again");
    }
}

function change() {
    document.querySelector(".credit__hidden").classList.toggle("block");
}

function success() {
    if (document.getElementById("checkcard").style.borderColor != "red" &&
        document.getElementById("checkdate").style.borderColor != "red" &&
        document.getElementById("checkcvv").style.borderColor != "red"
    ) {
        document.querySelector(".buy").style.display = "none";
        document.querySelector(".done").style.display = "block";
    }

    else {
        alert("Check");
    }
}

function credit__validate() {
    var card = document.getElementById("checkcard");

    card.addEventListener("keyup", function(){
        if (card.value.length == 16) {
            card.style.borderColor = "green";
        }
    
        else {
            card.style.borderColor = "red";
        }
    });
}

function date__validate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("checkdate").setAttribute("min", today);
    document.getElementById("checkdate").style.borderColor = "green";
}

function cvv__validate() {
    var cvv = document.getElementById("checkcvv");

    cvv.addEventListener("keyup", function(){
        if (cvv.value.length == 3) {
            cvv.style.borderColor = "green";
        }
    
        else {
            cvv.style.borderColor = "red";
        }
    });
}