// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //capture images into variables
    var spring = document.getElementById("spring");
    var bamboo = document.getElementById("bamboo");
    var fun = document.getElementById("fun");
    var above = document.getElementById("above");
    var love = document.getElementById("love");
    var opposites = document.getElementById("opposites");

    //capture aside images into variables
    var springBox = document.getElementById("springBox");
    var bambooBox = document.getElementById("bambooBox");
    var funBox = document.getElementById("funBox");
    var aboveBox = document.getElementById("aboveBox");
    var loveBox = document.getElementById("loveBox");
    var oppositesBox = document.getElementById("oppositesBox");

    //capture close light box
    var close = document.getElementById("close");
    var close2 = document.getElementById("close2");
    var close3 = document.getElementById("close3");
    var close4 = document.getElementById("close4");
    var close5 = document.getElementById("close5");
    var close6 = document.getElementById("close6");


    //add hover listener
    spring.addEventListener("mouseover", function() {
        spring.src = "images/springSmall.jpg";
        spring.style.zIndex = 6;
    });

    bamboo.addEventListener("mouseover", function() {
        bamboo.src = "images/bambooSmall.jpg";
        bamboo.style.zIndex = 5;
    });

    fun.addEventListener("mouseover", function() {
        fun.src = "images/funSmall.jpg";
        fun.style.zIndex = 4;
    });

    above.addEventListener("mouseover", function() {
        above.src = "images/aboveSmall.jpg";
        above.style.zIndex = 3;
    });

    love.addEventListener("mouseover", function() {
        love.src = "images/loveSmall.jpg";
        love.style.zIndex = 2;
    });

    opposites.addEventListener("mouseover", function() {
        opposites.style.zIndex = 1;
        opposites.src = "images/oppositesSmall.jpg";
    });

    //add nonhover listener
    spring.addEventListener("mouseout", function() {
        spring.src = "images/transparent/springBW_trans.png";
        spring.style.zIndex = -1;
    });

    bamboo.addEventListener("mouseout", function() {
        bamboo.src = "images/transparent/bambooBW_trans.png";
        bamboo.style.zIndex = -1;
    });

    fun.addEventListener("mouseout", function() {
        fun.src = "images/transparent/funBW_trans.png";
        fun.style.zIndex = -1;
    });

    above.addEventListener("mouseout", function() {
        above.src = "images/transparent/aboveBW_trans.png";
        above.style.zIndex = -1;
    });

    love.addEventListener("mouseout", function() {
        love.src = "images/transparent/loveBW_trans.png";
        love.style.zIndex = -1;
    });

    opposites.addEventListener("mouseout", function() {
        opposites.src = "images/transparent/oppositesBW_trans.png";
        opposites.style.zIndex = -1;
    });

    //add click light box
    spring.addEventListener('click', function() {
        springBox.style.display = "block";
    })

    bamboo.addEventListener('click', function() {
        bambooBox.style.display = "block";
    })

    fun.addEventListener('click', function() {
        funBox.style.display = "block";
    })

    above.addEventListener('click', function() {
        aboveBox.style.display = "block";
    })

    love.addEventListener('click', function() {
        loveBox.style.display = "block";
    })

    opposites.addEventListener('click', function() {
        oppositesBox.style.display = "block";
    })

    //add close function
    close.addEventListener('click', function() {
        springBox.style.display = "none";
    })

    close2.addEventListener('click', function() {
        bambooBox.style.display = "none";
    })

    close3.addEventListener('click', function() {
        funBox.style.display = "none";
    })

    close4.addEventListener('click', function() {
        aboveBox.style.display = "none";
    })

    close5.addEventListener('click', function() {
        loveBox.style.display = "none";
    })

    close6.addEventListener('click', function() {
        oppositesBox.style.display = "none";
    })

});
