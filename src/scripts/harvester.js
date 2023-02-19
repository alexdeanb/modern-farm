export const harvestPlants = (plantsArr) =>{
    let harvested = []
    for(let plant of plantsArr){
        let output = plant.output
        if(plant.type === "Corn"){
            output /= 2
        }
        for(let i = 0; i < output; i++){
            harvested.push(plant)
        }
    }
    return harvested;
}