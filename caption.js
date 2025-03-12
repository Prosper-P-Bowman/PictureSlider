

let sliderIndex = 2;
function sliderNext(){
    let dots = document.getElementsByClassName("dot");
    let sliders = document.getElementsByClassName("captionSlider");
    sliders[sliderIndex].style.display = "none";

    if(sliderIndex < sliders.length - 1){
        sliderIndex += 1;
        sliders[sliderIndex].style.display = "block";
    } else {
        sliderIndex = 0;
        sliders[sliderIndex].style.display = "block";
    }
    
    function Sliders(){
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
        }
        dots[sliderIndex].classList.add("active");
    }
    Sliders();
}

function sliderPrev(){
    let sliders = document.getElementsByClassName("captionSlider");
    sliders[sliderIndex].style.display = "none";

    if(sliderIndex > 0){
        sliderIndex -= 1;
        sliders[sliderIndex].style.display = "block";
    } else {
        sliderIndex = sliders.length - 1;
        sliders[sliderIndex].style.display = "block";
    }

    let dots = document.getElementsByClassName("dot");
    function Sliders(){
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
        }
        dots[sliderIndex].classList.add("active");
    }
    Sliders();
}

