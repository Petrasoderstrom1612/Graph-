import {peopleWorkingAbroad} from "./data.js"
const peopleEl = document.getElementById("peopleEl")


console.log(peopleWorkingAbroad)

let women =  peopleWorkingAbroad[0].women
let men =  peopleWorkingAbroad[0].men
console.log(women,men)

let maxLength  
if(women.length > men-length){
    maxLength = women.length
} else{
    maxLength = men.length
}

let newArray = []

for(let i = 0; i < maxLength; i++){
    newArray.push(women[i])
    newArray.push(men[i])
}


let finalArray = ""
for(let i = 0;i < newArray.length; i++){
   if (i % 2 === 0){
    finalArray += `<p class="woman">${newArray[i]}</p>`
   } else{
    finalArray +=  `<p class="man">${newArray[i]}</p>`
   }
}
console.log(finalArray)
peopleEl.innerHTML = finalArray