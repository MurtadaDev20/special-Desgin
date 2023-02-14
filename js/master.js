// Check If There Locakle Storge
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main--color' , localStorage.getItem("color_option"));

    // Check For Active Class
    document.querySelectorAll(".colors-list li").forEach(element => {

            element.classList.remove("active");


            if(element.dataset.color === mainColors) {

                element.classList.add("active");
            }
    });

}

// Random background Option
let backgroundOption = true;

// Virable To Control The Interval
let backgroundInterval;

//Toggle spin Class On Icon

document.querySelector(".toggle-settings .fa-cog").onclick = function () {

    // Toggle class fa-spin For Rotation on self
    this.classList.toggle("fa-spin");

     // Toggle class open
    document.querySelector(".settings-box").classList.toggle("open");
};


// Switch Colors 
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

    li.addEventListener("click", (e) =>{

        document.documentElement.style.setProperty('--main--color' , e.target.dataset.color);

        //Set Color on Local Storge
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        });

        // Add Active
        e.target.classList.add("active");

    })
})

// Switch Random Background Option 
const randomBackground= document.querySelectorAll(".random-background span");

//loop On All Span
randomBackground.forEach(span => {

    span.addEventListener("click", (e) =>{

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        });

        // Add Active
        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;
            randomiseImgs();

        } else {

            backgroundOption = false;
            clearInterval(backgroundInterval);
        }
    })
})

// Select LandingPage Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Imges
let imgesArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];



// Function To Randomise Imge
function randomiseImgs() {

    if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgesArray.length);

    //Change Background Imges Url 
    landingPage.style.backgroundImage = 'url("imge/' + imgesArray[randomNumber] + '")';
    
    }, 10000);
    
    }

}

randomiseImgs();
////////////////////////////////////////////////////

// Select Skills 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Ofset top
    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });
    } else {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });
    }


    // this.console.log(windowScrollTop)
};

//Craete Popup With the Image

let ourGallary = document.querySelectorAll(".gallery img");

ourGallary.forEach(img => {

    img.addEventListener('click', (e) => {

        let overlay =document.createElement("div");

        overlay.classList = 'popup-overlay';

        document.body.appendChild(overlay)

        // Craete The Popup Box
        let popupBox = document.createElement("div");

        popupBox.className='popup-box';

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3")

            let imgText = document.createTextNode(img.alt)

            imgHeading.appendChild(imgText)

            popupBox.appendChild(imgHeading)
        }

         // Craete The Image 
        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        //Add Image To Popup Box
        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        /////////////////////Crate The Close Span/////////////////////
        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = 'close-button';

        popupBox.appendChild(closeButton)
    });
})

//Close Popup 
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

        e.target.parentNode.remove();

        //Remove OverLay
        document.querySelector(".popup-overlay").remove();
    }

})
