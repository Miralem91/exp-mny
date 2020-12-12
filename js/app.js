class Survey {
    constructor() {
        this.surveyImg = document.querySelectorAll('.survey-image');
        this.inputDiv = document.querySelectorAll('.input-div');
    }


}

const imagesLoop = new Survey();
imagesLoop.surveyImg.forEach(surveyImg => {
    surveyImg.addEventListener("click", () => {
        surveyImg.classList.toggle('survey-image-clicked');
    });
});


const inputLoop = new Survey();
inputLoop.inputDiv.forEach(inputDiv => {
    inputDiv.addEventListener("click", () => {
        inputDiv.classList.toggle('input-active');
        console.log('it worked!');
    });
})