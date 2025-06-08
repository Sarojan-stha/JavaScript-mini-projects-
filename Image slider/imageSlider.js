const slides = document.querySelectorAll(".imageSlider img");
console.log(slides);

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
//  intervalId = setInterval(nextSlide,5000);
   }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
        index = 0;
    }
    else if(index <0){
        slideIndex = slides.length -1;
        index = slideIndex;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide")
}

function prevSlide(){
/*     clearInterval(intervalId);
 */    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}