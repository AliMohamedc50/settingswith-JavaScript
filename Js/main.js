// Select landing page element
let landingPage = document.querySelector(".landing-page");
var root = document.querySelector(":root");
let gearSetting = document.querySelector(".fa-gear")
let settingBox = document.querySelector(".setting-box")


let backgroundRandomOption = true ;
let clearIntervalBg ;


let yesno = document.querySelectorAll(".yesno span")


let checkbox = document.querySelector("#bg-random")

const colorLs = document.querySelectorAll(".color-list li")


let chooseBg = document.querySelectorAll(".choose-bg p")


let backgroundRandomOptionStorage = localStorage.getItem("backgroundRandom_Storage" )
if(backgroundRandomOptionStorage !== null) {
    if(backgroundRandomOptionStorage === "true") {
        backgroundRandomOption = true ;
    }else {
        backgroundRandomOption = false;
    }
    console.log(backgroundRandomOption)

    document.querySelector(".yesno .yes").classList.remove("active-bg")
    if( backgroundRandomOption === true) {
        document.querySelector(".yesno .yes").classList.add("active-bg")
    }else {
        document.querySelector(".yesno .no").classList.add("active-bg")
    }
}


let colorStorage = localStorage.getItem("color")

if (colorStorage !== null) {
    document.documentElement.style.setProperty('--main-color', colorStorage);

    colorLs.forEach(ele => {
        ele.classList.remove("active")
        if(ele.dataset.color === colorStorage) {
            ele.classList.add("active")
        }
    })

}




document.querySelector(".setting-box .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open")
}


console.log(localStorage.getItem("color"))

colorLs.forEach((li) => { 
    li.addEventListener("click", (e)=>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem("color" , e.target.dataset.color)
        

        colorLs.forEach(element => {
            element.classList.remove("active")
        })     

        e.target.classList.add("active")
        
    })
    // li.classList.remove("active")
})

if (document.getElementById("bg-random") ) {
    landingPage.style.backgroundImage = `url("imgs/wallpaperflare.com_wallpaper\ \(${1}\).jpg")`;

}


yesno.forEach(span => {

    localStorage.setItem 
    span.addEventListener("click" , (e) =>{
        yesno.forEach(ele => {
            ele.classList.remove("active-bg")
        }) 
        e.target.classList.add("active-bg")

        if(e.target.dataset.on === "yes") {
            backgroundRandomOption = true;
            localStorage.setItem("backgroundRandom_Storage", true )
            randomizeimgs()
        }else {
            backgroundRandomOption = false;
            localStorage.setItem("backgroundRandom_Storage", false )
            clearInterval(clearIntervalBg);
        }
    })
}) 




function randomizeimgs(){
    if (backgroundRandomOption) {
    clearIntervalBg = setInterval(() => {
    let random = Math.floor(Math.random() * 5) + 1 ;

    landingPage.style.backgroundImage = `url("imgs/wallpaperflare.com_wallpaper\ \(${random}\).jpg")`;
    }, 1000);
    }
}


randomizeimgs()


let chooseBgStorage = localStorage.getItem("numper_bg")

if (chooseBgStorage !== null) {
    landingPage.style.backgroundImage = `url("imgs/wallpaperflare.com_wallpaper\ \(${chooseBgStorage}\).jpg")`;
}


chooseBg.forEach(p => {
    p.addEventListener("click", (e) =>{
        localStorage.setItem("numper_bg", e.target.dataset.num)
        landingPage.style.backgroundImage = `url("imgs/wallpaperflare.com_wallpaper\ \(${chooseBgStorage}\).jpg")`;
    })
})






// Skills selector 
let skills = document.querySelector(".skills")

window.onscroll = function () {
    let skillsOffsetTop = skills.offsetTop;

    let skillsOuterHeight = skills.offsetHeight;

    let windowHeight = this.innerHeight ;

    let windoScrollTop = this.pageYOffset ;

    if(windoScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skills-progres span")
        allSkills.forEach((span) => {
            span.style.width = span.dataset.progress;
        })
    }
}


// creat popup


let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach( img => {
    img.addEventListener("click", (e) => {
        // creat overlay Element
        let overlay = document.createElement("div")
        // Add class Name in Overlay
        overlay.className = "popup-overlay"
        // Add Overlay to Body
        document.body.appendChild(overlay)

        // creat popup box
        let popupBox = document.createElement("div")
        // Add class Name in popup box
        popupBox.className = "popup-box"
        // creat image 
        let popupImg = document.createElement("img")
        popupImg.src = img.src
        // Add img in popup box
        popupBox.appendChild(popupImg)
        // add popup box on Overlay
        overlay.appendChild(popupBox)
        if(img.alt) {
            // creat h2
            const creatH2 = document.createElement("h2")
            creatH2.innerText = img.alt
            // console.log(creatH2)
            // add h2 to popup box
            popupBox.appendChild(creatH2)
        }
    })
})

// for close the overlay
document.addEventListener("click", function (e)  {
    if(e.target.classList.contains("popup-overlay")) {
        // popupOverlay.style.display = "none"
        document.querySelector(".popup-overlay").remove()
    }
})



