// TODO Import from database
import { getPaints, setPaint } from "./database.js"

const paints = getPaints()


// TODO Add event listener that reacts to the customer chosing one of the options

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paints") {
            setPaint(parseInt(event.target.value))
        }
    }
)

/* Generate a select element that has child option elements as HTML representation of each
object in the corresponsing array in the database module.*/


export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paints">'
    html += '<option value="0">Select a paint color Type</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html
    
}