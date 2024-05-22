// function foo(){
//     throw new error('wha')
// }
// function bar(){
//     foo()
// }
// function baz(){
//     bar()
// }
// baz()

// console.log('hi')

// setTimeout(()=>{
//     console.log('there');
// }, 1000)

// console.log('hey!!')

// in this case, 
//1. hi gets on stack
//2. moves to console
//3. hi gets removed from stack
//4. setTimeout gets on stack
//5. setTimeout gets moved to webAPI waiting on its 1 second
//6. setTimeout gets removed from stack
//7. hey!! gets on stack
//8. hey!! moves to console
//9. callback from setTimeout gets moved to task queue
//10. event loop looks at the stack and task queue
//and if stack is empty, it pushes first thing on task queue to the stack.
//11. now, callback function is pushed stack and runs its console.log
//12. hey!! moves to console
//13. and callback function is removed from stack


//Callback Hell
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.btn')

btn.addEventListener("click", () => {
    setTimeout(()=>{
        first.style.color = 'red'
        setTimeout(()=>{
            second.style.color = 'blue'
            setTimeout(()=>{
                third.style.color = 'green'
            },2000)
        },3000)
    },1000)
})


//Promise

//async functions
// function orderPizza(callback) {
//     setTimeout(() => {
//         const pizza = 'best Pizza'
//         callback(pizza)
//     }, 2000);
// }
// function pizzaReady(pizza){
//     console.log(`eat your ${pizza}`)
// }
// orderPizza(pizzaReady);
// console.log('call me')

const p = new Promise((resolve,error) => {
    setTimeout(()=>{
        resolve('resolved value')
        reject('rejected error')
    }, 2000)
})
p.then((data)=>{
    console.log(data);
})
async function foo(){
    const data = await p;
    console.log(data);
    console.log("sync")
}
// foo()

const c = Promise.resolve(5).then((value)=>{
    console.log(value)
    return 4
}).then((number)=>{
    console.log(number)
}).then((number)=>{
    console.log(number)
})

// console.log(c)

function orderPizza(callback){
    setTimeout(()=>{
        const pizza = `🍕`
        callback(pizza)
    },2000)
}

function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`)
}

// orderPizza(pizzaReady);
// console.log('call me');


function getWeather(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('Rainy')
        },1000)
    })
}
function getWeatherIcon(weather){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            switch(weather){
                case 'Sunny':
                    resolve('🌞')
                    break
                case 'Cloudy':
                    resolve('☁️')
                    break
                case 'Rainy':
                    resolve('🌧️')
                    break
                default:
                    reject('no icon found')
            }
            resolve("Sunny")
        },1000)
    })
}
function onSuccess(data){
    console.log(`first data ${data}`)
}
function onError(error){
    console.log(`first data ${error}`)
}

// getWeather()
//     .then(getWeatherIcon)
//     .then(onSuccess)
//     .catch(onError)

function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("404")
        },1000)
    })
}

function fun2(){
    console.log('function2?')
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('🥸')
        }, 1000);
    })
}

function onSuccess1(data){
    console.log(data)
}

function onError1(error){
    console.log(`error ${error}`)
}

function inTheEnd(){
    console.log('we are done!!!')
}
// fun1()
//     .then(fun2)
//     .then(onSuccess1)
//     .catch(onError1)
//     .finally(inTheEnd)


function fetchData(){
    return new Promise(function(resolve, reject){
        fetch('https://api.weather.gov/gridpoints/OKX/34,-118/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast));
    })
}
function displayData(weather){
    console.log(weather);
}
function onError2(err){
    console.log(err);
}
// fetchData()
//     .then(displayData)
//     .catch(onError2)
