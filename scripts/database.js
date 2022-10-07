// TODO Create data structures for each source

const database = {
    // TODO Add empty object
    orderBuilder: {},


    paints: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 200 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 400 }

    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 100 },
        { id: 2, type: "Charcoal Fabric", price: 200 },
        { id: 3, type: "White Leather", price: 300 },
        { id: 4, type: "Black Leather", price: 400 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 100},
        { id: 2, package: "Navigation Package", price: 200},
        { id: 3, package: "Visibility Package", price: 300},
        { id: 4, package: "Ultra Package", price: 400}
    ],
    wheels: [
        { id: 1, size: "17 inch Pair Radial", price: 100},
        { id: 2, size: "17 inch Pair Radial Black", price: 200},
        { id: 3, size: "18 inch Pair Spoke Silver", price: 300},
        { id: 4, size: "18 inch Pair Spoke Black", price: 400},
    ],
    customOrders: [
        {
            id: 1,
            interiorId: 3,
            paintId: 2,
            wheelId: 3,
            technologyId: 4,
            timestamp: 1614659931693
        }
    ]
    

}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// TODO Create setter functions

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

// TODO Set up getter functions so other modules can import them


export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
    
}

export const getInteriors = () => {
    return database.interiors.map( interior=> ({...interior}))
}


export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}