// 3 bugs in Walkers.js
// 1. import of getWalkers did not have an S
// 2. in the for loop, walker.fullName should just be walker.name
// 3. not returning walkerHTML


import { getWalkers } from "./database.js"

const walkers = getWalkers()

export const Walkers = () => {

    let walkerHTML = "<ul>"

    for (const walker of walkers) {

        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}


//CH.8 SHOW WALKER SERVICE AREAS

import { getWalkerCities } from "./database.js"
const walkerCities = getWalkerCities()

import { getCities } from "./database.js"
const cities = getCities()



document.addEventListener(
    "click",  
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("walker")) {


            const [,walkerId] = itemClicked.id.split("--")

            for (const walkerObject of walkers) {

   
                if (walkerObject.id === parseInt(walkerId)) {
                   
                //FIND WALKERCITIES OBJECT/S (SOMETIMES MULTIPLE)  WITH WALKER ID
                let relatedCityIDs = []
                for(const walkerCityObject of walkerCities){
                    if(walkerCityObject.walkerId === walkerObject.id){
                        relatedCityIDs.push(walkerCityObject.cityId)
                    }
                }

                //FOR EACH CITY ID, LOOP THROUGH CITIES to FIND THE MATCHING CITY NAMES
                let relatedCities = []
                let cityString = ''
                for(const cityID of relatedCityIDs){
                    for(const cityObject of cities){
                        if(cityObject.id === cityID){
                        relatedCities.push(cityObject.name)
                        }   
                    }
                
                    cityString = relatedCities.join(' and ');
                }

            // INSERT MATCHINGPET AND FOUNDWALKER NAMES INTO ALERT
            window.alert(`${walkerObject.name} services ${cityString}`)

                }
            }
        }
    }
)



