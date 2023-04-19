// const { locationInfo } = require("jsdom/lib/jsdom/living/helpers/internal-constants")

// console.log('%c HI', 'color: firebrick')



// Renders the dogs data on the page
function renderDog(dog) {
    const dogA = document.createElement("img")
    dogA.src = dog
    document.querySelector('#dog-image-container').append(dogA);
 }


 // Renders the breed data on the page
 function renderBreed(breed) {
    const breedA = document.createElement("li")
    breedA.className = breed
    breedA.innerText = breed
    document.querySelector('#dog-breeds').append(breedA);

// Adds a click eventlistener to dogs
    breedA.addEventListener("click", (e) => {
    e.target.style.color = "red";
    })
 }


 // fetches dogs from the server
function getDogs() {
return fetch ("https://dog.ceo/api/breeds/image/random/4")
.then (response => response.json())
.then (dogs => dogs.message.forEach(dog => renderDog(dog)))
}
getDogs();

// fetches dog breeds from the server
function getBreeds() {
    return fetch ("https://dog.ceo/api/breeds/list/all")
    .then (response => response.json())
    .then (breeds => Object.keys(breeds.message).forEach(breed => renderBreed(breed)))
    }
getBreeds();


// working on deliverable 4
const dogPound = document.querySelector("#dog-breeds").childNodes
console.log(dogPound)






