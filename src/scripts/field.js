

let growing = [];

//Check if each item is in an array, if so loop through the array,
//adding each individual seed
//If not, just push the seed to the planted array.
export const addPlant = (seed) =>{

    if(Array.isArray(seed)){
        for(let item of seed){
            growing.push(item)
        }
    }else{
        growing.push(seed)
    }

};



//Function that returns the planted seeds.
export const usePlants = () =>{
    return growing
}
