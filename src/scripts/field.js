

let growing = [];

export const addPlant = (seed) =>{

    if(Array.isArray(seed)){
        for(let item of seed){
            growing.push(item)
        }
    }else{
        growing.push(seed)
    }

};

export const usePlants = () =>{
    return growing
}
