let currentIndex = 0;
function showSlide(index){
    const slider = document.querySelector(".slider");
    const totalSlides = document.querySelectorAll(".slides").length;


if(index < 0) {
    index = totalSlides - 1;
}
else if ( index >= totalSlides) {
    index= 0;
}
currentIndex = index;
const translateValue = -index * 100 +'%';
slider.style.transform = 'translateX(' + translateValue +')';
}
function prevSlide(){
    showSlide(currentIndex - 1);
}

function nextSlide(){
    showSlide(currentIndex + 1);
}
// counter script
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplays) => {
let startValue = 0;
let endValue = parseInt(valueDisplays.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter =setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
        clearInterval(counter);
    }
}, duration);

});