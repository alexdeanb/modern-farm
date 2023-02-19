let main = document.querySelector("main")

export const catalog = (harvestedArr) =>{
    for(let harvested of harvestedArr){
        main.innerHTML += `<section class="plant">${harvested.type}</section>`
    }
}