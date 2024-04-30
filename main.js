const wait = (ms=0) => new Promise(resolve => setTimeout(resolve, ms));

function makePizza (toppings = []) {
     return new Promise (function (resolve, reject){
        // Toppings if people try with pineapple
        if(toppings.includes("pineapple")){
            reject("Seriously? Get out!")
        }
        const amountOfTimeToBake = 500 + (toppings.length * 200)
        //Wait one second for pizza to cook
        setTimeout(function(){
            resolve(`Here is your pizza with toppings ${toppings.join(" ")}`)

        }, amountOfTimeToBake)
        // When you are ready, you can resolve this promise
        //If something went wrong, we can reject this promise
     });
}

async function go (){
    console.log("starting");
    await wait(2000)
    console.log("ending");
}
// go()

async function makeDinner(){
    const pizzaPromise1 = makePizza(["vegan pepperoni"]);
    const pizzaPromise2 = makePizza(["spinach"]);
    const [vegPep, spin] = await Promise.all([pizzaPromise1, pizzaPromise2]);
    console.log(vegPep, spin)
}
makeDinner()

