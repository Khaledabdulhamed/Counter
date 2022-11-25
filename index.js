
let countEl = document.getElementById("count-el") // pass in argument
let saveEl = document.getElementById("save-el")

let count = 0

console.log(saveEl)


function increment (){
   count++
   countEl.textContent = count
}

function save(){
   let countStr = count + " - "
   saveEl.textContent += countStr // change the innerText to textContent to have the empty space
   countEl.textContent = 0
   count = 0
   
   
}



