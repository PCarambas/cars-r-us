// TODO Import from database
import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()


// TODO Add event listener that reacts to the customer chosing one of the options

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheel(parseInt(event.target.value))
        }
    }
)

/* Generate a select element that has child option elements as HTML representation of each
object in the corresponsing array in the database module.*/

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel size</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.size}</option>`
    }

    html += "</select>"
    return html
    
}