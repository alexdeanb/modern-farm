import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"



/*  let corn = createCorn();
let plant = addPlant(corn);
let used =  usePlants(plant)
console.log(used)  */
let plan = createPlan()

let plantedField = plantSeeds(plan)
let harvest = harvestPlants(plantedField)
let catalogSite = catalog(harvest)