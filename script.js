// ===============================
// ENTER WEBSITE
// ===============================

function enterWebsite() {

    document.getElementById("landingPage").style.display = "none";

    document.getElementById("mainWebsite").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// THANK YOU POPUP
// ===============================

function showMessage() {

    document.getElementById("popup").style.display = "flex";

}


// ===============================
// CLOSE POPUP
// ===============================

function closePopup() {

    document.getElementById("popup").style.display = "none";

}


// ===============================
// CLOSE POPUP WHEN CLICKING OUTSIDE
// ===============================

window.onclick = function(event){

    let popup = document.getElementById("popup");

    if(event.target == popup){

        popup.style.display = "none";

    }

}


// ===============================
// ESC KEY CLOSES POPUP
// ===============================

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        closePopup();

    }

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        let section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// CARD HOVER EFFECT
// ===============================

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.04)";
        card.style.transition=".4s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});


// ===============================
// HOBBY CARD HOVER
// ===============================

let hobby = document.querySelectorAll(".hobby-card");

hobby.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="translateY(-10px) rotate(2deg)";
        item.style.transition=".4s";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translateY(0px) rotate(0deg)";

    });

});


// ===============================
// FADE-IN ON SCROLL
// ===============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.hobby-card").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all 0.8s ease";

    observer.observe(el);

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",function(){

        this.style.transform="scale(.95)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

    });

});


// ===============================
// WELCOME MESSAGE IN CONSOLE
// ===============================

console.log("🌸 Welcome to Sanjana Sajjan's Family Website 🌸");