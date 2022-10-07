// TODO Import from database
import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()


// TODO Add event listener that reacts to the customer chosing one of the options

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologies") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

/* Generate a select element that has child option elements as HTML representation of each
object in the corresponsing array in the database module.*/

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technologies">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of technologies) {
        html += `<option value="${tech.id}">${tech.package}</option>`
    }

    html += "</select>"
    return html

}


