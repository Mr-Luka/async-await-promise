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

function handleError(err) {
    console.log("ohhh noooooo");
    console.log(err)
}

async function go(){
        const pizza = await makePizza(["pineapple"]);
        console.log(pizza)
        return pizza;
}
    
go().then(result=>{
    console.log(result)

}).catch(handleError);


async function goGo(){
    const result = await go()
}
// catch it at run time
// goGo().catch(handleError)

// make a safe function with a HOF
function makeSafe(fn, errorHandler) {
    return function (){
        fn().catch(errorHandler);
    }
}
const safeGo = makeSafe(go, handleError);
safeGo()


// async function goo (){
//     console.log("starting");
//     await wait(2000)
//     console.log("ending");
// }
// // goo()

// async function makeDinner(){
//     const pizzaPromise1 = makePizza(["vegan pepperoni"]);
//     const pizzaPromise2 = makePizza(["spinach"]);
//     const [vegPep, spin] = await Promise.all([pizzaPromise1, pizzaPromise2]);
//     console.log(vegPep, spin)
// }
// makeDinner()


// const go = document.querySelector(".go");



// function animate(e){
//     const el = e.currentTarget;
//     el.textContent = "Go!"
//     wait(200)
//     .then(()=>{
//         el.classList.add("circle");
//         return wait(500)
//     })
//     .then(()=> {
//         el.classList.add("red")
//         return wait(250)
//     })
//     .then(()=>{
//         el.classList.remove("circle");
//         return wait(500)
//     })
//     .then(()=> {
//         el.classList.remove("red")
//         el.classList.add("purple");
//         return wait(500)
//     })
//     .then(()=>{
//         el.classList.add("timeOut")
//     })
// }


// async function animate2(e){
//     const el = e.currentTarget;
//     el.textContent = "Go!"
//     await wait(200)
//     el.classList.add("circle");
//     await wait(500)
//     el.classList.add("red")
//     await wait(250)
//     el.classList.remove("circle");
//     await wait(500)
//     el.classList.remove("red")
//     el.classList.add("purple");
//     await wait(500)
//     el.classList.add("timeOut")
// }

// go.addEventListener("click", animate2)
