document.addEventListener("DOMContentLoaded", () => {
    //CHALLENGE 1
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        data.message.forEach(addImg)
    })

    function addImg(imgURL) {
        const myDog = document.createElement("img")
        myDog.src = imgURL
        document.getElementById("dog-image-container").appendChild(myDog)
        }
    
    //CHALLENGE 2
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        for (const breed in data.message) {
            addBreed(breed)
        }
    })
    .then(changeDoggyColor)

    function addBreed(breed) {
        const myBreed = document.createElement("li")
        myBreed.textContent = breed
        document.getElementById("dog-breeds").appendChild(myBreed)
    }

    //CHALLENGE 3
    function changeDoggyColor(){
        const doggies = document.querySelectorAll("li")
        for (const doggy of doggies) {
            doggy.style.cursor = "crosshair"
            doggy.addEventListener("click", () => {
                doggy.style.color = "blue"
                doggy.style.cursor = "help"
            })
        }
    }

    //CHALLENGE 4
    document.getElementById("breed-dropdown").addEventListener("change", event => {
        const myLetter = event.target.value
        filterDoggies(myLetter)
    })

    function filterDoggies(char){
        const doggies = document.querySelectorAll("li")
        for (const doggy of doggies) {
            doggy.style.display = "block"
            if (!doggy.textContent.startsWith(char))
                doggy.style.display = "none"
        }
    }
})