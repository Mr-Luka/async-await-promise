const wait = (ms=0) => new Promise(resolve => setTimeout(resolve, ms));

async function go (){
    console.log("starting");
    await wait(2000)
    console.log("ending");
}
go()