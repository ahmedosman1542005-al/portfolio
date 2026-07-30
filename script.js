// =========================
// تغيير لون الـ Navbar
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#07111f";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.4)";
        header.style.boxShadow = "none";

    }

});

// =========================
// Scroll Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    section.classList.add("hidden");
    observer.observe(section);

});

// =========================
// Typing Effect
// =========================

const roles = [

"AI Engineer",
"Machine Learning Engineer",
"NLP Engineer",
"Full Stack Developer"

];

let role = 0;
let letter = 0;
let deleting = false;

const title = document.querySelector(".hero-text h2");

function typeEffect(){

    let current = roles[role];

    if(!deleting){

        title.textContent = current.substring(0,letter++);

        if(letter > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        title.textContent = current.substring(0,--letter);

        if(letter == 0){

            deleting = false;

            role++;

            if(role == roles.length){

                role = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?50:120);

}

typeEffect();

// =========================
// زر العودة للأعلى
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.classList.add("active");

    }else{

        topBtn.classList.remove("active");

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// تفعيل روابط الـ Navbar
// =========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});




