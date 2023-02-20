
export const harvestPlants = (plantsArr) =>{
    let harvested = []

    //For each plant in the harvested array, check the plant type.
    for(let plant of plantsArr){

        //Output was predefineds, set output equal to plant.output
        let output = plant.output
        //If corn, HALF the output
        if(plant.type === "Corn"){
            output /= 2
        }

        //Loop through each item less the output, push a plant for each one output.
        for(let i = 0; i < output; i++){
            harvested.push(plant)
        }
    }
    return harvested;
}