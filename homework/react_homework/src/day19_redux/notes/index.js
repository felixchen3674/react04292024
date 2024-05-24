

import { createStore as _createStore, combineReducers as _combineReducers } from 'redux'
const createStore = _createStore
const combineReducers = _combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

//action (action creators)
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action',
    }
}
function buyIce(){
    return {
        type: BUY_ICE,
    }
}

// (prevStatem, action) => newState

//state
const initialCake = {
    numOfCakes:20
}
const initialIce = {
    numOfIce:10,
}

//reducer (shop keeper)
const cakeReducer = (state = initialCake, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}
const iceReducer = (state = initialIce, action) => {
    switch(action.type){
        case BUY_ICE: return {
            ...state,
            numOfIce: state.numOfIce -1
        }
        default: return state
    }
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    ice: iceReducer,
})

const store = createStore(rootReducers)
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log('Updated State', store.getState())
})

//dispatching an action (buyCake()) to store.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
unsubscribe();

