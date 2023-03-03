import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


//CH.8 SHOW WALKER SERVICE AREAS

import { getWalkerCities } from "./database.js"
const walkerCities = getWalkerCities()

import { getCities } from "./database.js"
const Cities = getCities()



//CH.6 NAVIGATING ERD RELATIONSHIPS

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF WALKERS
import { getWalkers } from "./database.js"
const walkers = getWalkers()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A PET?
        if (itemClicked.id.startsWith("pet")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED PET?
            const [,petPrimaryKey] = itemClicked.id.split("--")


            //FIND THE WHOLE PET OBJECT TO GET THE NAME
            let matchingPet = null
            for (const petObject of pets){
                if (parseInt(petPrimaryKey) === petObject.id){
                    matchingPet = petObject
                }
            }

            //FIND THE RELATED WALKER OBJECT ASSIGNED TO THE PET
            let foundWalker = null
            for(const walkerObject of walkers){
                if(matchingPet.walkerId === walkerObject.id){
                    foundWalker= walkerObject
                }
            }



            // INSERT MATCHINGPET AND FOUNDWALKER NAMES INTO ALERT
            window.alert(`${matchingPet.name} is being walked by ${foundWalker.name}`)

        }
    }
)




// //CH.4 CLICKING ON PETS


const findPet = (clickEvent) => {

    const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {

            const [,petPrimaryKey] = itemClicked.id.split("--")

            for (const petObject of pets) {

                if (petObject.id === parseInt(petPrimaryKey)) {
                    window.alert(`${petObject.name} barks at you"`)
                }
            }
        }
    }

document.addEventListener("click", findPet)


