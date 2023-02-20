let main = document.querySelector("main")



//take in what was harvested, for each harvested item, create= section adding to the main

export const catalog = (harvestedArr) =>{
    for(let harvested of harvestedArr){
        main.innerHTML += `<section class="plant">${harvested.type}</section>`
    }
}