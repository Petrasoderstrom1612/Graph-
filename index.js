import {peopleWorkingAbroad} from "./data.js"
const mainBoxEl = document.getElementById("main-box-el")
const contriesEl = document.getElementById("contries-el")
const peopleEl = document.getElementById("people-el")

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
    let height = `${newArray[i] * 2.6}px`
   if (i % 2 === 0){
    finalArray += `<p class="column woman" style="height:${height}">${newArray[i]}</p>`
   } else{
    finalArray +=  `<p class="column man" style="height:${height}">${newArray[i]}</p>`
   }
}
console.log(finalArray)
peopleEl.innerHTML = finalArray

let leftSite = ""
for (let i = 10; i< 101; i+=10){
    leftSite += `<p class="left-number">${i}</p> `
}
mainBoxEl.innerHTML = leftSite

let countries= peopleWorkingAbroad[0].countries
let countriesHtml = ""
for (let i = 0; i < peopleWorkingAbroad[0].countries.length; i++){
countriesHtml += `<p>${countries[i]}</p>`
}

contriesEl.innerHTML = countriesHtml