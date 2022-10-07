// TODO Import from database
import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()


// TODO Add event listener that reacts to the customer chosing one of the options

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)

/* Generate a select element that has child option elements as HTML representation of each
object in the corresponsing array in the database module.*/


export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interiors">'
    html += '<option value="0">Select an interior type</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.type}</option>`
    }

    html += "</select>"
    return html
    
}
