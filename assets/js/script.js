const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

const roles = [

    "Software Engineer",

    "Laravel Developer",

    "Backend Developer",

    "API Integrator",

    "AI-Assisted Developer"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typingElement.textContent =
            current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingElement.textContent =
            current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex = (roleIndex+1)%roles.length;

        }

    }

    setTimeout(typeEffect,deleting?40:80);

}

typeEffect();

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX+"px";

    glow.style.top = e.clientY+"px";

});