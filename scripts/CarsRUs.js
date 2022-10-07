// TODO Import modules
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

// TODO add event listener

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


/* Return an h2 heading from each module's component function to verify 
that each one is imported and return a value.*/


export const CarsRUs = () => {
    return `
            <h1>Cars R Us</h1>
    
            <article class="choices">
                <section class="choices__technologies options">
                  ${Technologies()}
                </section>
                <section class="choices__interiors options">
                   
                    ${Interiors()}
                </section>
                <section class="choices__paints options">
                    
                    ${Paints()}
                </section>
                <section class="choices__wheels options">
                    
                    ${Wheels()}
                </section>
                
            </article>
    
            <article>
                <button id="orderButton">Place Car Order</button>
            </article>
    
            <article class="customOrders">
                <h2>Custom Car Orders</h2>
                ${Orders()}
            </article>
        `
}









// return `
    // <h2>Paints</h2>
    // <h2>Interiors</h2>
    // <h2>Styles</h2>
    // <h2>Technologies</h2>
    //     `

