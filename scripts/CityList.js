// 3 bugs in CityList.js
// 1. getWalkers() was missing S
// 2. in the for loop, currentWalker.city should just be walker.city
// 3. HTML should be an unordered list (NOT OL) so it has bulletpoints like the others

import { getWalkers } from "./database.js"
const walkers = getWalkers()

import { getCities } from "./database.js"
const cities = getCities()


export const CityList = () => {
    
    let citiesHTML = "<ul>"

    for (const cityObject of cities) {
        citiesHTML += `<li>${cityObject.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}



