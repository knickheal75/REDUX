// state argument is not application state
// it is the only state this reducer is responsible for
export default function(state=null,action){
    switch(action.type){
        case "BOOTCAMPER_SELECTED" :
            return action.payload
    }
    return state
}