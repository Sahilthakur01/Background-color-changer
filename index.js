const greybox = document.querySelector("#grey")

greybox.addEventListener("click", function(){
    document.body.style.backgroundColor = "grey"
})


// for white for
const white = document.querySelector("#white")

white.addEventListener("click", function(){
    document.body.style.backgroundColor = "Pink"

})

// for blue box
const blue = document.querySelector("#blue")

blue.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue"

})


const yellow = document.querySelector("#yellow")

yellow.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow"

})


//-------> External function  which is used to changes the background clour in this we giving the refernce of the function 

// function changeBackgroundColorToBlu(){
//     document.body.style.backgroundColor = "grey"
// }

// ------> In this we create a fucntion inside the eventlistener 

// greybox.addEventListener("click", function(){
//     document.body.style.backgroundColor = "grey"
// })
