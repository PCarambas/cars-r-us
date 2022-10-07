import { getOrders, getInteriors, getPaints, getTechnologies, getWheels } from "./database.js"

// Finding price for chosen interior
const buildOrderListItem = (order) => {
    const interiors = getInteriors()

    const chosenInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

let totalCost = chosenInterior.price



// Finding price for the chosen paint
const paints = getPaints()

const chosenPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
)
totalCost += chosenPaint.price



// Finding price for chosen technology
const technology = getTechnologies()

const chosenTechnology = technology.find(
    (technology) => {
        return technology.id === order.technologyId
    }
)
totalCost += chosenTechnology.price



// Finding price for chosen wheel
const wheel = getWheels()

const chosenWheel = wheel.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)
totalCost += chosenWheel.price





const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}