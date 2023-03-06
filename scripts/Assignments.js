// 3 bugs in Assignments.js
// 1. allWalkers missing "s" in findWalker function
// 2. the currentPetWalker function called the findWalker walker function, but had the word "Pet" in the middle
// 3. AssingmentHTML was missing += and therefore only outputting the final assignment


import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the PET assigned to a walker
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// Function whose responsibility is to find the CITY assigned to a walker
const findCity = (walkerObject, cities) => {
    let matchingCity = null

    for (const city of cities) {
        if (city.id === walkerObject.cityId) {
            matchingCity = city.name
        }
    }

    return matchingCity
}


// RUN THE TWO FUNCTIONS AND THROW IT ALL IN A STRING FOR EACH PET
export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {

        const currentPetWalker = findWalker(currentPet, walkers)
        const currentPetCity = findCity(currentPetWalker, cities)


        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetCity}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

