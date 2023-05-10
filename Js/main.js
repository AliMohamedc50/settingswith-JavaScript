// Select landing page element
let landingPage = document.querySelector(".landing-page");
var root = document.querySelector(":root");
let gearSetting = document.querySelector(".fa-gear")
let settingBox = document.querySelector(".setting-box")

let timelineContainer = document.querySelector(".timeline-container")




// get head h3
let headInput = document.getElementById("head")
// get paragraph p
let paragraphInput = document.getElementById("paragraph")
// get submit button
let submitInput = document.getElementById("submit")
// get cancel button
let cancel = document.getElementById("cancel")



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



colorLs.forEach((li) => { 
    li.addEventListener("click", (e)=>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem("color" , e.target.dataset.color)
        

        colorLs.forEach(element => {
            element.classList.remove("active")
        })     

        e.target.classList.add("active")
        
    })
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











submitInput.onclick = function addNew() {
    if(headInput.value !== "" && paragraphInput.value !== "") {
        
        // Create timeline-left div
        let timelineLeft = document.createElement("div")
        let randomnum = Math.floor(Math.random() * 3) + 0
        let timelineLeftArr =
        ["timeline-left", "timeline-right",
        "timeline-left", "timeline-right",
        "timeline-left", "timeline-right"]
        // timelineLeft.className = "timeline-right"
        timelineLeft.className = timelineLeftArr[randomnum]

        // creat content div 
        let content = document.createElement("div")
        content.className = "content"

        // creat h3 
        let headcontent = document.createElement("h3")
        headcontent.innerHTML = headInput.value
        // Add h3 to content div
        content.appendChild(headcontent)

        // creat p
        let pcontent = document.createElement("p")
        pcontent.innerHTML = paragraphInput.value
        // Add p to content div
        content.appendChild(pcontent)

        // creat button Edit 
        let editButton = document.createElement("button")
        editButton.classList = "edit"
        editButton.innerHTML = "Edit"
        content.appendChild(editButton)

        // creat button Edit 
        let deletButton = document.createElement("button")
        deletButton.classList = "delete"
        deletButton.innerHTML = "Delete"
        content.appendChild(deletButton)


        // Add content div to timeline-left r
        timelineLeft.appendChild(content)

        // Create clear-box 
        let clearBox = document.createElement("div")
        clearBox.className = "clear-box"
        //Add clear-box to timelineContainer
        timelineContainer.appendChild(clearBox)
        // Add timelineLeft to timelineContainer
        timelineContainer.appendChild(timelineLeft)
        headInput.value = ""
        paragraphInput.value = ""
    }

    
    
        // get button Edit
        let edit = document.querySelectorAll(".edit")
        
        // get content for Edit 
        let content = document.querySelectorAll(".timeline .content")
        
        
    edit.forEach((ee) => {
        ee.onclick = function() {
            // console.log(ee.parentNode)
            headInput.value = ee.parentNode.querySelector("h3").innerHTML
            paragraphInput.value = ee.parentNode.querySelector("p").innerHTML
            submitInput.innerHTML = "Edit"
            cancel.onclick = function () {
                submitInput.innerHTML = "Add"
                headInput.value = ""
                paragraphInput.value = ""
                cancel.style.display = "none"
            }
            cancel.style.display = "block"
            submitInput.onclick = function() {
                if(submitInput.innerHTML == "Edit" ){
                    ee.parentNode.querySelector("h3").innerHTML = headInput.value
                    ee.parentNode.querySelector("p").innerHTML = paragraphInput.value
                    submitInput.innerHTML = "Add"
                    headInput.value = ""
                    paragraphInput.value = ""
                    
                }else {
                    addNew()
                }
            }
        }
    })
    





}


let deletebutton = document.querySelectorAll(".delete")

deletebutton.forEach((deletebut) => {
    deletebut.onclick = function () {
        // let clearBox = document.querySelectorAll 
        deletebut.parentElement.remove()
        deletebut.parentNode.insertAdjacentHTML("beforebegin" , "<p>This is before my div.</p>")
        // deletebut.parentNode.insertAdjacentHTML("beforebegin").remove()
        // deletebut.parentNode.remove()

    //     console.log(deletebut.parentNode.after.remove())
    // console.log(deletebut.parentNode.querySelector(":nth-of-type(0)"))
    // deletebut. .querySelector("p:nth-of-type(1)");
    }
})

    



let bullets = document.querySelectorAll(".bullets .bul")


let linkes = document.querySelectorAll(".links a") 


function scrollIntoViewsection(element) {
    console.log(element)
    element.forEach((e) => {
        e.onclick = function(e) {
            e.preventDefault();
            // console.log()
            document.querySelector(e.target.dataset.bul).scrollIntoView({
                behavior : 'smooth'
            })
        }
    })
}

scrollIntoViewsection(bullets)
scrollIntoViewsection(linkes)







// bullets.forEach((bul) => {
//     bul.onclick = function(e) {
//         // console.log()
//         document.querySelector(e.target.dataset.bul).scrollIntoView({
//             behavior : 'smooth'
//         })
//     }
// })







addNew()